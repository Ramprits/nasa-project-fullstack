const http = require("http");
const app = require("./src/app");

const PORT = process.env.PORT || 3333
const server = http.createServer(app);
server.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Server listening on port ${PORT}`)
})