import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  // Integration platforms data
  const integrations = [
    {
      id: 1,
      icon: "/frame-46.svg",
      isBackgroundImage: false,
      isAvailable: true,
      customWidth: undefined,
      customHeight: undefined,
    },
    {
      id: 3,
      icon: "/frame-44.svg",
      isBackgroundImage: false,
      isAvailable: true,
      customWidth: undefined,
      customHeight: undefined,
    },
    {
      id: 5,
      icon: "/odoo-logo.svg",
      isBackgroundImage: false,
      isAvailable: true,
      customWidth: "9rem",
      customHeight: "9rem",
    },
    {
      id: 6,
      icon: "/stellar-logo.svg",
      isBackgroundImage: false,
      isAvailable: true,
      customWidth: "10rem",
      customHeight: "10rem",
    },
    {
      id: 4,
      icon: "/frame-45.svg",
      isBackgroundImage: false,
      isAvailable: true,
      customWidth: undefined,
      customHeight: undefined,
    }, {
      id: 2,
      icon: "/frame-42.svg",
      isBackgroundImage: false,
      isAvailable: false,
      customWidth: undefined,
      customHeight: undefined,
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center mb-16 leading-[52px]">
          <span className="font-normal">¿Con qué Integraciones cuenta</span>
          <span className="font-bold italic"> Cervant</span>
          <span className="font-normal">?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-14 md:max-lg:w-[440px] mx-auto xl:max-w-6xl xl:justify-center xl:gap-16">
          {integrations.map((integration) => {
            const cardBg = integration.isAvailable
              ? "bg-gradient-to-t from-white via-white to-[#FFE496]/[0.35]"
              : "bg-gradient-to-t from-[#E5E7EB] via-white to-[#E5E7EB]/[0.35]"; // gris

            return (
              <Card
                key={integration.id}
                className={`w-48 h-48 rounded-3xl border-0 shadow-none relative ${cardBg}`}
                style={{
                  background:
                    integration.isAvailable
                      ? "linear-gradient(0deg,rgba(255,255,255,1)_23%,rgba(255,228,150,0.35)_100%)"
                      : "linear-gradient(0deg,rgba(229,231,235,1)_23%,rgba(229,231,235,0.35)_100%)",
                }}
              >
                <CardContent className="flex items-center justify-center h-full p-0 relative">
                  {integration.isBackgroundImage ? (
                    <div
                      className="w-24 h-24 bg-[100%_100%]"
                      style={{ backgroundImage: `url(${integration.icon})` }}
                    />
                  ) : (
                    <img
                      className="w-24 h-24 opacity-100"
                      alt="Integration platform"
                      src={integration.icon}
                      style={{
                        ...(integration.isAvailable ? {} : { filter: "grayscale(1)", opacity: 0.5 }),
                        width: integration.customWidth || undefined,
                        height: integration.customHeight || undefined
                      }}
                    />
                  )}
                  {!integration.isAvailable && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                      Próximamente
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
