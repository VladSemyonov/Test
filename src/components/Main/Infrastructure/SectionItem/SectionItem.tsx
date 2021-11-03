import { FunctionComponent } from "react";
import { CmsTableRecord } from "../../../../types/common";
import { getPropertyAsStr } from "../../../../utils/getPropertyAsStr";
import AppLink from "../../../AppLink";

interface InfrastructureSectionItemProps {
  data: CmsTableRecord;
}

const InfrastructureSectionItem: FunctionComponent<InfrastructureSectionItemProps> =
  ({ data }) => {
    const title = getPropertyAsStr(data, "title");
    const image = getPropertyAsStr(data, "image");
    const link = getPropertyAsStr(data, "path_to_id");

    return (
      <div className="w-full sm:w-1/2 m-0 py-4 px-2">
        <AppLink to={link}>
          <div className="shadow-2xl rounded-lg slide">
            <figure className="">
              <img
                src={image}
                alt=""
                className="w-full rounded-t-lg"
                width="480"
                height="320"
                loading="lazy"
              />
              <div className="font-medium relative h-10 flex items-center justify-between">
                <div className="ml-4 text-black relative">{title}</div>
                <div className="infra_arrow" />
              </div>
            </figure>
          </div>
        </AppLink>
      </div>
    );
  };

export default InfrastructureSectionItem;
