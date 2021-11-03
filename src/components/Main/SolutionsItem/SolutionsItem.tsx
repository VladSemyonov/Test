import { FunctionComponent, useEffect, useState } from "react";
import { getPropertyAsStr } from "../../../utils/getPropertyAsStr";
import { CmsTableRecord } from "../../../types/common";

import machine from "../../../../static/svg/sewing_machine.svg";
import paper from "../../../../static/svg/paper.svg";
import certificate from "../../../../static/svg/sertificate.svg";

interface SolutionsItemProps {
  data: CmsTableRecord;
  number: number;
}

const SolutionsItem: FunctionComponent<SolutionsItemProps> = ({
  data,
  number,
}) => {
  const [img, setImg] = useState();
  const title = getPropertyAsStr(data, "title");
  const subtitle = getPropertyAsStr(data, "subtitle");

  useEffect(() => {
    switch (number) {
      case 0:
        setImg(machine);
        break;
      case 1:
        setImg(paper);
        break;
      case 2:
        setImg(certificate);
        break;
      default:
        break;
    }
  }, [number]);

  return (
    <div className="px-2 text-red-600 mb-2 w-full lg:w-1/3">
      <div className="w-full transition duration-300 bg-white hover:text-white hover:bg-red-500 p-4 shadow-lg rounded svg-white">
        <div className="">
          <img className="w-12 h-12" src={img} width="25" height="25" alt="" />
        </div>
        <h3 className="my-4">{title}</h3> <p>{subtitle} </p>
      </div>
    </div>
  );
};

export default SolutionsItem;
