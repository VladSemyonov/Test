import { FunctionComponent } from "react";
import { box, close, content } from "./PreviewImageDialog.module.scss";

export interface PreviewImage {
  src: string;
  caption?: string;
}

interface PreviewImageDialogProps {
  previewImage: PreviewImage;
  callback: () => void;
}

const PreviewImageDialog: FunctionComponent<PreviewImageDialogProps> = ({
  previewImage,
  callback,
}) => {
  const { src, caption } = previewImage;

  return (
    <div className={box} onClick={callback}>
      <span className={close}>&times;</span>
      <img className={content} src={src} alt="" />
      <div className={caption}>{caption}</div>
    </div>
  );
};

export default PreviewImageDialog;
