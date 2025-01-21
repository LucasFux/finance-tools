import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="grid grid-rows-3 gap-4">

          <div className="text-center">
            <a href="#" className="text-sm hover:text-blue-500">Términos y Condiciones</a>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm hover:text-blue-500">Política de Privacidad</a>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm hover:text-blue-500">Contacto</a>
          </div>
        </div>
      <div className="mt-8 text-gray-500 text-center">
        <p>&copy; 2025 Lucas Fux. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}