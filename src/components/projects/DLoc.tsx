import BaseProject from "./BaseProject";

export default {
  name: "D-Loc",
  subtitle: "Distributed file system",
  url: "https://devpost.com/software/d-loc",
  startDate: "September, 2016",
  endDate: "November, 2017",
  source: "https://github.com/D-Lock",
  thumbnail: require("./../../assets/img/projects/dloc/logo.png"),
  images: [
    require("./../../assets/img/projects/dloc/UI.png"),
    require("./../../assets/img/projects/dloc/login.jpg"),
    require("./../../assets/img/projects/dloc/devices.jpg")
  ],
  colour: "#7E52B7",
  languages: [
    "Angular", "Node", "Python", "Electron"
  ],
  body: "D-Loc is an encrypted, distributed file system that enables users to spread private files over multiple computers. After encrypting a file, and sending it to the server, D-Loc then breaks the files up into any number of parts and sends each part to all connected clients of the user. This ensures that the file is not accessible solely on any one computer at any time. When the user wants to retrieve the file, they connect all the devices back to the server and request the file be made whole. D-Loc won the “Best Data Security Hack” prize at SDHacks 2016 as well as the “1517 Fund Award” at Calhacks 3.0. The project is built in Angular wrapped in Electron for the front end, with a NodeJS web-server, using Python scripts for encryption and distribution.",
  anchor: "dloc"
} as BaseProject;