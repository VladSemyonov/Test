/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FunctionComponent, useState } from "react";
import PreviewImageDialog, {
  PreviewImage,
} from "../PreviewImageDialog/PreviewImageDialog";
import { section, section_image } from "./PreviewImageList.module.scss";

interface Img {
  publicURL: string;
  name: string;
}

interface CollectionImg {
  items: Array<Img>;
}

const PreviewImageList: FunctionComponent<CollectionImg> = ({ items }) => {
  const filteredArray = items.filter((i) => !i.name.includes("big"));

  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

  const handlePreviewDialogCallback = () => {
    setPreviewImage(null);
  };

  const handleImageClick = (src: string, caption?: string) => {
    if (src && window.innerWidth >= 480) {
      setPreviewImage({
        src,
        caption,
      });
    }
  };

  function getBigImg(name: string): string {
    return items.find((item) => item.name === `${name}-big`)?.publicURL ?? "";
  }

  return (
    <section className={section}>
      <div className="container mx-auto flex flex-wrap">
        {filteredArray.map((item) => {
          const bigImg = getBigImg(item.name);

          return (
            <div className="w-full p-4 sm:w-1/2 lg:w-1/3" key={item.name}>
              <div className={section_image}>
                <img
                  src={item.publicURL}
                  alt=""
                  className="w-full"
                  loading="lazy"
                  width="420"
                  height="594"
                  onClick={() => handleImageClick(bigImg)}
                />
              </div>
            </div>
          );
        })}
      </div>

      {previewImage && (
        <PreviewImageDialog
          previewImage={previewImage}
          callback={handlePreviewDialogCallback}
        />
      )}
    </section>
  );
};

export default PreviewImageList;
