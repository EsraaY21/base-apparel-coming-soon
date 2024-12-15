import IconArrow from "./components/icons/IconArrow";

function App() {
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
            <h1>
              <span>We're</span>
              <br />
              coming soon
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <form>
              <input type="text" placeholder="Email Address" />
              <button type="submit">
                <IconArrow />
              </button>
            </form>
          </div>
        </div>

        <img
          src="./resources/images/hero-desktop.jpg"
          alt="Cover"
          className="cover-img"
        />
      </main>
    </>
  );
}

export default App;
