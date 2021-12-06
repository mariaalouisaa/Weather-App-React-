export default function ForecastDay(props) {
  let image = `./images/${props.data.weather[0].main}.png`;
  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="weekly-head">{day()}</div>
      <div className="weekly-img">
        <img src={image} alt={image} />
      </div>
      <div className="weekly-low">{max}°</div>
      <div className="weekly-high">{min}°</div>
    </div>
  );
}
