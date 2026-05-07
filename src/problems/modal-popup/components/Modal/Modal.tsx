import { useModal } from "../../context/ModalContext";
import { ModalProps } from "../../type";

const Modal = ({ id, children }: ModalProps) => {
  const { modalMap, closeModal } = useModal();

  return modalMap[id] ? (
    <div id={id}>
      <button onClick={() => closeModal(id)}>close button</button>
      <div>{children}</div>
      <button onClick={() => closeModal(id)}>submit button</button>
    </div>
  ) : null;
};

export default Modal;
