import classes from "../modules/Form.module.css";
function Form() {
  return (
    <div>
      <input type="text" name="left" className={classes.left}></input>
      <input type="text" name="second" className={classes.right}></input>
      <button type="button" className={classes.button}>
        Get a new meme image 🖼️
      </button>
    </div>
  );
}
export default Form;
