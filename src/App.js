import video from "./assets/tv-static_8.webm";
import video2 from "./assets/tv-static-min.mp4";
import "./styles/main.scss";

function App() {
  const b = (1.3 * window.innerWidth * window.innerHeight) / (48 * 48);

  const loop = (max) => {
    let a = [];

    for (let i = 0; i < max; i++) {
      a.push(<div className="item" key={i}></div>);
    }

    return a;
  };

  return (
    <div className="App">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        id="background-video"
      >
        <source src={video} type="video/webm" />
        <source src={video2} type="video/mp4" />
      </video>
      <div id="grid">{loop(b)}</div>
      <div className="content">
        <h1 title="HELLO, I'M SNGKR.">HELLO, I'M SNGKR.</h1>
        <h3 title="reach me">reach me</h3>
        <h3 title="+6281282096579">+6281282096579</h3>
        <h3 title="sangkaranararya@gmail.com">sangkaranararya@gmail.com</h3>
      </div>
    </div>
  );
}

export default App;
