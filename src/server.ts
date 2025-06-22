import { Server } from "http";
import app from "./app";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
