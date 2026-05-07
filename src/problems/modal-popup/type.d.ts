export interface ModalInstance {
  id: string;
  component: React.ComponentType<any>;
}

export interface ModalProps {
  id: string;
  children: React.ReactNode;
}

export interface ModalContextType {
  modalMap: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}
