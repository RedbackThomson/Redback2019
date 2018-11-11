import BaseProject from "./BaseProject";

export default {
  name: "osu!Celebrity",
  subtitle: "500+ daily viewers",
  startDate: "August, 2015",
  endDate: "March, 2016",
  source: "https://github.com/OsuCelebrity/OsuCelebrity",
  thumbnail: require("./../../assets/img/projects/osucelebrity/logo.png"),
  images: [
    require("./../../assets/img/projects/osucelebrity/preview.jpg"),
    require("./../../assets/img/projects/osucelebrity/twitch.jpg")
  ],
  colour: "#E963A1",
  languages: [
    "Java", "Javascript"
  ],
  body: "osu!Celebrity was an experiment that turned out to be wildly successful. I initially contacted a designer to help me create a proof-of-concept [Twitch](https://twitch.tv) stream for an online game called [osu!](https://osu.ppy.sh). This stream allowed players to queue up for their 30 seconds of fame, in which they would be able to play osu! in front of thousands of viewers. In this time, viewers could vote on whether they wanted to see more of this player, or move on to the next one. In just a few weeks we grew to 500+ daily viewers, peaking over 2,000 viewers on some days. The back-end system was built in Java, but utilises a Javascript and HTML front-end to overlay the game client.",
  anchor: "osucelebrity"
} as BaseProject;