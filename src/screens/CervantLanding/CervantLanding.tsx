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
      label: "Arturos - Fast Food",
      imageClass: "w-[140px] h-[140px] top-5 left-5",
      link: "https://wa.me/584142856857",
    },
    {
      id: 2,
      image: "/sin-t-tulo-1-2.png",
      label: "Aguilas del Zulia - Deportes",
      imageClass: "w-[106px] h-[97px] top-[42px] left-[37px]",
      link: "https://wa.me/584162423682",
    },
    {
      id: 3,
      image: "/group.png",
      label: "Sambil - Centro Comercial",
      imageClass: "w-[101px] h-14 top-[62px] left-10",
      link: "https://wa.me/584122890459",
    },
    {
      id: 4,
      image: "/logo1-2.png",
      label: "Diablitos - Consumo Masivo",
      imageClass: "w-[130px] h-[120px] top-[30px] left-[25px]",
      link: "https://wa.me/584122313652",
    },
    {
      id: 5,
      image: "/forum-logo.png",
      label: "Forum - Retail",
      imageClass: "w-[212px] h-[194px] top-[0px] left-[0px]",
      link: "https://wa.me/584126020095",
    },
    {
      id: 6,
      image: "/clinica-sanlucas.png",
      label: "Clínica San Lucas - Salud",
      imageClass: "w-[140px] h-[140px] top-[15px] left-[20px]",
      link: "https://wa.me/584146081985",
    },
    {
      id: 7,
      image: "/cei-logo.png",
      label: "Centro Electronico de idiomas - Educación",
      imageClass: "w-[200px] h-[180px] top-[-5px] left-[5px]",
      link: "https://wa.me/584246564293",
    },
    {
      id: 8,
      image: "/zuum-logo.png",
      label: "ZuumPark - Entretenimiento",
      imageClass: "w-[260px] h-[180px] top-[0px] left-[5px]",
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
        <div className="flex flex-col items-center mt-12 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
            {categoryCards.map((card, index) => (
              <a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              >
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
              </a>
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