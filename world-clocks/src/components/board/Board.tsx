import "./Board.css";
import { Clock } from "../Clock";
import { useState } from "react";

export function Board() {
  const stockholmTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "Europe/Stockholm",
  });
  const [time, setTime] = useState(stockholmTime);

  const londonTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "Europe/London",
  });

  const parisTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "Europe/Paris",
  });

  const moscovTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "Europe/Moscow",
  });

  const tokyoTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "Asia/Tokyo",
  });

  const newYorkTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "America/New_York",
  });

  const losAngelesTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "America/Los_Angeles",
  });

  const saoPauloTime = new Date().toLocaleTimeString("pl-PL", {
    timeZone: "America/Sao_Paulo",
  });

  return (
    <>
      <Clock time={stockholmTime} location="Stockholm" />
      <Clock time={londonTime} location="London" />
      <Clock time={parisTime} location="Paris" />
      <Clock time={moscovTime} location="Moscov" />
      <Clock time={tokyoTime} location="Tokyo" />
      <Clock time={newYorkTime} location="New York" />
      <Clock time={losAngelesTime} location="Los Angeles" />
      <Clock time={saoPauloTime} location="Sao Paulo" />
    </>
  );
}
