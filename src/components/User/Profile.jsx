/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Loader } from "../shared/Loader";
import { AuthContext } from "../../context/Auth/AuthContext";
import { GetUserProfile } from "../../services/implementations/user/userService";

export const Profile = () => {
  const [data, setData] = useState(null);
  const { token, verifyUserSession } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await verifyUserSession(); // Asegúrate de que verifyUserSession sea una función asincrónica si es asíncrona
        const response = await GetUserProfile(token);
        setData(response.data);
        console.log("Info perfil: ", response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    if (token) {
      fetchData();
    }
  }, []);

  if (!data) {
    return <Loader />;
  }
  return (
    <div className=" rounded-xl p-3 customShadow">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Información de la cuenta
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Información personal y detalles de compras
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nombre de usuario
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.userName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.email}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tipo de usuario
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.role}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
