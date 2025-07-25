import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const ClientTestimonialsSectionCustom = (): JSX.Element => {

  return (
    <section className="w-full max-w-[1219px] mx-auto py-16 max-lg:px-6">
      <h2 className="text-5xl text-center font-normal">
        Todo lo que pasa, al <span className="font-medium">instante</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mb-16 mt-20">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[25px] h-full">
            {/* Fondo amarillo translúcido desplazado */}
            <div
              className="absolute inset-0 rounded-[25px] -translate-x-20 -translate-y-10 w-[80%] mx-auto"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,228,150,0.3) 30%, rgba(255,255,255,0) 100%)"
              }}
            ></div>

            {/* Contenedor de la imagen - SIN fondo */}
            <div className="relative z-10 rounded-[25px] h-full">
              <img
                className="w-full max-w-[584px] h-auto mx-auto object-cover"
                alt="Test"
                src="/test2-1.png"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center">
          <p className="text-[28px] md:text-[40px] leading-[38px] md:leading-[53px] max-sm:text-center">
            Gestioná tus operaciones desde un solo panel. <span className="font-medium">Visualiza, analiza y optimiza</span> cada interacción. <span className="font-bold italic">Cervant</span> lleva tu atención al siguiente nivel.
          </p>
        </div>
      </div>

      {/* Texto descriptivo debajo de la imagen de la laptop */}
      <div className=" text-center">
        <p className="text-lg md:text-xl px-6">
          <span className="font-bold italic">Cervant</span> te ofrece un panel con dashboard integrado donde puedes visualizar métricas clave de tus conversaciones en tiempo real o a lo largo del tiempo. Monitorea tiempos de atención, cantidad de mensajes, rendimiento por agente y conversaciones organizadas por estatus. Detecta cuellos de botella, identifica oportunidades de mejora y toma decisiones basadas en datos reales, no en suposiciones.
        </p>
      </div>
    </section>
  );
};