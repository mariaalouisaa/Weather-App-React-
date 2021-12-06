import Clear from "./images/Clear.png";

export default function ForecastDay(props) {
  console.log(props.data);
  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="weekly-head">{day()}</div>
      <div className="weekly-img">
        <img src={Clear} alt="Clear" />
      </div>
      <div className="weekly-low">{max}°</div>
      <div className="weekly-high">{min}°</div>
    </div>
  );
}
