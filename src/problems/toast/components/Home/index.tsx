import { useToast } from "../../context/ToastContext";
import Toast from "../Toast";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  const { addToast, toast } = useToast();

  return (
    <div>
      {toast.map((toast) => (
        <Toast key={toast.id} individualToast={toast} />
      ))}
      <button
        onClick={() =>
          addToast({ id: uuidv4(), message: `Toast ${uuidv4()}`, time: 3000 })
        }
      >
        Add Toast
      </button>
    </div>
  );
};

export default Index;
