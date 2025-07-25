import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 px-8 nax-w-[1372px]">
      <Card className="relative rounded-[50px] [background:linear-gradient(0deg,rgba(255,255,255,1)_23%,rgba(255,228,150,0.35)_100%)] shadow-none border-0">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image container */}
          <div className="md:w-1/2 p-4 relative">
            <img
              className="w-full h-auto object-contain max-h-80 -translate-y-[45px] z-10 relative"
              alt="Cervant service illustration"
              src="/test5-1.png"
            />
          </div>

          {/* Text content */}
          <div className="md:w-1/2 p-6 flex flex-col items-center md:items-end">
            <h2 className="text-[45px] leading-[60px] text-center md:text-right mb-6">
              <span className="font-normal">¡Necesito a </span>
              <span className="font-bold italic">Cervant</span>
              <span className="font-normal"> en mi negocio!</span>
            </h2>

            <p className="text-[25px] font-light md:text-right leading-[35px] mb-8 text-center">
              No pierdas más oportunidades. Integra Cervant en tu negocio y
              revoluciona tu atención al cliente.
            </p>

            <Link to="/contact">
              <Button className="bg-[#FFE496] text-zinc-700 rounded-[50px] h-[52px] px-6 hover:bg-[#ffd966] border-0 shadow-none gap-0 text-xl">
                <span className="font-semibold">¡Probar <span className="font-bold italic">Cervant</span>!</span>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};