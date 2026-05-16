import { useToast } from "../../context/ToastContext";
import { Toast } from "../../types/typings";

const Index = ({ individualToast }: { individualToast: Toast }) => {
  const { removeToast } = useToast();

  return (
    <div>
      <div>{individualToast.message}</div>
      <button onClick={() => removeToast(individualToast.id)}>Remove</button>
    </div>
  );
};

export default Index;
