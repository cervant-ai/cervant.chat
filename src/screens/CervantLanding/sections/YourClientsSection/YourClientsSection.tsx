import React from "react";

export const YourClientsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1118px] mx-auto py-8 font-sans text-xl text-center text-black leading-[27px]">
      <p className="tracking-normal">
        <span className="font-light">Tus clientes escriben por </span>
        <span className="font-medium">WhatsApp, Instagram y Telegram</span>
        <span className="font-light"> a la vez. Con </span>
        <span className="font-semibold italic">Cervant</span>
        <span className="font-light">
          , centralizas todo en un solo panel, priorizas conversaciones, das
          contexto a tu equipo y detectas oportunidades en tiempo real. Conexión
          omnicanal, simple y poderosa.
        </span>
      </p>
    </section>
  );
};
