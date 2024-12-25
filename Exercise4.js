const os = require("os");
const util = require("util");

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
console.log("CPU: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
console.log("Program End");
