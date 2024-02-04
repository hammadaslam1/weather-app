/* eslint-disable eqeqeq */
import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [array, setArray] = useState([0]);
  const [name, setName] = useState("");

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${name}&appid=eeb8b40367eee691683e5a079e2fa695`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArray([data]);
        setName("");
      })
      .catch((e) => {
        if (e.message == "Failed to fetch") {
          console.log("Server not found");
        }
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>its raining outside</h1>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick}>sumbit</Button>
      {array.map((data, i) => (
        <>
          <h3>{data.name}</h3>
          <h3>{data["sys"] ? data["sys"]["country"] : data.message}</h3>
        </>
      ))}
    </div>
  );
};

export default Home;
