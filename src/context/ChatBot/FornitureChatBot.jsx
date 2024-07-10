import ChatBot from "react-simple-chatbot";
import { useProductById } from "../../hooks/products/useProductById";

const FornitureChatBot = () => {
  const HandleEnd = ( values) => {
   
    useProductById(values.toString().trim());
  };
  const steps = [
    {
      id: "1",
      message: "Bienvenido, escriba su producto deseado",
      trigger: "2",
    },
    {
      id: "2",
      component: <div>product</div>,
      user: true,
      end: true,
    },
  ];

  return (
    <ChatBot
      steps={steps}
      headerTitle="Forniture Chat"
      handleEnd={(steps, values) => HandleEnd(steps, values)}
    />
  );
};

export default FornitureChatBot;
