export const Loader = () => {
  return (
    <div className="w-full h-dvh grid place-content-center">
      <div
        className="inline-block aspect-square w-12   animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};
