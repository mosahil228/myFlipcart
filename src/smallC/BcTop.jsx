import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { NavLink } from "react-router-dom";
const BcTop=()=>{
    const sTop=()=> window.scrollTo({top:0 ,behavior:"smooth"});
    return(
        <>
        <NavLink  className= "td" to ="/" onClick={sTop} >
        <footer className="tFooter">Back to Top <ArrowUpwardIcon className="uA"/></footer>
      </NavLink>
        </>
    )
}
export default BcTop;