import React from "react";
import ShareButton from "../ShareButton";

export default function DesktopFooter() {
  return (
    <div className="desktop_menu">
      <div className="author">
        <img
          src="/images/avatar-michelle.jpg"
          alt="avatar"
          className="avatar"
        />
        <div className="author_meta">
          <p className="name">Michelle Appleton</p>
          <p className="date">28 Jun 2020</p>
        </div>
      </div>

      <ShareButton />
    </div>
  );
}
