import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Testimonial data for easier mapping
  const testimonials = [
    {
      id: 1,
      text: "Cervant redujo drásticamente nuestros tiempos de respuesta. El bot filtra y responde al instante, y cuando interviene el equipo humano, todo sigue fluido. Es una herramienta esencial para nosotros.",
      author: "Carlos Méndez, Argentina",
      image: "/image-2.png",
      bgColor: "bg-white",
    },
    {
      id: 2,
      text: "Lo mejor de Cervant es tener todos los mensajes en un solo panel. Ya no tenemos que estar cambiando entre WhatsApp, Instagram y Telegram. Todo llega ordenado, y el equipo trabaja mucho más enfocado. Realmente nos facilitó la gestión del día a día.",
      author: "Mariana López, Colombia",
      image: "/image-1.png",
      bgColor: "bg-white",
    },
    {
      id: 3,
      text: "Al principio lo usamos solo como bot, pero cuando vimos las métricas entendimos dónde mejorar. Ahora controlamos los tiempos de espera, medimos el rendimiento del equipo y ajustamos procesos. Cervant no solo nos ayudó a atender mejor, sino a crecer como empresa.",
      author: "Ana Torres, Venezuela",
      image: "/image.png",
      bgColor: "bg-[#ffeebf]",
    },
  ];

  return (
    <section
      className="w-full py-16"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,228,150,0.3) 30%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className="max-xl:container max-w-[1221px] mx-auto">
        <h2 className="text-5xl text-center mb-16">
          <span className="font-normal">
            Ellos ya transformaron su negocio con{" "}
          </span>
          <span className="font-bold italic">Cervant</span>
          <span className="font-normal">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-[10px] border-0 shadow-none`}
            >
              <CardContent className="p-10 flex flex-col justify-between h-full">
                <p className="font-light text-xl text-black">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-6">
                  <img
                    className="w-[46px] h-[46px] object-cover flex-shrink-0"
                    alt="Customer profile"
                    src={testimonial.image}
                  />
                  <div className="ml-5">
                    <span className="font-medium text-zinc-700 text-lg">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
