import BaseProject from "./BaseProject";

export default {
  name: "LoLShadow",
  subtitle: "Over 1,000 active users",
  startDate: "September, 2014",
  endDate: "February, 2015",
  source: "https://github.com/RedbackThomson/LoLShadow",
  thumbnail: require("./../../assets/img/projects/lolshadow/logo.png"),
  images: [
    require("./../../assets/img/projects/lolshadow/feature.jpg"),
    require("./../../assets/img/projects/lolshadow/inner.jpg")
  ],
  colour: "#2D3F4A",
  languages: [
    "PHP", "Python"
  ],
  body: "LoLShadow was the successor of [LoLAlerter](/#/lolalerter). After the wild success of the program from the League of Legend  streaming community, others were asking for a more general version. Since LoLAlerter was only for those partnered with [Twitch](https://twitch.tv), others who had not yet been partnered wanted an alternative that would do the same thing except, instead of notifying subscribers and donators, would notify followers. Due to being super simple to set up, and free to use, this too became heavily trafficked. Ultimately, LoLShadow was being run across 3 Python servers with a web interface built in PHP on top of Laravel.",
  anchor: "lolshadow"
} as BaseProject;