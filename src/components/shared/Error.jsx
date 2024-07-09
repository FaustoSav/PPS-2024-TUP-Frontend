export const Error = () => {
  return (
    <section className="bg-transparent mt-20 ">
      <div className=" px-4 mx-auto   lg:px-6">
        <div className="  text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-800 md:text-4xl ">
            Error interno
          </p>
          <p className="mb-4 text-lg font-bold text-gray-600  ">
            Parece que tuvimos un problema en nuestros servidores, por favor
            intente nuevamente!{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
