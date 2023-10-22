import React,{useState} from 'react';
import './navbar.css';
import logo from '../../logo2.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';


const Navbar = () => {
    const[showMenu, setShowMenu]= useState(false);
    return (
       <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="destopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="DestopMenuItemList">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="DestopMenuItemList">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="DestopMenuItemList">Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className="DestopMenuItemList">Contact</Link>

        </div>
        <button className="destopMenuBtn" onClick={()=> {
            document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
        }
        }>
         <img src={contactImg} alt="Contact" className="destopMenuImg" />Connect</button>

         <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>

            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ItemList" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ItemList" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ItemList" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className="ItemList" onClick={()=>setShowMenu(false)}>Contact</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className="ItemList" onClick={()=>setShowMenu(false)}>Connect</Link>

        </div>


       </nav>
    )
}

export default Navbar
