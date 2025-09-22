import { Card, CardContent } from "../../../../components/ui/card";

type IntegrationItem = {
  id: number;
  icon: string;
  isBackgroundImage: boolean;
  isAvailable: boolean;
  customWidth?: string;
  customHeight?: string;
};

const INTEGRATIONS: IntegrationItem[] = [
  { id: 4, icon: "/frame-45.svg", isBackgroundImage: false, isAvailable: true },
  { id: 1, icon: "/frame-46.svg", isBackgroundImage: false, isAvailable: true },
  { id: 3, icon: "/frame-44.svg", isBackgroundImage: false, isAvailable: true },
  { id: 5, icon: "/odoo-logo.svg", isBackgroundImage: false, isAvailable: true, customWidth: "9rem", customHeight: "9rem" },
  { id: 6, icon: "/stellar-logo.svg", isBackgroundImage: false, isAvailable: true, customWidth: "10rem", customHeight: "10rem" },
  { id: 7, icon: "/google-workspace-logo.svg", isBackgroundImage: false, isAvailable: true, customWidth: "10rem", customHeight: "10rem" },
  { id: 2, icon: "/frame-42.svg", isBackgroundImage: false, isAvailable: false },
];

const getCardBackground = (isAvailable: boolean): string =>
  isAvailable
    ? "bg-gradient-to-t from-white via-white to-[#FFE496]/[0.35]"
    : "bg-gradient-to-t from-[#E5E7EB] via-white to-[#E5E7EB]/[0.35]";

const getBrandSizeClasses = (icon: string): string => {
  if (icon === "/odoo-logo.svg") return "w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem]";
  if (icon === "/stellar-logo.svg") return "w-[7rem] h-[7rem] md:w-[9rem] md:h-[9rem]";
  if (icon === "/google-workspace-logo.svg") return "w-[7rem] h-[7rem] md:w-[9rem] md:h-[9rem]";
  return "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24";
};

const IntegrationCard = ({ integration, isLast }: { integration: IntegrationItem; isLast: boolean }): JSX.Element => {
  const isLargeBrand = [
    "/odoo-logo.svg",
    "/stellar-logo.svg",
    "/google-workspace-logo.svg",
  ].includes(integration.icon);

  return (
    <Card
      key={integration.id}
      className={`w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-3xl border-0 shadow-none relative ${getCardBackground(
        integration.isAvailable
      )} ${isLast ? "col-span-full justify-self-center md:col-span-1 md:col-start-2" : ""}`}
      style={{
        background: integration.isAvailable
          ? "linear-gradient(0deg,rgba(255,255,255,1)_23%,rgba(255,228,150,0.35)_100%)"
          : "linear-gradient(0deg,rgba(229,231,235,1)_23%,rgba(229,231,235,0.35)_100%)",
      }}
    >
      <CardContent className="flex items-center justify-center h-full p-0 relative">
        {integration.isBackgroundImage ? (
          <div className="w-24 h-24 bg-[100%_100%]" style={{ backgroundImage: `url(${integration.icon})` }} />
        ) : (
          <img
            className={`${getBrandSizeClasses(integration.icon)} opacity-100 object-contain`}
            alt="Integration platform"
            src={integration.icon}
            style={{
              ...(integration.isAvailable ? {} : { filter: "grayscale(1)", opacity: 0.5 }),
              width: isLargeBrand ? undefined : integration.customWidth || undefined,
              height: isLargeBrand ? undefined : integration.customHeight || undefined,
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
};

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center mb-16 leading-[52px]">
          <span className="font-normal">¿Con qué Integraciones cuenta</span>
          <span className="font-bold italic"> Cervant</span>
          <span className="font-normal">?</span>
        </h2>

        <div className="grid max-[425px]:grid-cols-1 grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 mx-auto xl:max-w-6xl xl:gap-16 place-items-center">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationCard
              key={integration.id}
              integration={integration}
              isLast={index === INTEGRATIONS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
