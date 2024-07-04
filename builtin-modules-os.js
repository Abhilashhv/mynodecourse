const os = require("os");
//console.log(os.userInfo());

const myenv = {
    name: os.hostname(),
    user: os.userInfo().username,
    currentdir: os.homedir(),
    freediskspace: os.freemem()
}
console.log(myenv);