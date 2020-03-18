import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Image from './components/Image';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [date, setDate] = useState("");
  const [credit, setCredit] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=${date}`)
      .then(res => {
        console.log(res);
        const imgUrl = res.data.hdurl;
        setImage(imgUrl);
        const cred = res.data.copyright;
        setCredit(cred);
        const des = res.data.explanation;
        setDescription(des);
        const titl = res.data.title;
        setTitle(titl);
      })
      .catch(err => {
        console.log(err)
      })
  }, [date]);

  return (
    <div className="App">
      <div className="header">
        <h1>Shelter in Space</h1>
      </div>
      {/* <DateSection setDate={setDate}/> */}
      <Image imgUrl={image}/>
      <div className="imageInfo">
          <div className="credits">
            <h3>{title}</h3>
            <p>{credit}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
      </div>
      <div className="footer">
        Font awesome icons here
      </div>
    </div>
  );
}

export default App;
