import { ReactElement, useContext } from "react";
import IndexPageContext from "../../Context/IndexContext";
import SolutionsItem from "../SolutionsItem/SolutionsItem";

export default function TopSection(): ReactElement {
  const { solutions } = useContext(IndexPageContext);

  return (
    <section className="flex relative -top-10 justify-center">
      <div className="flex flex-wrap justify-center w-full">
        {solutions.map((item, index) => (
          <SolutionsItem data={item} key={item.slug} number={index} />
        ))}
      </div>
    </section>
  );
}
