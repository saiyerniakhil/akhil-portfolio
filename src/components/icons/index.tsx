import type { ReactElement } from "react";
import AstroIcon from "./Astro";
import BlogIcon from "./BlogIcon";
import CodeIcon from "./CodeIcon";
import ConnectIcon from "./ConnectIcon";
import DownloadIcon from "./DownloadIcon";
import Github from "./Github";
import GlobeIcon from "./GlobeIcon";
import InfoIcon from "./InfoIcon";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import TailwindIcon from "./TailwindIcon";
import ToolIcon from "./ToolIcon";
import Twitter from "./Twitter";
import WorkIcon from "./WorkIcon";

const Icons = ({ type = "info" }): ReactElement => {
  switch (type) {
    case "work":
      return <WorkIcon />;
    case "blog":
      return <BlogIcon />;
    case "linkedIn":
      return <LinkedIn />;
    case "github":
      return <Github />;
    case "twitter":
      return <Twitter />;
    case "instagram":
      return <Instagram />;
    case "globe":
      return <GlobeIcon />;
    case "download":
      return <DownloadIcon />;
    case "astro":
      return <AstroIcon />;
    case "code":
      return <CodeIcon />;
    case "tool":
      return <ToolIcon />;
    case "tailwind":
      return <TailwindIcon />;
    case "info":
      return <InfoIcon />;
    case "connect":
      return <ConnectIcon />;
    default:
      return <></>;
  }
};

export default Icons;
