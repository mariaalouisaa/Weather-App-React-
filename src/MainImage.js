import Clear from "./images/Clear.png";
import Clouds from "./images/Clouds.png";
import Rain from "./images/rain.png";
import Thunderstorm from "./images/thunder.png";
import Snow from "./images/snow.png";

export default function MainImage(props) {
  if (props.icon === "Clouds") {
    return (
      <div className="MainImage">
        <img src={Clouds} className="main-image pulse" alt="annimated cloud" />
      </div>
    );
  } else {
    if (props.icon === "Clear") {
      return (
        <div className="MainImage">
          <img src={Clear} className="main-image pulse" alt="annimated sun" />
        </div>
      );
    } else {
      if (props.icon === "Rain") {
        return (
          <div className="MainImage">
            <img
              src={Rain}
              className="main-image pulse"
              alt="annimated rain cloud"
            />
          </div>
        );
      } else {
        if (props.icon === "Thunderstorm") {
          return (
            <div className="MainImage">
              <img
                src={Thunderstorm}
                className="main-image pulse"
                alt="annimated thunder cloud"
              />
            </div>
          );
        } else {
          if (props.icon === "Snow") {
            return (
              <div className="MainImage">
                <img
                  src={Snow}
                  className="main-image pulse"
                  alt="annimated snow cloud"
                />
              </div>
            );
          } else
            return (
              <div className="MainImage">
                <img
                  src={Thunderstorm}
                  className="main-image pulse"
                  alt="annimated thunder cloud"
                />
              </div>
            );
        }
      }
    }
  }
}
