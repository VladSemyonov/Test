import { ReactElement, useContext } from "react";
import sanitizeHtml from "sanitize-html";
import IndexPageContext from "../Context/IndexContext";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";

export default function Hero(): ReactElement {
  const { page } = useContext(IndexPageContext);
  const title = getPropertyAsStr(page, "hero_title");
  const img = getPropertyAsStr(page, "hero_img");
  const sanitizedDescription = sanitizeHtml(
    getPropertyAsStr(page, "hero_subtitle"),
  );

  return (
    <section
      className="flex relative h-screen items-center bg-cover justify-between flex-col"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex my-auto mx-auto justify-center items-center text-center">
        <div className="flex mx-auto max-w-5xl items-center">
          <div className="w-auto rounded-2xl bg-blue-800 p-4 bg-opacity-75 text-white">
            <h1 className="text-lg sm:text-xl text--uppercase lg:text-4xl mb-4 ">
              {title}
            </h1>
            <div
              className="hidden md:block text-sm lg:text-xl"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
