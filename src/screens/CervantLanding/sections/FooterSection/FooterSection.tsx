import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center py-8 text-center px-8">
      <p className="font-normal italic text-black md:text-xl leading-3 ">
        Copyright © 2025 Delfos INC All rights reserved.
      </p>

      <p className="mt-4 md:text-xl leading-[27px]">
        <span className="font-light text-black">
          Es tu momento, crea hoy tu chatbot con{" "}
        </span>
        <span className="font-semibold text-zinc-900">Cervant</span>
        <span className="font-light text-black">.</span>
      </p>

      <div className="mt-4 w-[51px] h-[51px] flex items-center justify-center">
        <img
          className="w-[42px] h-[42px]"
          alt="Cervant Logo"
          src="/layer1.png"
        />
      </div>
    </footer>
  );
};
