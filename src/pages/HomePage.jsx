import { HeroSection } from "../components/Home/Hero/HeroSection";
import { CategoriesList } from "../components/Products/CategoriesList";

export const HomePage = () => {
  return (
    <main className="customWidth  flex flex-col gap-16 mx-auto items-center mb-16  ">
      <HeroSection />
      <div className="flex flex-col gap-12 mx-auto items-center customPadding 2xl:px-0 w-full">
        <CategoriesList />
      </div>
    </main>
  );
};
