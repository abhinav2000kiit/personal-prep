import { v4 as uuidv4 } from "uuid";
import NotificationService from "./services/NotificationService";

const Index = () => {
  const createNotification = () => {
    new NotificationService({
      message: `Hello, world! ${uuidv4()}`,
      duration: 3000,
    });
  };

  return (
    <div>
      <h1>Service Based Toast</h1>
      <button onClick={() => createNotification()}>Show Toast</button>
    </div>
  );
};

export default Index;
