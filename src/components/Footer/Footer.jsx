const Footer = () => {
  return (
    <div className="mx-auto  py-10 xl:px-20 lg:px-12 sm:px-6 px-4 bg-dark-white text-light-dark dark:font-medium ">
      <div className="flex  justify-evenly items-start gap-5 ">
        <div className="">
          <h2 className="text-base font-semibold leading-4 ">Categorias</h2>
          <div className="sm:flex sm:items-start gap-5">
            <p className="hover:underline text-base leading-4 mt-6  cursor-pointer">
              <a href="/aboutus" target="_blank" rel="noopener noreferrer">
                Muebles Pequeños
              </a>
            </p>
            <p className="hover:underline text-base leading-4 mt-6  cursor-pointer">
              Muebles Medianos
            </p>
            <p className="hover:underline text-base leading-4 mt-6  cursor-pointer">
              Muebles Grandes
            </p>
          </div>
        </div>

        <div className=" ">
          <h2 className="text-base font-semibold leading-4 ">
            Desarrolladores
          </h2>
          <div className="sm:flex sm:items-start gap-5">
            <p className="hover:underline text-base leading-4 mt-6  cursor-pointer">
              <a
                href="https://faustosavoya.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fausto Savoya
              </a>
            </p>

            <p className="hover:underline text-base leading-4 mt-6  cursor-pointer">
              <a
                href="https://www.instagram.com/santyago_caso?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Santiago Caso
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
