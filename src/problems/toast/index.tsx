import Home from "./components/Home";
import { ToastProvider } from "./context/ToastContext";

const Index = () => {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
};

export default Index;
