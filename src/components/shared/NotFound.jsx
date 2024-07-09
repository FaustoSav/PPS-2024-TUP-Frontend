import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[50px] font-semibold text-primaryDark">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada.
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Parece que intentaste acceder a una página inexistente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link

            className="rounded-md bg-primaryDark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primbg-primaryDark"
          >
            Volver al inicio
          </Link>
      
        </div>
      </div>
    </section>
  );
};
