import { User } from '../../icons/User';

export const UserDropdown = () => {
  return (
    <div className="relative">
      <div className=" hidden sm:block peer">
        <User />
      </div>
      <div className="absolute z-50  -right-4 bg-red-200 peer-hover:opacity-0 leading-4 flex flex-col justify-center items-center  gap-3 min-w-[150px] py-3  rounded">
        <span>Perfil</span>
        <span className=''>Cerrar sesión</span>
        

      </div>
    </div>
  );
};
