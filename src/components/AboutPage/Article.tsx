import { FunctionComponent } from "react";
import sanitizeHtml from "sanitize-html";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";
import { CmsTableRecord } from "../../types/common";

interface ArticleComponent {
  data: CmsTableRecord;
  reverse: boolean;
}

const Article: FunctionComponent<ArticleComponent> = ({ data, reverse }) => {
  const { slug } = data;
  const title = getPropertyAsStr(data, "title");
  const img = getPropertyAsStr(data, "img");
  const sanitizedDescription = sanitizeHtml(
    getPropertyAsStr(data, "description"),
  );

  return (
    <div
      className={`w-full flex flex-wrap my-8 ${reverse && "flex-row-reverse"}`}
      id={slug}
    >
      <div
        id="add"
        className={`w-full mt-4 lg:w-1/2 lg:pr-4 lg:${
          !reverse ? "pr-4" : "pl-4"
        }`}
      >
        {title && <h1 className="text-black text-2xl sm:text-3xl">{title}</h1>}
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          className="text-black mt-4"
        />
      </div>
      <div className={`w-full mt-4 lg:w-1/2 lg:${!reverse ? "pl-4" : "pr-4"} `}>
        <img
          className="w-full shadow-2xl rounded-2xl"
          src={img}
          alt=""
          width="704"
          height="470"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Article;
