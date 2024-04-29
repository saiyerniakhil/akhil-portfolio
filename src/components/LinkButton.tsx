import React from "react";
import Icons from "./icons/";

const LinkButton = ({
  iconType = "",
  href = "#",
  buttonText = "",
  type = "button",
  iconHover = true,
  external = false,
}) => {
  switch (type) {
    case "button":
      return (
        <a
          className="flex gap-1 items-center px-4 py-2 rounded-full hover:bg-emerald hover:text-white hover:transition hover:ease-in hover:duration-300"
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {iconType && (
            <span>
              <Icons type={iconType} />
            </span>
          )}
         {buttonText && 
          <span>{buttonText}</span>}
        </a>
      );
      break;
    default:
      return (
        <a
          className="flex gap-1 text-emerald items-center py-2 hover:underline"
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span
            className={`rounded-full ${
              iconHover ? "hover:bg-emerald hover:text-white" : ""
            } `}
          >
            <Icons type={iconType} />
          </span>
          <span>{buttonText}</span>
        </a>
      );
  }
};

export default LinkButton;
