import { FunctionComponent, useContext } from "react";
import sanitizeHtml from "sanitize-html";
import InfrastructureSectionItem from "../SectionItem/SectionItem";
import IndexPageContext from "../../../Context/IndexContext";
import clew from "../../../../../static/svg/clew.svg";
import { getPropertyAsStr } from "../../../../utils/getPropertyAsStr";

const InfrastructureSection: FunctionComponent = () => {
  const { infrastructures, page } = useContext(IndexPageContext);
  const title = getPropertyAsStr(page, "infrastructure_title");
  const description = sanitizeHtml(
    getPropertyAsStr(page, "infrastructure_description"),
  );
  const description2 = sanitizeHtml(
    getPropertyAsStr(page, "infrastructure_description-2"),
  );

  return (
    <section className="container mx-auto px-2">
      <div className="flex w-full content-center">
        <div className="h-16 w-16">
          <img
            width="70"
            height="70"
            className="my-2"
            src={clew}
            alt="yunotex"
          />
        </div>
        <div className="ml-4 flex h-auto items-center">
          <h2 className="leading-8 text-2xl sm:text-3xl font-semibold text-black">
            {title}
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-wrap my-6 px-2">
        <div
          className="w-full lg:w-1/2"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div
          className="w-full lg:w-1/2"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: description2 }}
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="w-full flex justify-center flex-wrap"
      >
        {infrastructures?.map((item) => (
          <InfrastructureSectionItem key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
};

export default InfrastructureSection;
