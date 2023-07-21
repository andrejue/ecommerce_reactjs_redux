import "./styles/header.css";
import "./styles/dropdown.css";
import { BsChevronCompactUp } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { menuClose } from '../redux/mobilemenu/actions';
import './styles/mobilemenu.css';

export default function MobileMenu() {

   const activeMobileMenu = useSelector(rootReducer => rootReducer.menuReducer);

   const dispatch = useDispatch();

   const closeMobileMenu = () => {
      dispatch(menuClose(false))
   }

   return (
            <>
               <nav className={activeMobileMenu ? 'mobile__nav__on' : 'mobile__nav__off'} >
                  <ul className='mobile__nav__ul'>

                     <li
                     >
                        <Link to='/store' onClick={closeMobileMenu}>Loja</Link>
                     </li>
                     <li
                     >
                        <Link to='/mac' onClick={closeMobileMenu}>Mac</Link>
                     </li>
                     <li
                     >
                        <Link to='/ipad' onClick={closeMobileMenu}>iPad</Link>
                     </li>
                     <li
                     >
                        <Link to='/iphone' onClick={closeMobileMenu}>iPhone</Link>
                     </li>
                     <li
                     >
                        <Link to='/watch' onClick={closeMobileMenu}>Watch</Link>
                     </li>
                     <li
                     >
                        <Link to='/airpods' onClick={closeMobileMenu}>AirPods</Link>
                     </li>
                     <li
                     >
                        <a href="/tv" onClick={closeMobileMenu}>TV e Casa</a>
                     </li>
                     <li
                     >
                        <a href="/" onClick={closeMobileMenu}>Entretenimento</a>
                     </li>
                     <li
                     >
                        <a href="/" onClick={closeMobileMenu}>Acessorios</a>
                     </li>
                     <li
                     >
                        <a href="/" onClick={closeMobileMenu}>Suporte</a>
                     </li>

                  </ul>
                  <div className="close__btn">
                     <button onClick={closeMobileMenu}>
                        <BsChevronCompactUp size={50}/>
                     </button>
                  </div>
               </nav>
            </>

  )
}
