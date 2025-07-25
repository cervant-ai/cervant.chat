import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";

interface NavbarProps {
    handleBenefitsClick?: (e: React.MouseEvent) => void;
    handleIntegrationsClick?: (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
    handleBenefitsClick,
    handleIntegrationsClick,
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-full max-w-[1214px] flex items-center md:justify-between justify-center flex-nowrap relative">
            {/* Hamburger for mobile */}
            <button
                className="md:hidden absolute left-2 top-2 z-20"
                onClick={() => setSidebarOpen(true)}
                aria-label="Abrir menú"
            >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <rect y="6" width="24" height="2" rx="1" fill="#3F3F46" />
                    <rect y="11" width="24" height="2" rx="1" fill="#3F3F46" />
                    <rect y="16" width="24" height="2" rx="1" fill="#3F3F46" />
                </svg>
            </button>

            <div className="flex items-center lg:display">
                <Link to="/" className="">
                    <img
                        className="w-[49px] h-[49px] object-cover"
                        alt="Layer"
                        src="/layer1-1.png"
                    />
                </Link>
                <NavigationMenu className="md:ml-[60px] max-md:hidden">
                    <NavigationMenuList className="flex flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    to="/"
                                    className="w-14 font-semibold h-[52px] [font-family:'Inter',Helvetica] text-zinc-900 text-xl text-center tracking-[0] leading-[52px]"
                                >
                                    Inicio
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    to="/cervant"
                                    className="ml-4 md:ml-12 font-medium whitespace-nowrap h-[52px] [font-family:'Inter',Helvetica] text-zinc-900 text-xl text-center tracking-[0] leading-[52px]"
                                >
                                    Cervant
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className="ml-4 md:ml-12  w-[107px] font-medium h-[52px] [font-family:'Inter',Helvetica] text-zinc-900 text-xl text-center tracking-[0] leading-[52px] cursor-pointer hover:font-semibold transition-all duration-200"
                                onClick={handleBenefitsClick}
                            >
                                Beneficios
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className="ml-4 md:ml-12 font-medium whitespace-nowrap h-[52px] [font-family:'Inter',Helvetica] text-zinc-900 text-xl text-center tracking-[0] leading-[52px] cursor-pointer hover:font-semibold transition-all duration-200"
                                onClick={handleIntegrationsClick}
                            >
                                Integraciones
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <Link to="/contact" className="max-md:hidden">
                <Button
                    className={`w-[145px] h-[49px] rounded-[50px] font-bold text-xl border-0 shadow-none
                    ${window.location.pathname === "/"
                            ? "bg-[#FFE496] text-[#3F3F46] hover:bg-[#ffd966]"
                            : "bg-[#3F3F46] text-[#FFE496] hover:bg-[#2c2c31]"
                        }
                `}
                >
                    ¡Unete!
                </Button>
            </Link>

            {/* Sidebar mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden">
                    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col p-6">
                        <button
                            className="self-end mb-6"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <line x1="6" y1="6" x2="18" y2="18" stroke="#3F3F46" strokeWidth="2" />
                                <line x1="6" y1="18" x2="18" y2="6" stroke="#3F3F46" strokeWidth="2" />
                            </svg>
                        </button>
                        <nav className="flex flex-col gap-4">
                            <Link to="/" onClick={() => setSidebarOpen(false)} className="font-semibold text-xl text-zinc-900">Inicio</Link>
                            <Link to="/cervant" onClick={() => setSidebarOpen(false)} className="font-medium text-xl text-zinc-900">Cervant</Link>
                            <button
                                onClick={e => { handleBenefitsClick?.(e); setSidebarOpen(false); }}
                                className="font-medium text-xl text-zinc-900 text-left"
                            >
                                Beneficios
                            </button>
                            <button
                                onClick={e => { handleIntegrationsClick?.(e); setSidebarOpen(false); }}
                                className="font-medium text-xl text-zinc-900 text-left"
                            >
                                Integraciones
                            </button>
                            <Link to="/contact" onClick={() => setSidebarOpen(false)}>
                                <Button
                                    className={`w-full h-[49px] rounded-[50px] font-bold text-xl border-0 shadow-none mt-4
                                    ${window.location.pathname === "/"
                                            ? "bg-[#FFE496] text-[#3F3F46] hover:bg-[#ffd966]"
                                            : "bg-[#3F3F46] text-[#FFE496] hover:bg-[#2c2c31]"
                                        }
                                `}
                                >
                                    ¡Unete!
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};
