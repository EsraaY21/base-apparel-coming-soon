import { useState } from "react";
import IconShare from "./icons/IconShare";

export default function ShareButton() {
  const [isShareVisible, setIsShareVisible] = useState(false);

  const handleShareClick = () => {
    setIsShareVisible(!isShareVisible);
  };

  return (
    <button
      className={`${isShareVisible && "button_active"} desktop_button`}
      onClick={handleShareClick}
      aria-expanded={isShareVisible}
    >
      <IconShare isShareVisible={isShareVisible} />

      {isShareVisible && (
        <div className="tooltip">
          <div className="icons_container">
            <p>Share</p>
            <div className="icons">
              <img src="/images/icon-facebook.svg" alt="facebook" />
              <img src="/images/icon-twitter.svg" alt="twitter" />
              <img src="/images/icon-pinterest.svg" alt="pinterest" />
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
