import { FC } from "react";

interface GalleryProps {
  item: {
    publicURL: string;
  };
}

const GalleryImage: FC<GalleryProps> = ({ item }) => (
  <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <img
        className="w-full "
        src={item.publicURL}
        loading="lazy"
        width="480"
        height="320"
        alt=""
      />
    </div>
  </div>
);

export default GalleryImage;
