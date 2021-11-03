import { BaseSyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactUsResponse {
  success: boolean;
}

interface ContactFormValues {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

type SubmitStatusType = "submitting" | "success" | "error" | "none";

const ContactForm = (): JSX.Element => {
  const { t } = useTranslation("contact");

  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>("none");

  const handleSendMore = () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    form?.reset();
    setSubmitStatus("none");
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (!process.env.CONTACT_API_URL) {
      setSubmitStatus("error");
      return;
    }

    const {
      name,
      phone: contactPhone,
      email: contactEmail,
      message,
    } = event.target as ContactFormValues;

    setSubmitStatus("submitting");

    fetch(process.env.CONTACT_API_URL, {
      method: "POST",
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow", // manual, *folslow, error
      // referrer: "client", // no-referrer, *client
      body: JSON.stringify({
        name: name?.value ?? "",
        phone: contactPhone?.value ?? "",
        email: contactEmail?.value ?? "",
        message: message?.value ?? "",
      }),
    })
      .then((response) => response.json())
      .then((response: ContactUsResponse) => {
        if (response.success) {
          setSubmitStatus("success");
        } else {
          // eslint-disable-next-line no-console
          console.error("Send email error");
          setSubmitStatus("error");
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
        setSubmitStatus("error");
      });
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-wrap w-full lg:w-1/2"
    >
      <h2 className="font-bold w-full mt-8 mb-4">{t("contact:callWithUs")}</h2>

      <div className="w-full pr-0 sm:pr-2 sm:w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          {t("contact:formName")} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div className="w-full pl-0 sm:pl-2 sm:w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
          {t("contact:phoneNumber")}
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          {t("contact:formEmail")} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div className="w-full">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            {t("contact:formMessage")} *
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
          />
        </div>

        {submitStatus === "error" && (
          <div className="py-4">
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">
                {t("contact:contactUsError")}
              </span>
            </div>
          </div>
        )}
        {submitStatus !== "success" && (
          <button
            type="submit"
            className="mt-2 px-4 py-1 border border-blue-500 rounded bg-white text-blue-500 font-medium hover:text-white hover:bg-blue-500"
            disabled={submitStatus === "submitting"}
          >
            {submitStatus === "submitting"
              ? t("contact:submitting")
              : t("contact:submit")}
          </button>
        )}
        {submitStatus === "success" && (
          <div className="py-4">
            <div
              className="bg-green-100 border border-green-500 text-green-900 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">
                {t("contact:contactUsSuccess")}
              </span>
            </div>
            <button
              type="button"
              onClick={handleSendMore}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 py-4"
            >
              {t("contact:sendMore")}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
