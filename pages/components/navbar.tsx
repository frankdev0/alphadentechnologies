import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenuTwo, setShowSubMenuTwo] = useState(false);
  
    const  toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }


  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const toggleSubMenuTwo = () => {
    setShowSubMenuTwo(!showSubMenuTwo);
  };
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth)
        }
        if (typeof window !== 'undefined') {
          setScreenWidth(window.innerWidth);
          window.addEventListener('resize', changeWidth);
        }
    
        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('resize', changeWidth);
          }
        };
      },[])
  return (
    <div>
        <main>
      <header className={styles.headers}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/alphatechh.png' width={50} height={50} alt='company logo' />
          </Link>
        
        </div>
          <nav className={styles.menu}>
            <ul>
          <li><Link href='/' className={styles.link}>Home</Link></li>
          <li><Link href='/services' className={styles.link}>Services</Link></li>
          <li><Link href='/projects' className={styles.link}>Projects</Link>
            <ul className={styles.submenu}>
            <li><Link href='/projects' className={styles.sublink}>project one</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project two</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project Three</Link></li>
            <li><Link href='/about' className={styles.sublink}>Project four</Link></li>
            </ul>
          </li>
          <li><Link href='/aboutus' className={styles.link}>About</Link>
          <ul className={styles.submenu}>
            <li><Link href='/ourteam' className={styles.sublink}>Our Team</Link></li>
            <li><Link href='/aboutus' className={styles.sublink}>About Us</Link></li>
            </ul>
          </li>
          <li><Link href='/companystatement' className={styles.link}>Company Statement</Link></li>
          <li><Link href='/contactus' className={styles.link}>Contact Us</Link></li>
          </ul>
         
          </nav>
        {/* <div className='mx-2 my-2'>
          <button className='btn btn-light'>Get Free Quote</button>
        </div> */}
      </header>
      <div className={styles.mobilenavbody}>
      <nav >
        <div className={styles.mobilehamburger}>
        <button onClick={toggleNav} className={`${styles.hamburger} btn`}><FaBars size={25}/></button>
        </div>
          
          </nav>
          {(toggleMenu || screenWidth > 900) && 
          <div className={`${styles.mobilenav} `}>
            <div className='d-flex justify-content-center'>
            <ul className='mx-auto'>
            <li><Link href='/' className={styles.mobilesubmenu}>Home</Link></li>
            <li><Link href='/aboutus' className={styles.mobilesubmenu}>About</Link></li>
            <li className='d-flex justify-content-center'><Link href='/services' className={styles.mobilesubmenu}>Services</Link><div onClick={toggleSubMenuTwo} className={`${styles.dropdownicon}`}></div></li>
            {(showSubMenuTwo || screenWidth > 900) && (
            <ul className={styles.submenu}>
            <li><Link href='/ourteam' className={styles.sublink}>Our Team</Link></li>
            <li><Link href='/aboutus' className={styles.sublink}>About Us</Link></li>
            </ul>
            )}
            
            <li><Link href='/companystatement' className={styles.mobilesubmenu}>Company Statement</Link></li>
            <li><Link href='/contactus' className={styles.mobilesubmenu}>Contact Us</Link></li>
            <li className='d-flex justify-content-center'><Link href='/projects' className={styles.mobilesubmenu}>Projects</Link><div onClick={toggleSubMenu} className={`${styles.dropdownicon}`}></div> </li>
            {(showSubMenu || screenWidth > 900) && (
            <ul className={styles.submenu}>
            <li><Link href='/projects' className={styles.mobilesubmenu}>project one</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Project two</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Project Three</Link></li>
            <li><Link href='/about' className={styles.mobilesubmenu}>Project four</Link></li>
            </ul>
            )}
            </ul>
            </div>
          </div>
          }
              </div>
     </main>
    </div>
  )
}

export default Navbar