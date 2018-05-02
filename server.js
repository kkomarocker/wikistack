const http = require('http');
const { db, Page, User } = require("./models");
const app = require("./app");
const server = http.createServer(app);

const PORT = 3000;

const init = async () => {
  await Page.sync();
  await User.sync();

  server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}.`);
  });
}

init();

