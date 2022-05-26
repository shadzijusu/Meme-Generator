import classes from "../modules/Form.module.css";
import { useState, useEffect } from "react";
function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [memesData, setMemesData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemesData(data.data.memes))
  }, [])

  function getMemeImage() {
    const rand = Math.floor(Math.random() * memesData.length);
    let searched = memesData[rand];
    const url = searched.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    setMeme(prevValue => {
      return { ...prevValue,
      [event.target.name] : event.target.value}
    })
    
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Top text"
        className={classes.left}
        name="topText"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="Bottom text"
        className={classes.right}
        name="bottomText"
        onChange={handleChange}
      ></input>
      <button type="button" className={classes.button} onClick={getMemeImage}>
        Get a new meme image 🖼️
      </button>
      {meme.randomImage && (
        <img src={`${meme.randomImage}`} alt="" className={classes.img}></img>
    ) }
     <div className={classes.textOnImage}>{meme.topText + " " + meme.bottomText}</div>
    </div>
  );
}
export default Form;
