import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import { ProductsProvider } from "./context/Products/ProductsProvider";
import FornitureChatBot from "./components/shared/Chatbot/FornitureChatbot";
import { Toaster } from "sonner";

function App() {
  return (
    <ProductsProvider>
      <div className="overflow-hidden bg-light-dark">
        <NavBar />
        <Toaster richColors position="top-center" closeButton />
        <div className="customWidth min-h-[calc(100vh-64px)] customPadding  ">
          <Outlet />
        </div>
        <Footer />
        <FornitureChatBot />
      </div>
    </ProductsProvider>
  );
}

export default App;
