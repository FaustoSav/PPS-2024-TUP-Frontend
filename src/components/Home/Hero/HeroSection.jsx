export const HeroSection = () => {
  return (
    <section className=" relative flex  justify-center px-0 w-screen xl:w-full ">
      <img
        className=" overflow-hidden xl:rounded-3xl xl:h-[calc(100vh-130px)] xl:mb-11 2xl:w-screen "
        src="/assets/png/products/hero-img.webp"
        alt=""
      />
      <h1 className="uppercase absolute px-10 text-center top-12 font-[600] max-w-lg md:top-20 lg:top-36 xl:top-48">
        La comodidad en tu hogar
      </h1>
    </section>
  );
};
