import IconArrow from "./components/icons/IconArrow";
import IconError from "./components/icons/IconError";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please provide a valid email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please check your email");
    } else {
      setError("");
    }
  };

  return (
    <>
      <main>
        <div className="left">
          <div className="text-container">
            <img
              src="./resources/images/logo.svg"
              alt="Logo"
              className="logo"
            />

            <img
              src="./resources/images/hero-mobile.jpg"
              alt="Cover"
              className="cover-mobile"
            />
            <div className="container">
              <h1>
                <span>We're</span>
                <br />
                coming soon
              </h1>
              <p>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? "error" : ""}
                />
                {error && (
                  <span className="error-icon">
                    <IconError />
                  </span>
                )}

                <button type="submit">
                  <IconArrow />
                </button>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
          </div>
        </div>

        <img
          src="./resources/images/hero-desktop.jpg"
          alt="Cover"
          className="cover-desktop"
        />
      </main>
    </>
  );
}

export default App;
