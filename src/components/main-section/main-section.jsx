import React from "react";
import PetImage from "../../images/image 91.svg";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as AudioPhile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../button";

export const MainSection = () => {
  return (
    <section className="w-full flex-col md:flex-row flex mt-6 h-screen justify-between">
      <div className="relative order-2 md:order-1 text-center md:text-left md:w-3/4 mt-12 xl:mt-60">
        <h1 className="text-3xl md:text-8xl xl:text-20xl font-bold md:whitespace-pre-line mt-0.2">{`ALL\n the LOVE`}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">{`Your pet deserves!\n Join us, i don't know what else i can say\n For example, Ayan Pahomov, zatsenite, please, thank you!`}</p>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around xl:absolute xl:bottom-1 w-full mt-20">
          <Databiz />
          <AudioPhile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden md:backgroundImage md:order-2">
        <img src={ PetImage } alt="pet" />
      </div>
      <div className="flex w-full mt-20 justify-center mb-8 order-1">
        <img src={ PetImage } alt="pet" />
      </div>
    </section>
  );
};
