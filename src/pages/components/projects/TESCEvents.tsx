import * as React from "react";
import BaseProject from "./BaseProject";

export default {
  name: "TESC Events",
  subtitle: "Purpose built event registration system",
  url: "https://tesc.events/",
  startDate: "February, 2018",
  endDate: "Ongoing",
  source: "https://github.com/UCSDTESC/Check-in",
  thumbnail: require("Assets/img/projects/tescevents/logo.png"),
  feature: require("Assets/img/projects/tescevents/feature.png"),
  images: [
    require("Assets/img/projects/tescevents/admin-organisers.jpg"),
    require("Assets/img/projects/tescevents/admin-teams.jpg"),
    require("Assets/img/projects/tescevents/admin-dashboard.jpg"),
    require("Assets/img/projects/tescevents/registration.jpg"),
    require("Assets/img/projects/tescevents/home-page.jpg"),
  ],
  colour: "#004E74",
  backgroundColour: {
    background: "#004E74"
  },
  backgroundStroke: require("Assets/img/projects/tescevents/bg-shape.svg"),
  languages: [
    "Typescript", "React", "Redux", "MongoDB", "AWS"
  ],
  services: "Full Stack Web Development",
  web: true,
  body: <>
    TESC Events is a custom event registration website for UC San Diego's Triton Engineering Student Council (TESC).<br /><br />
    Mainly used for hackathons, TESC Events allows organisers to create an application which allows students to join teams, upload their personal resume and answer any questions catering specifically to that event. Sponsors and organisers are then able to see and edit applications and filter before downloading resumes.<br />
    The system is built on a Typescript Express back-end, utilising a MongoDB database, which serves a Typescript React (with Redux) front-end.
  </>,
  anchor: "tescevents",
  dark: false
} as BaseProject;