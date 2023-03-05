import express, { Request, Response, Application } from "express";

class Server {
  private app: Application;
  private PORT: unknown;

  constructor() {
    this.app = express();
    this.PORT = 4000;
    this.routes();
  }

  public routes(): void {
    this.app.get("/", (_req: Request, res: Response) => {
      res.send("<h1>Server Is UP ...</h1>");
    });
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log("Server is Running on port 4000");
    });
  }
}

const server = new Server();
server.listen();
