export const AddProduct = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Agregar Producto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full ">
        <form className="space-y-6" action="#" method="POST">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nombre del producto
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Descripción
                </label>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="description"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Categoría
                </legend>
                <div className="flex items-center gap-x-3">
                  <input id="small" name="small" type="checkbox" />
                  <label
                    htmlFor="small"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Pequeño
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="medium" name="medium" type="checkbox" />
                  <label
                    htmlFor="medium"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mediano
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="big" name="big" type="checkbox" />
                  <label
                    htmlFor="big"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Grande
                  </label>
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Stock
                </legend>
                <div className="flex items-center gap-x-3">
                  <input id="available" name="available" type="checkbox" />
                  <label
                    htmlFor="available"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Disponible
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="no-available"
                    name="no-available"
                    type="checkbox"
                  />
                  <label
                    htmlFor="no-available"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No disponible
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Precio
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="price"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Cantiadad
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="price"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="col-span-full">
                  <label
                    htmlFor="product-photo"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Subir foto del producto
                  </label>
                  <div className="m-b m-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Cargar archivo</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">o arrastralo hasta aquí</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Agregar Producto
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
