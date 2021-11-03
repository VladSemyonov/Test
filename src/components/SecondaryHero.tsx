import { FC } from "react";

interface SecondaryHeroComponent {
  title: string;
  img: string;
}

const SecondaryHero: FC<SecondaryHeroComponent> = ({ title, img }) => (
  <section
    className="w-full flex justify-center items-center h-64 mb-8 bg-cover"
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className="w-auto py-6 px-8 bg-blue-800 bg-opacity-75 rounded-2xl h-1/3 flex justify-center">
      <h1 className="text-white text-3xl">{title}</h1>
    </div>
  </section>
);

export default SecondaryHero;
