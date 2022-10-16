import React from "react";
import { useState, useEffect } from "react";
import Style from "../public/style/Navbar.module.css";
import Link from "next/link";
import { RiArrowDropDownLine } from 'react-icons/ri';
import Aos from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import Head from 'next/head';

function Navbar() {
  const [active, setActive] = useState(`${Style.items}`);
  const [toggleIcon, setToggleIcon] = useState(`${Style.hamburger}`);
  const [onhover, setOnhover] = useState(false);

  const hoverShow = () => {
    setOnhover(true)
  }
  const hideDropdown = () => {
    setOnhover(false)
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navToggle = () => {
    active === `${Style.items}` ? setActive(`${Style.items} ${Style.activeMenu}`) : setActive(`${Style.items}`);

    toggleIcon === `${Style.hamburger}`
      ? setToggleIcon(`${Style.hamburger} ${Style.toggleIcon}`)
      : setToggleIcon(`${Style.hamburger}`);
  };

  return (
    <>
       <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </Head>
      <div className={Style.container}>
        <nav className={Style.navbar}>
          <div className={Style.logoContainer}>
            <ul>
              <a href="/">
                <Image
                  src="/images/logo.png"
                  alt="Golden Duck Enterprises Pvt. Ltd."
                  id="logo"
                  data-height-percentage="82"
                  data-actual-width="470"
                  data-actual-height="393"
                  width="150px"
                  height="30px"
                />
              </a>
            </ul>
          </div>

          <div className={Style.right}>
            <ul className={active}>
              <li className={Style.item}>
                <Link  href="/" onClick={navToggle} smooth={true}>
                 <span className="text-light"> Home</span>
                </Link>
              </li>
             
              <li className={Style.item}>
                <Link href="/blogs"onClick={navToggle} smooth={true}>
                <span className="text-light"> Home</span>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/Portfolio"onClick={navToggle} smooth={true}>
                <span className="text-light"> Home</span>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/gallery"onClick={navToggle} smooth={true}>
                <span className="text-light"> Home</span>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/contact" onClick={navToggle} smooth={true}>
                <span className="text-light"> Home</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={toggleIcon} onClick={navToggle}>
            <div className={`${Style.hamItem} ${Style.line1}`}></div>
            <div className={`${Style.hamItem} ${Style.line2}`}></div>
            <div className={`${Style.hamItem} ${Style.line3}`}></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;