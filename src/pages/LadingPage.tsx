import Heading from "@/components/landing-components/heading";
import { FC } from "react";

interface LadingPageProps {}

const LadingPage: FC<LadingPageProps> = ({}) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center lg:items-start  lg:justify-stretch mt-16 gap-7">
      <div className=" md:w-2/3  w-full ">
        <Heading />
      </div>
      <div className="w-1/3 hidden lg:flex ">scroll animating</div>
    </div>
  );
};

export default LadingPage;
