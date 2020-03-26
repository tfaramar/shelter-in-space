import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DateSection from './components/DateSection';
import Loader from 'react-loader-spinner';

import './App.css';
import Image from './components/Image';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [date, setDate] = useState("");
  const [credit, setCredit] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const loader = (
    <Loader 
      type="TailSpin"
      color="red"
      height={100}
      width={100}
    />
  )

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
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
      <div className="about">
        <p>What this is and why I made it.</p>
        <DateSection setDate={setDate} />
      </div>
      {loading ? loader : <Image imgUrl={image} />}
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
        <a href="https://www.linkedin.com/in/tatiana-faramarzi-598897174/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>        
        <a href="https://github.com/tfaramar/shelter-in-space" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://angel.co/tatiana-faramarzi" target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist"></i></a>
      </div>
    </div>
  );
}

export default App;
