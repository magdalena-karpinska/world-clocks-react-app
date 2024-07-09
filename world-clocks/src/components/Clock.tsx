import "./Clock.css";

interface ClockProps {
  time: string;
  location: string;
}

export function Clock({ time, location }: ClockProps) {
  return (
    <div>
      <h1>{time}</h1>
      <p>{location}</p>
    </div>
  );
}
