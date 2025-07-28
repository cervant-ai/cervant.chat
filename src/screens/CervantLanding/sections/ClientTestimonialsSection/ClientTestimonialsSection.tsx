import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Data for benefit cards
  const benefitCards = [
    {
      id: 1,
      title: (
        <>
          Mejora tus <span className="font-medium">tiempos de atención</span> al
          cliente.
        </>
      ),
      description:
        "Optimiza cada interacción con respuestas automáticas instantáneas y la posibilidad de derivar a un agente humano cuando sea necesario.",
    },
    {
      id: 2,
      title: (
        <>
          Centraliza{" "}
          <span className="font-medium">WhatsApp, Instagram y Telegram.</span>
        </>
      ),
      description:
        "Gestiona todas tus conversaciones desde un solo lugar, sin necesidad de cambiar entre apps. Esto te permite responder de manera ági y rápida.",
    },
    {
      id: 3,
      title: (
        <>
          <span className="font-medium">Métricas y estadísticas </span>
          de tus conversaciones.
        </>
      ),
      description:
        "Accede a informes sobre tiempos de atención, volumen de chats y rendimiento del equipo para tomar decisiones que mejoren la experiencia del cliente.",
    },
  ];

  return (
    <section className="w-full max-w-[1219px] mx-auto py-16 max-lg:px-6">
      <h2 className="text-5xl text-center font-normal">
        ¿Qué beneficios te ofrece{" "}
        <span className="font-bold italic">Cervant</span>?
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
            Con <span className="font-bold italic">Cervant</span> ahorras
            tiempo, mejoras la eficiencia de tu equipo y respondes más rápido,
            sin perder el toque humano.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {benefitCards.map((card) => (
          <Card key={card.id} className="rounded-[25px] [background:linear-gradient(0deg,rgba(255,255,255,0)_23%,rgba(255,228,150,0.35)_100%)]
          border-0 shadow-none">
            <CardContent className="p-6 rounded-[25px] min-h-full hover:bg-white transition-all duration-300 ease-in-out">
              <div className="mb-6 text-2xl leading-none">
                {card.title}
              </div>
              <p className="font-strong text-lg leading-normal">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/cervant">
          <Button className="bg-[#ffe496] text-zinc-700 rounded-[50px] h-[49px] px-7 text-xl font-semibold hover:bg-[#ffd966] border-0 shadow-none">
            Leer más
          </Button>
        </Link>
      </div>
    </section>
  );
};
