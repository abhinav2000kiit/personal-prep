import Modal from "./components/Modal/Modal";
import { useModal } from "./context/ModalContext";

const Index = () => {
  const { openModal } = useModal();

  return (
    <div>
      <h1>Modal Popup</h1>
      <button onClick={() => openModal("modal-1")}>Open Modal 1</button>
      <Modal id="modal-1">
        <div>
          <div>header1</div>
          <div>content1</div>
          <div>footer1</div>
        </div>
      </Modal>

      <button onClick={() => openModal("modal-2")}>Open Modal 2</button>
      <Modal id="modal-2">
        <div>
          <div>header2</div>
          <div>content2</div>
          <div>footer2</div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
