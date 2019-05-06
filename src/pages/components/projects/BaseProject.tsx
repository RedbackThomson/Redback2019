export default class BaseProject {
  name: string;
  subtitle: React.ReactNode;
  url?: string;
  startDate: string;
  endDate: string;
  source?: string;
  thumbnail: HTMLImageElement;
  feature: HTMLImageElement;
  images: HTMLImageElement[];
  colour: string;
  backgroundColour: React.CSSProperties;
  backgroundStroke?: HTMLImageElement;
  featureBackground?: HTMLImageElement;
  featureBackgroundFlip?: boolean;
  languages: string[];
  services: string;
  web: boolean;
  appType?: string;
  body: React.ReactNode;
  anchor: string;
  small?: boolean;
  dark?: boolean;
  darkSubtitle?: boolean;
}