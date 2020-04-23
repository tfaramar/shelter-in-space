import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DateSection from './components/DateSection';
import Loader from 'react-loader-spinner';
import ReactPlayer from 'react-player';

import './App.css';
import Image from './components/Image';



function App() {
  const [errMsg, setErrMsg] = useState(false);
  //set isVideo slice of state
  const [date, setDate] = useState("");
  const [credit, setCredit] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [mediaType, setMediaType] = useState("image");

  const [loading, setLoading] = useState(false);

  const loader = (
    <Loader 
      type="TailSpin"
      color="goldenrod"
      height={100}
      width={100}
    />
  )

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=${date}`)
      .then(res => {
        // console.log(res);
        setErrMsg(false);
        setMediaType(res.data.media_type);
        const imgUrl = res.data.url;
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
        setLoading(false);
        setErrMsg(true);
      })
  }, [date]);

  const img = () => {
    if (loading) {
      return loader;
    } else if (errMsg) {
      return (
        <div className="error">
          <p>Oops! It looks like there is no photo of the day for the day you picked. Please be sure you aren't trying to look into the future.</p>
        </div> 
      )
    } else if (mediaType === "image") {
      return <Image imgUrl={image} />
    } else {
      return <ReactPlayer className="react-player" url={image} playing />
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Shelter in Space</h1>
        <div className="about">
          <p><strong>With your body, you can visit the world. With your mind (and some help from the Internet) you can visit the universe.</strong> This minimal website was created for anyone feeling cooped up during the current shelter-in-place order to explore the cosmos, courtesy of <a href="https://api.nasa.gov/#apod" rel="noopener noreferrer" target="_blank" >NASA's photo of the day API.</a></p>
          <DateSection setDate={setDate} setErrMsg={setErrMsg} />
        </div>
      </div>
      <div className="image">
        {img()}
      </div>
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
