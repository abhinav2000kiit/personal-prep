class NotificationService {
  private element: HTMLElement | null = null;
  private subscription: NodeJS.Timeout | null = null;

  constructor({
    message,
    duration = 3000,
  }: {
    message: string;
    duration?: number;
  }) {
    // Create the notification element
    this.element = document.createElement("div");
    this.element.innerHTML = message;

    this.show(duration);
  }

  show(duration: number) {
    if (this.element) {
      document.body.appendChild(this.element);
    }
    this.subscription = setTimeout(() => {
      this.destroy();
    }, duration);
  }

  destroy() {
    if (this.subscription) {
      clearTimeout(this.subscription);
    }
    if (this.element) {
      this.element.remove();
    }
    this.subscription = null;
    this.element = null;
  }
}

export default NotificationService;
