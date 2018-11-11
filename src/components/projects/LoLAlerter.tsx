import BaseProject from "./BaseProject";

export default {
  name: "LoLAlerter",
  subtitle: "Over 100,000 daily viewers",
  startDate: "August, 2014",
  endDate: "February, 2015",
  source: "https://github.com/RedbackThomson/LoLAlerter",
  thumbnail: require("./../../assets/img/projects/lolalerter/logo.png"),
  images: [
    require("./../../assets/img/projects/lolalerter/website.jpg"),
    require("./../../assets/img/projects/lolalerter/inner.jpg")
  ],
  colour: "#45A9B7",
  languages: [
    "PHP", "Python"
  ],
  body: "LoLAlerter was a project built out of necessity by the community. The program took only 3 simple steps to configure, making it easily accessible to the League of Legends streamers. LoLAlerter would alert the [Twitch](https://twitch.tv) streamer when they got a new subscriber or donation, by sending them a message in-game. This would allow them to keep their eyes on the game, yet still acknowledge and thank their generous viewers. The servers were built using Python, and the website was built in PHP on top of Laravel.",
  anchor: "lolalerter"
} as BaseProject;