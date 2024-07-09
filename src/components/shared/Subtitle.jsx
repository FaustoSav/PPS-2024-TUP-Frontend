export const Subtitle = ({ text, customClass }) => {
  return (
    <h2 className={`font-[500] mb-4  text-2xl tracking-wider text-dark-light ${customClass}`}>
      {text}
    </h2>
  );
};
