import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { IntegrationsSection } from "./sections/IntegrationsSection";
import { YourClientsSection } from "./sections/YourClientsSection";
import { Navbar } from "../../components/ui/Navbar";

export const CervantLanding = (): JSX.Element => {
  // Refs for sections
  const benefitsSectionRef = useRef<HTMLDivElement>(null);
  const integrationsSectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scrolling when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const scrollTo = location.state.scrollTo;
      setTimeout(() => {
        if (scrollTo === 'benefits' && benefitsSectionRef.current) {
          benefitsSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else if (scrollTo === 'integrations' && integrationsSectionRef.current) {
          integrationsSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.state]);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Handle navigation clicks
  const handleBenefitsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(benefitsSectionRef);
  };

  const handleIntegrationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(integrationsSectionRef);
  };

  // Data for the category cards
  const categoryCards = [
    {
      id: 1,
      image: "/logo-02-1-2.png",
      label: "Comida",
      imageClass: "w-[140px] h-[140px] top-5 left-5",
    },
    {
      id: 2,
      image: "/sin-t-tulo-1-2.png",
      label: "Deportes",
      imageClass: "w-[106px] h-[97px] top-[42px] left-[37px]",
    },
    {
      id: 3,
      image: "/group.png",
      label: "Comercio",
      imageClass: "w-[101px] h-14 top-[62px] left-10",
    },
    {
      id: 4,
      image: "/logo1-2.png",
      label: "Comida",
      imageClass: "w-[130px] h-[120px] top-[30px] left-[25px]",
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-white  w-full relative"
        style={{
          background: "linear-gradient(180deg, #FFE49659 10%, transparent 22%, transparent 100%)"
        }}>
        <header className="w-full max-w-[1218px] max-xl:container mx-auto flex justify-center pt-[37px] flex-wrap">
          {/* Navigation Bar */}
          <Navbar
            handleBenefitsClick={handleBenefitsClick}
            handleIntegrationsClick={handleIntegrationsClick}
          />
        </header>
        {/* Integrations Section */}
        <IntegrationsSection />

        {/* How It Works Section Title */}
        <div className="text-center mt-[2vh]">
          <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[52px]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[52px]">
              ¿Cómo funciona{" "}
            </span>
            <span className="font-bold italic">Cervant</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[52px]">
              ?
            </span>
          </h2>
        </div>

        {/* How It Works Image */}
        <div className="flex justify-center mt-[41px] px-6 md:px-2">
          <img
            className="md:w-[683px] md:h-[422px] object-cover"
            alt="Test"
            src="/test3-1.png"
          />
        </div>
        {/* Your Clients Section */}
        <div className="px-4">
          <YourClientsSection />
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-4">
          <Link to="/cervant">
            <Button className="w-[145px] h-[49px] bg-[#ffe496] rounded-[50px] text-zinc-700 font-semibold text-xl hover:bg-[#ffd966]
            border-0 shadow-none">
              Leer más
            </Button>
          </Link>
        </div>

        {/* Category Cards */}
        <div className="flex flex-col items-center mt-12 md:mt-24 relative left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {categoryCards.map((card, index) => (
              <div key={card.id} className="flex flex-col items-center ">
                <div className="w-[180px] h-[180px] rounded-[25px] [background:linear-gradient(0deg,rgba(255,255,255,1)_23%,rgba(255,228,150,0.35)_100%)]
                border-0 shadow-none relative flex items-center justify-center">
                  <img
                    className={`absolute object-cover ${card.imageClass}`}
                    alt={`Category ${index + 1}`}
                    src={card.image}
                  />
                </div>
                <div className="mt-4 text-center font-bold text-lg">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div ref={benefitsSectionRef}>
          <ClientTestimonialsSection />
        </div>

        {/* Integrations section */}
        <div ref={integrationsSectionRef}>
          <BenefitsSection />
        </div>

        {/* Ellos ya transformaron su negocio. Los testimonials */}
        {/* <HowItWorksSection /> */}

        {/* ¡Necesito a Cervant en mi negocio! */}
        <CallToActionSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};