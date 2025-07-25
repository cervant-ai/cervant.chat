import React from "react";
import { useNavigate } from "react-router-dom";
import { ClientTestimonialsSectionCustom } from "../CervantLanding/sections/ClientTestimonialsSection/ClientTestimonialsSectionCustom";
import { CallToActionSection } from "../CervantLanding/sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "../CervantLanding/sections/FooterSection/FooterSection";
import { Navbar } from "../../components/ui/Navbar";

export const CervantDetails = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBenefitsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "benefits" } });
  };

  const handleIntegrationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "integrations" } });
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen w-full flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #FFE49659 10%, transparent 20%, transparent 100%)"
      }}>
      {/* Sección principal: ¿Cómo funciona Cervant? */}
      <section className="w-full flex justify-center pb-12">
        <div className="w-full max-w-[1279px] max-h-[801px] mt-[37px] rounded-[32px] bg-[#ffe496cc]  px-8 py-8 flex flex-col items-center border-0 shadow-none">
          {/* Navbar */}
          <Navbar
            handleBenefitsClick={handleBenefitsClick}
            handleIntegrationsClick={handleIntegrationsClick}
          />
          <h1 className="text-5xl text-center font-normal mb-8 mt-2">
            ¿Cómo funciona <span className="font-bold italic">Cervant</span>?
          </h1>
          <p className="text-xl text-center max-w-4xl mb-6 font-normal text-zinc-700">
            Tus clientes escriben por <b>WhatsApp, Instagram o Telegram</b>. Tu equipo responde desde un único panel inteligente. Cervant unifica todos los canales, prioriza cada mensaje y entrega a cada agente el contexto completo.
          </p>
          <img src="/1-cervant-cervant-como-funciona.png" alt="¿Cómo funciona Cervant?" className="w-full max-w-4xl rounded-xl border-0 shadow-none mb-2" />
        </div>
      </section>

      {/* Sección: Todo lo que pasa, al instante */}
      <ClientTestimonialsSectionCustom />

      {/* Sección: Inteligencia Artificial */}
      <section className="w-full flex flex-col items-center py-12 px-4 mb-8">
        {/* Título */}
        <h2 className="text-5xl md:text-4xl text-center font-normal mb-10">
          Inteligencia <span className="font-medium">Artificial</span>
        </h2>

        {/* Fila principal */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 relative mt-8 mb-6">
          {/* Izquierda: fondo gradiente + imagen */}
          <div className="relative w-[350px] md:w-[698px] h-[328px] md:h-[656px] rounded-[24px] overflow-visible [background:linear-gradient(0deg,rgba(255,255,255,1)_23%,rgba(255,228,150,0.35)_100%)]">
            <img
              src="/3-cervant-cervant-inteligencia-artificial.png"
              alt="IA Cervant"
              className="absolute left-1/2 -translate-x-1/2 -top-8 w-[320px] md:w-[600px] h-auto"
              style={{ zIndex: 2 }}
            />
          </div>

          {/* Derecha: texto destacado */}
          <div className="flex-1 max-w-xl md:-ml-48 z-10 mt-8 md:mt-0">
            <p className="text-4xl text-left">
              <span className="font-medium">Esta no es IA genérica,</span><br />
              es inteligencia entrenada específicamente para los matices de tu negocio.
            </p>
          </div>
        </div>

        {/* Texto descriptivo */}
        <p className="max-sm:mt-2 md:mt-10 text-base md:text-lg text-left md:text-center max-w-6xl text-zinc-700">
          Mientras otras soluciones fallan con preguntas simples, nuestra tecnología analiza contexto, tono e historial para resolver el 70% de consultas sin intervención humana. <b>¿Un cliente frustrado por un pedido demorado?</b> La IA detecta la urgencia y lo escala con todo el contexto. <b>¿Una consulta recurrente sobre horarios?</b> Resuelta al instante. Así es el servicio al cliente del futuro.
        </p>
      </section>

      {/* Sección: CTA Necesito a Cervant */}
      <CallToActionSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};