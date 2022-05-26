import classes from '../modules/Header.module.css'
import trollface from '../svg/trollface.svg'
function Header() {
    return(
        <div className={classes.main}>
            <img className={classes.img} src={trollface} alt=""></img>
            <h1 className={classes.h1}>Meme Generator</h1>
        </div>
    )
}
export default Header