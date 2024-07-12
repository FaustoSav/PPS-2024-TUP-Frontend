

export const ProfileDetails = ({userName,firstName,lastName,email}) => {
  return (
    <section className="my-10 ">
        <div className="flex flex-col gap-2 text-lg pb-10 ">
          <h1 className="font-semibold text-dark-light">
            Información personal
          </h1>
          <h3 className="text-sm font-medium  text-neutral-500">
            Detalles personales e información de compras.
          </h3>
        </div>
        <div className="profile-item border-t-[1px] dark:border-t-[1px]">
          <h4 className="profile-item-title">Nombre de usuario </h4>
          <span className="profile-item-detail">{userName}</span>
        </div>
        <div className="profile-item">
          <h4 className="profile-item-title">Nombre </h4>
          <span className="profile-item-detail">{firstName}</span>
        </div>
        <div className="profile-item">
          <h4 className="profile-item-title">Apellido </h4>
          <span className="profile-item-detail">{lastName}</span>
        </div>
        <div className="profile-item">
          <h4 className="profile-item-title">Correo electrónico </h4>
          <span className="profile-item-detail">{email}</span>
        </div>
      </section>
  )
}
