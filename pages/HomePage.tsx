import {
  principal,
  models,
  programs,
  energy,
  accesories,
  wetesla,

} from "@/constants";


export default function HomePage() {
  return (
    <div>
      {/* Sección Principal modelo */}
      {principal.map((model, index) => (
        <div
          key={`model-${index}`}
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${model.bgImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center transform -translate-y-48">
              <h1 className="text-white text-7xl font-bold">{model.title}</h1>
              {model.description && (
                <h3 className="text-white text-2xl font-semibold mt-4">
                  {model.description}
                </h3>
              )}
              <div className="flex justify-center gap-6 mt-8">
                <button className="bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                  Encargar
                </button>
                <button className="bg-transparent text-white border border-white px-14 py-2 rounded font-medium hover:bg-white hover:text-black transition-colors">
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Sección Modelos */}
      {models.map((model, index) => (
        <div
          key={`model-${index}`}
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${model.bgImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between">
            {/* Título y descripción */}
            <div className="text-center mt-16">
              <h1 className="text-white text-7xl font-bold">{model.title}</h1>
              {model.price && (
                <h3 className="text-white text-2xl font-semibold mt-4">
                  {model.price}
                </h3>
              )}
              {model.description && (
                <p className="text-white text-1xl font-semibold mt-4">
                  {model.description}
                </p>
              )}
            </div>

            {/* Botones en la parte inferior */}
            <div className="flex justify-center gap-6 mb-20">
              <button className="bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                Encargar
              </button>
              <button className="bg-transparent text-white border border-white px-14 py-2 rounded font-medium hover:bg-white hover:text-black transition-colors">
                Prueba de conducción
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Sección Programas */}
      {programs.map((program, index) => (
        <div key={`program-${index}`} className="relative w-full h-screen">
          {program.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={program.videoUrl} type="video/webm" />
              Tu navegador no soporta videos.
            </video>
          ) : null}

          {/* Fondo oscuro y contenido principal */}
          <div className="absolute inset-0 bg-black/30 flex justify-center">
            <div className="text-center mt-32">
              <h1 className="text-white text-7xl font-bold">{program.title}</h1>
              {program.description && (
                <h3 className="text-white text-2xl font-semibold mt-4">
                  {program.description}
                </h3>
              )}
            </div>

            {/* Botón abajo */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <button className="bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                Prueba de conducción
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Sección Energía */}
      {energy.map((item, index) => (
        <div
          key={`energy-${index}`}
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${item.bgImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center transform -translate-y-56">
              <h1 className="text-white text-7xl font-bold">{item.title}</h1>
              {item.description && (
                <h3 className="text-white text-2xl font-semibold mt-4">
                  {item.description}
                </h3>
              )}
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button className="bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                Saber más
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Sección Accesorios */}
      {accesories.map((accessory, index) => (
        <div
          key={`accessory-${index}`}
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${accessory.bgImage}')` }}
        >
          {/* Título */}
          <div className="absolute mt-16 w-full text-center">
            <h1 className="text-white text-7xl font-bold">{accessory.title}</h1>
          </div>

          {/* Botón ajustado */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button className="bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
              Comprar ahora
            </button>
          </div>
        </div>
      ))}

      {/* Sección "Somos Tesla" */}
      {wetesla.map((item, index) => (
        <div key={`wetesla-${index}`} className="relative w-full h-screen">
          {item.bgImage.endsWith(".webm") ? (
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={item.bgImage} type="video/webm" />
              Tu navegador no soporta videos.
            </video>
          ) : (
            <div
              className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${item.bgImage}')` }}
            ></div>
          )}

          {/* Contenedor para título y botón */}
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="ml-16 text-white">
              <h3 className="text-4xl font-bold">{item.title}</h3>
              <button className="mt-4 bg-white text-black px-14 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                Unase a Tesla
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
