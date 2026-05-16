export type Toast = {
  id: string;
  message: string;
  time?: number;
};

export type ToastContextType = {
  addToast: (prop: Toast) => void;
  removeToast: (id: string) => void;
  toast: Toast[];
};
