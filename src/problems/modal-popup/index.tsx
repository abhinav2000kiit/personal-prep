import { ModalProvider } from "./context/ModalContext";
import Wrapped from "./Wrapped";

const Index = () => {
  return (
    <ModalProvider>
      <Wrapped />
    </ModalProvider>
  );
};

export default Index;
