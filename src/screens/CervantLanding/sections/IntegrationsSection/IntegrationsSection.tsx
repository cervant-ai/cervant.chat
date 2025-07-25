import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const IntegrationsSection = (): JSX.Element => {
  return (
    <section className="py-7 md:py-20 mx-auto max-w-[1218px] relative">
      <div className="max-xl:container mx-auto flex flex-col lg:flex-row items-normal lg:justify-around relative content-between gap-4">
        {/* Background vectors */}
        {/* <img
          className="absolute w-[574px] h-[477px] top-0 left-0 z-0"
          alt="Background shape left"
          src="/vector-1.svg"
        />
        <img
          className="absolute w-[734px] h-[481px] top-[3px] right-0 z-0"
          alt="Background shape right"
          src="/vector-2.svg"
        /> */}

        {/* Left content */}
        <div className="z-10 w-full lg:w-6/12 space-y-6 p-12 bg-white rounded-2xl">
          <h2 className="text-4xl md:text-5xl leading-[52px] font-normal font-['Inter',Helvetica]">
            Imagina un mundo donde{" "}
            <span className="font-medium">ningún mensaje se pierde.</span>
          </h2>

          <p className="text-xl leading-[30px] font-['Inter',Helvetica]">
            <span className="font-light">Con </span>
            <span className="font-bold italic">Cervant</span>
            <span className="font-light">
              {" "}
              unificas WhatsApp, Instagram y Telegram en una plataforma
              inteligente que automatiza lo repetitivo y convierte cada mensaje
              en una oportunidad.
            </span>
          </p>

          <Link to="/contact">
            <Button className="h-[49px] w-[145px] rounded-[50px] bg-[#ffe496] text-zinc-700 hover:bg-[#ffd966] font-semibold text-xl mt-6 border-0 shadow-none">
              ¡Empezar!
            </Button>
          </Link>


        </div>

        {/* Right content - platform image */}
        <div className="w-full lg:w-6/12 p-12 md:mt-0 bg-[#ffe496] rounded-2xl flex flex-col justify-center ">
          <img
            className="w-full max-w-[570px] h-auto object-cover"
            alt="Cervant platform interface"
            src="/test1-1.png"
          />
        </div>
      </div>
    </section>
  );
};
