import { server } from "@config/server";
import { PORT } from "@config/constants";
import { database } from "@config/database";

const host = () => {
  console.log(`[APP]: App is running on http://localhost:${PORT}`);
  database();
};

server.listen(PORT, host);
