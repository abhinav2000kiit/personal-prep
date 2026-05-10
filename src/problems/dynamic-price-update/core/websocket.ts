class WebSocketService {
  private socket: WebSocket | null = null;
  private listeners: ((data: any) => void)[] = [];

  connect() {
    if (this.socket) return;

    this.socket = new WebSocket("wss://echo.websocket.events");

    this.socket.onopen = () => {
      console.log("web socket connected");
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.listeners.forEach((cb) => cb(data));
    };

    this.socket.onclose = () => {
      console.log("web socket disconnected");
      this.socket = null;

      setTimeout(() => {
        this.connect();
      }, 3000);
    };
  }

  subscribe(callback: (data: any) => void) {
    this.listeners.push(callback);

    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }
}

export const wsService = new WebSocketService();
