import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./components/NasaPage";
import NasaPage from "./components/NasaPage";
import './index.css';

function App() {

  const [img, setImg] = useState([]);

  const query = `https://api.nasa.gov/planetary/apod?api_key=xKkue9hehQ8u0qeYqF9dFZPov8qynnnbGfkxg3ue&date=2020-06-28`;

  useEffect(() => {
    axios
    .get(query)
    .then((res) => {
      setImg(res.data)
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
      <NasaPage data={img}/>
    </div>
  );
}

export default App;
