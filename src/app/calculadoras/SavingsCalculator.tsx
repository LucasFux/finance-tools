'use client'
import React, { useState } from "react";


export function SavingsCalculator() {
  const [montoInicial, setMontoInicial] = useState("");
  const [aportacionMensual, setAportacionMensual] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [unidadTiempo, setUnidadTiempo] = useState("Años");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularAhorros = () => {
    const P = parseFloat(montoInicial) || 0; // Monto inicial
    const M = parseFloat(aportacionMensual) || 0; // Aportación mensual
    const r = (parseFloat(tasaInteres) || 0) / 100 / 12; // Tasa de interés mensual
    const t = parseFloat(periodo) || 0; // Tiempo en meses o años

    const n = unidadTiempo === "Años" ? t * 12 : t; // Convertimos años a meses si es necesario
    if (!n) return;

    // Fórmula para el cálculo de ahorros con interés compuesto
    let total = P * Math.pow(1 + r, n); // Interés sobre el monto inicial
    for (let i = 1; i <= n; i++) {
      total += M * Math.pow(1 + r, n - i); // Interés sobre cada aportación mensual
    }

    setResultado(total);
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Calculadora de Ahorros</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Calcula cuánto puedes ahorrar con una aportación inicial, contribuciones mensuales y una tasa de interés.
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monto Inicial ($)</label>
          <input
            type="number"
            value={montoInicial}
            onChange={(e) => setMontoInicial(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Aportación Mensual (€)</label>
          <input
            type="number"
            value={aportacionMensual}
            onChange={(e) => setAportacionMensual(e.target.value)}
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
          <label className="block text-sm font-medium text-gray-700">Periodo de Ahorro</label>
          <input
            type="number"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Unidad de Tiempo</label>
          <select
            value={unidadTiempo}
            onChange={(e) => setUnidadTiempo(e.target.value)}
            className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Años</option>
            <option>Meses</option>
          </select>
        </div>
        <button
          onClick={calcularAhorros}
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
