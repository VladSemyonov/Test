import axios from "axios";
import { API_ENDPOINT, API_SITE_ID } from "../../app-config";

export default async function callGraphqlApi<T, R>(
  query: string,
  variables?: R,
): Promise<{ data: T | undefined; error?: unknown }> {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}`,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.stringify({
            siteID: API_SITE_ID,
          }),
        },
      },
    );

    if (response.data.errors) {
      // eslint-disable-next-line no-console
      console.error("Error in callGraphqlApi", response.data.errors);
      return { data: undefined, error: response.data.errors };
    }

    return { data: response.data.data };
  } catch (error) {
    const err = error.response?.data?.errors ?? error;
    // eslint-disable-next-line no-console
    console.error("Error in callGraphqlApi", err, "query:", query, variables);
    return { data: undefined, error: err };
  }
}
