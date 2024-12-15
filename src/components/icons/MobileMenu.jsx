import { useState } from "react";
import IconShare from "./IconShare";

export default function MobileMenu() {
  const [isShareVisible, setIsShareVisible] = useState(false);

  const handleShareClick = () => {
    setIsShareVisible(!isShareVisible);
  };

  return (
    <div className={`mobile_menu ${isShareVisible && "mobile_menu_active"}`}>
      {isShareVisible ? (
        <div className="icons_container">
          <p>Share</p>
          <div className="icons">
            <img src="/images/icon-facebook.svg" alt="facebook" />
            <img src="/images/icon-twitter.svg" alt="twitter" />
            <img src="/images/icon-pinterest.svg" alt="pinterest" />
          </div>
        </div>
      ) : (
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
      )}

      <button
        className={`${isShareVisible && "button_active"}`}
        onClick={handleShareClick}
        aria-expanded={isShareVisible}
      >
        <IconShare isShareVisible={isShareVisible} />
      </button>
    </div>
  );
}
