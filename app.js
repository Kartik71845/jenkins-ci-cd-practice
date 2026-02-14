const http = require("http");

const PORT = process.env.PORT || 3000;
const ENV  = process.env.NODE_ENV || "dev";
const APP  = process.env.APP_NAME || "NodeDockerApp";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    app: APP,
    env: ENV,
    port: PORT
  }));
});

server.listen(PORT, () => {
  console.log(`App ${APP} running in ${ENV} on port ${PORT}`);
});