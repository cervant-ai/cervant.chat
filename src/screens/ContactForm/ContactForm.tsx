import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navbar } from "../../components/ui/Navbar";
import { FooterSection } from "../CervantLanding/sections/FooterSection/FooterSection";
import emailjs from '@emailjs/browser';

export const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    businessType: "",
    monthlyMessages: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Añadir este useEffect para hacer scroll al tope cuando el componente se monte
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configuración de EmailJS
    const serviceId = 'service_xh3o8bk'; // Reemplazar con tu Service ID
    const templateId = 'template_47heq1e'; // Reemplazar con tu Template ID
    const publicKey = 'm8MNUBhbf_j0bBZAa'; // Reemplazar con tu Public Key
    
    // Enviar email usando EmailJS
    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then((result) => {
        console.log('Email enviado exitosamente:', result.text);
        setIsSubmitted(true); // Mostrar página de confirmación
      }, (error) => {
        console.log('Error al enviar email:', error.text);
        alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
      });
  };

  const handleBenefitsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "benefits" } });
  };

  const handleIntegrationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "integrations" } });
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#f6f6f6] min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl mx-auto rounded-[25px] bg-gradient-to-t from-[rgba(249,249,249,1)] to-[rgba(255,228,150,0.2)]">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="text-4xl font-normal mb-6">
              ¡Gracias por tu interés en <span className="font-bold italic">Cervant</span>!
            </h2>
            <p className="text-xl font-light leading-relaxed mb-8">
              Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo
              en las próximas 24 horas para programar una demostración personalizada.
            </p>
            <Link to="/">
              <Button className="bg-[#ffe496] text-zinc-700 rounded-[50px] h-[52px] px-8 text-xl font-semibold hover:bg-[#ffd966]">
                Volver al inicio
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FFE49659 10%, transparent 40%, transparent 100%)"
      }}
    >
      <div className="max-w-[1279px] md:max-h-[801px] w-full mx-auto mt-[37px] mb-10 rounded-[30px] bg-[#ffe496cc] px-8 pt-6 pb-10 flex flex-col items-center border-0 shadow-none">
        {/* Navbar */}
        <Navbar
          handleBenefitsClick={handleBenefitsClick}
          handleIntegrationsClick={handleIntegrationsClick}
        />

        {/* Título y texto descriptivo */}
        <div className="text-center mb-10 mt-2">
          <h1 className="text-5xl font-normal mb-4 leading-tight">
            ¡Llegó el momento! Únete a <span className="font-bold italic">Cervant</span>
          </h1>
          <p className="text-base font-normal text-zinc-700 max-w-2xl mx-auto">
            Completa el formulario con tus datos y no olvides tu teléfono o correo. Te contactaremos por la vía que prefieras. En poco tiempo, tu negocio estará funcionando con Clau.
          </p>
        </div>

        {/* Formulario */}
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-zinc-700 mb-2">
                Nombres
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black bg-transparent rounded-[10px] text-base focus:ring-2 focus:ring-[#ffe496] focus:border-black transition-all duration-200"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-base font-medium text-zinc-700 mb-2">
                Apellidos
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black bg-transparent rounded-[10px] text-base focus:ring-2 focus:ring-[#ffe496] focus:border-black transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-zinc-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black bg-transparent rounded-[10px] text-base focus:ring-2 focus:ring-[#ffe496] focus:border-black transition-all duration-200"
              placeholder="JohnDoe@clau.one"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-medium text-zinc-700 mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black bg-transparent rounded-[10px] text-base focus:ring-2 focus:ring-[#ffe496] focus:border-black transition-all duration-200"
              placeholder="+57 316 789 0045"
            />
          </div>

          {/* <div>
            <label htmlFor="businessType" className="block text-base font-medium text-zinc-700 mb-2">
              ¿En que producto estas interesado?
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black bg-transparent rounded-[10px] text-base focus:ring-2 focus:ring-[#ffe496] focus:border-black transition-all duration-200"
            >
              <option value="">Clau Club</option>
              <option value="ecommerce">Clau Pro</option>
              <option value="restaurant">Clau Basic</option>
            </select>
          </div> */}

          <div className="text-center pt-2">
            <Button
              type="submit"
              className="bg-zinc-700 text-[#ffe496] rounded-[50px] h-[40px] px-12 text-lg font-semibold hover:bg-zinc-800 transition-all duration-200 w-full max-w-md mx-auto"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};