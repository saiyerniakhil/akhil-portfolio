import React from "react";
import Icons from "./icons";

export interface SocialHandleItem {
  type: string;
  username: string;
  href: string;
}
export interface SocialMediaLinksProps {
  handles: Array<SocialHandleItem>;
}

const SocialMediaLinks = ({ handles }: SocialMediaLinksProps) => {
  return (
    <>
    <div className="text-emerald flex items-center">
            <span className="mr-2">
                <Icons type="connect" />
            </span>
            <h3 className="font-semibold underline text-emerald">
                Connect with me
            </h3>
        </div>
      <div className="grid grid-cols-1 ml-auto sm:grid-cols-2 gap-2 m-4">
        {handles.map((item, itemIndex: number) => (
          <a
            href={item.href}
            key={itemIndex}
            className="rounded-sm flex items-center py-4 px-4 hover:text-white hover:bg-emerald hover:transition hover:ease-in hover:duration-100"
          >
            <span className="mr-2">
              <Icons type={item.type} />
            </span>
            <span>{item.username}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMediaLinks;
