require("./settings");
const http = require("http");
const app = require("./index");
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

http.createServer(app).listen(port, host, () => {
    console.log(`
                              

███████╗███████╗██╗░░██╗██╗░░██╗░█████╗░
╚════██║██╔════╝╚██╗██╔╝╚██╗██╔╝██╔══██╗
░░███╔═╝█████╗░░░╚███╔╝░░╚███╔╝░███████║
██╔══╝░░██╔══╝░░░██╔██╗░░██╔██╗░██╔══██║
███████╗███████╗██╔╝╚██╗██╔╝╚██╗██║░░██║
╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝


GKLAXY REST API
Server running on http://${host}:` + port)
console.log(`Hello ${creator}`)
})
