"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { energies, cars, cargas, descubrir, tienda } from "@/constants";

export default function Header() {
  const [menuType, setMenuType] = useState<string | null>(null);
  const isOpen = menuType !== null;

  return (
    <div
      className={`w-full h-[85px] fixed top-0 z-50 px-10 transition-colors duration-300 backdrop-blur-md ${
        isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between m-auto">
        <Image
          src={isOpen ? "/tesla-black.png" : "/teslaw.png"}
          alt="logo"
          width={isOpen ? 100 : 120}
          height={isOpen ? 90 : 70}
          className="cursor-pointer transition-all duration-300"
        />

        <div className="hidden md:flex items-center space-x-6">
          {["Vehiculos", "Energias", "Carga", "Descubrir", "Tienda"].map((type) => (
            <button
              key={type}
              onClick={() => setMenuType(menuType === type ? null : type)}
              className={`text-sm font-medium transition-colors duration-300 ${
                menuType === type ? "text-black" : isOpen ? "text-black" : "text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Íconos */}
        <div className="relative inline-flex gap-6">
          <GrLanguage size={24} className={`${isOpen ? "text-black" : "text-white"}`} />
          <FaUser size={24} className={`${isOpen ? "text-black" : "text-white"}`} />
        </div>
      </div>

      {/* Contenido de los menús */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-screen bg-white shadow-lg p-4 backdrop-blur-md"
        >
          <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
            {menuType === "Vehiculos" &&
              cars.map((car) => (
                <div key={car.name} className="text-center">
                  <Image src={car.image} alt={car.name} width={200} height={120} className="mx-auto rounded-lg" />
                  <h3 className="mt-4 text-lg font-semibold text-black">{car.name}</h3>
                  <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">Saber más</a>
                    <a href="#" className="text-blue-500 pb-8 hover:underline">Pedir</a>
                  </div>
                </div>
              ))}

            {menuType === "Energias" &&
              energies.map((energy) => (
                <div key={energy.name} className="text-center">
                  <Image src={energy.image} alt={energy.name} width={200} height={120} className="mx-auto rounded-lg" />
                  <h3 className="mt-4 text-lg font-semibold text-black">{energy.name}</h3>
                  <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 pb-8 hover:underline">Saber más</a>
                  </div>
                </div>
              ))}

            {menuType === "Carga" &&
              cargas.map((carga) => (
                <div key={carga.name} className="text-center">
                  <Image src={carga.image} alt={carga.name} width={200} height={120} className="mx-auto rounded-lg" />
                  <h3 className="mt-4 text-lg font-semibold text-black">{carga.name}</h3>
                  <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">Saber más</a>
                    <a href="#" className="text-blue-500 pb-8 hover:underline">Buscar</a>
                  </div>
                </div>
              ))}

          {menuType === "Descubrir" &&
            descubrir.map((descubrir) => (
              <div key={descubrir.title} className=" text-center">
                <h3 className="mb-4 text-lg font-semibold text-black">{descubrir.title}</h3>
                <div className="mt-2 flex flex-col items-center space-y-2">
                  {descubrir.line1 && <p className="text-gray-700">{descubrir.line1}</p>}
                  {descubrir.line2 && <p className="text-gray-700">{descubrir.line2}</p>}
                  {descubrir.line3 && <p className="text-gray-700">{descubrir.line3}</p>}
                  {descubrir.line4 && <p className="pb-8 text-gray-700">{descubrir.line4}</p>}
                </div>
              </div>
            ))}
            {menuType === "Tienda" &&
              tienda.map((tienda) => (
                <div key={tienda.name} className="text-center">
                  <Image src={tienda.image} alt={tienda.name} width={200} height={120} className="mx-auto rounded-lg" />
                  <h3 className="mt-4 pb-16 text-lg font-semibold text-black">{tienda.name}</h3>
                </div>
              ))}


          </div>
        </motion.div>
      )}
    </div>
  );
}
