const express = require("express");

const app = express();

var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.listen(3000, () => {
  console.log("server started");
});

const { Client } = require("discord.js-selfbot-v13");
const client = new Client(); //

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});
const { joinVoiceChannel } = require("@discordjs/voice");
client.on("ready", () => {
  setInterval(async () => {
    client.channels
      .fetch(process.env.channel)
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator,
          selfDeaf: false
        });
      })
      .catch((error) => {
        return;
      });
  }, 1000);
});

client.login(process.env.token);
