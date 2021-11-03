import { FunctionComponent } from "react";
import AboutYTX from "../AboutYNT/AboutYTX";
import InfrastructureSection from "../Infrastructure/Section/Section";

const MainContent: FunctionComponent = () => (
  <div className="w-full relative gradient-shadow">
    <div className="container mx-auto relative pb-8 ">
      <AboutYTX />
      <InfrastructureSection />
    </div>
  </div>
);

export default MainContent;
