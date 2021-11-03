import { ReactElement, useContext } from "react";
import IndexPageContext from "../../Context/IndexContext";
import clew from "../../../../static/svg/clew.svg";
import { getPropertyAsStr } from "../../../utils/getPropertyAsStr";
import AppLink from "../../AppLink";

export default function MiddleSection(): ReactElement {
  const { page } = useContext(IndexPageContext);
  const title = getPropertyAsStr(page, "about_title");
  const description = getPropertyAsStr(page, "about_description");
  const description2 = getPropertyAsStr(page, "about_description-2");

  return (
    <section className="container mx-auto my-8 w-full px-2">
      <div className="flex flex-wrap w-full">
        <div className="w-full">
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
          <div className="w-full flex flex-wrap mt-8 px-2">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <p className="text-black mb-4">{description}</p>{" "}
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <p className="text-black mb-4">{description2}</p>{" "}
              <AppLink
                to="/about"
                className="py-2 font-medium px-4 rounded-lg border bg-white text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
              >
                Подробнее
              </AppLink>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full hr-style my-8" />
    </section>
  );
}
