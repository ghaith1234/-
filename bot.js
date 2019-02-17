const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533316135693844480")
setInterval(function() {
channel.send(`احمممممممممممممممممممممممممممم`);
}, 25)
})
 
 
client.login("NTE3NDIyNDExODg5NjM5NDQ0.D0tQOA.HcGqClPTk7cV-J-OYGlglPAKAr8");
