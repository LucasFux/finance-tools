import React from "react";
import { CompoundInterestCalculator } from "./CompoundInterestCalculator";
import {SavingsCalculator  } from "./SavingsCalculator";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="max-w-6xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Calculadoras de Finanzas
          </h1>
          <p className="text-gray-600">
            Calculá lo que necesites para tus finanzas.
          </p>
        </header>
        {/* Grid para las calculadoras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CompoundInterestCalculator />
          <SavingsCalculator />
          {/* Agrega más calculadoras aquí */}
        </div>
      </div>
    </div>
  );
}
