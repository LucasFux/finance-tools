'use client'
import React, { useState } from "react";

export function CompoundInterestCalculator() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [anios, setAnios] = useState("");
  const [frecuencia, setFrecuencia] = useState("Anual");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularInteresCompuesto = () => {
    const P = parseFloat(capitalInicial); // Capital inicial
    const r = parseFloat(tasaInteres) / 100; // Tasa de interés (en decimal)
    const t = parseFloat(anios); // Tiempo en años
    const n = frecuencia === "Anual" ? 1 : frecuencia === "Mensual" ? 12 : 4; // Frecuencia

    if (!P || !r || !t) return;

    const A = P * Math.pow(1 + r / n, n * t);
    setResultado(A);
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Calculadora de Interés Compuesto</h1>
        <p className="text-gray-600">
          Calcula el crecimiento de tu inversión con interés compuesto
        </p>
      </header>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Capital Inicial ($)</label>
          <input
            type="number"
            value={capitalInicial}
            onChange={(e) => setCapitalInicial(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tasa de Interés Anual (%)</label>
          <input
            type="number"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Número de Años</label>
          <input
            type="number"
            value={anios}
            onChange={(e) => setAnios(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Frecuencia de Capitalización
          </label>
          <select
            value={frecuencia}
            onChange={(e) => setFrecuencia(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Anual</option>
            <option>Mensual</option>
            <option>Trimestral</option>
          </select>
        </div>
        <button
          onClick={calcularInteresCompuesto}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calcular
        </button>
      </div>
      {resultado !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-black font-semibold">Resultado:</h3>
          <p className="text-black font-bold">$ {resultado.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
