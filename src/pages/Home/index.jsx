import ParticlesBg from "particles-bg";
import * as React from "react";
import { Link } from "react-router-dom";
import { ContactBlack, ContactWhite, LightBlack, LightWhite, MenuActiveBlack, MenuActiveWhite, MenuBlack, MenuWhite } from "../../assets";
import { Contact, Menu } from "../../components";
import Loading from "../../components/loading/index.jsx";
import About from "../About/index.jsx";
import Certification from "../Certification/index.jsx";
import CurriculumVitae from "../CurriculumVitae/index.jsx";
import Project from "../Project/index.jsx";
import Skills from "../Skills/index.jsx";

const Home = props => {
  const [loading, setLoading] = React.useState(true);
  const [dark, setDark] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  const { deviceHeight, isMobile, isSmallMobile, isSmallDesktop } = props;

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });


  return (
    <>
      {loading ? (
        <Loading deviceHeight={deviceHeight} />
      ) : (
        <>
          <ParticlesBg type="cobweb" color={dark ? '#FFFFFF' : '#000000'} num={isMobile ? 20 : 100} bg={Styles.bg(dark ? '#121212' : '#FFFFFF')} style={{ position: 'fixed' }} />
          <div style={Styles.container(deviceHeight)}>
            <Link style={Styles.title(dark ? '#FFFFFF' : '#000000', isMobile)} to={'/'}>FIRLY</Link>
            <button style={Styles.buttonMenu(isMobile)} onClick={() => { setMenu(!menu); setContact(false) }}>
              <img style={Styles.menuActive(menu ? '0deg' : '90deg', menu ? 1 : 0, isMobile)} src={dark ? MenuActiveWhite : MenuActiveBlack} alt="menu" />
              <img style={Styles.menu(menu ? '-90deg' : '0deg', menu ? 0 : 1, isMobile)} src={dark ? MenuWhite : MenuBlack} alt="menu" />
            </button>
            <Menu display={menu} color={dark ? '#FFFFFF' : '#000000'} onclick={() => setMenu(!menu)} isMobile={isMobile} />
            <div style={Styles.main} id="main-container">
              <About color={dark ? '#FFFFFF' : '#000000'} deviceHeight={deviceHeight} isMobile={isMobile} isSmallMobile={isSmallMobile} isSmallDesktop={isSmallDesktop} />
              <Skills color={dark ? '#FFFFFF' : '#000000'} deviceHeight={deviceHeight} isSmallDesktop={isSmallDesktop} isMobile={isMobile} isSmallMobile={isSmallMobile} />
              <Certification color={dark ? '#FFFFFF' : '#000000'} deviceHeight={deviceHeight} isMobile={isMobile} isSmallMobile={isSmallMobile} isSmallDesktop={isSmallDesktop} />
              <Project color={dark ? '#FFFFFF' : '#000000'} deviceHeight={deviceHeight} isMobile={isMobile} isSmallMobile={isSmallMobile} isSmallDesktop={isSmallDesktop} />
              <CurriculumVitae color={dark ? '#FFFFFF' : '#000000'} deviceHeight={deviceHeight} isMobile={isMobile} isSmallDesktop={isSmallDesktop} />
            </div>
            <button style={Styles.buttonLamp(isMobile)} onClick={() => setDark(!dark)}>
              <img style={Styles.lamp} src={dark ? LightWhite : LightBlack} alt="icon" />
            </button>
            <button style={Styles.buttonContact(isMobile)} onClick={() => { setContact(!contact); setMenu(false) }}>
              <img style={Styles.menuContact(contact ? '45deg' : '0deg', isMobile)} src={dark ? ContactWhite : ContactBlack} alt="contact" />
            </button>
            <Contact display={contact} color={dark ? '#FFFFFF' : '#000000'} onclick={() => setContact(!contact)} isMobile={isMobile} />
          </div>
          <div style={Styles.scroll}>
            <p style={Styles.scrollText(dark ? '#FFFFFF' : '#000000')}>&larr; Scroll Down</p>
          </div>
        </>
      )}
    </>
  );
};

const Styles = {
  bg: bgcolor => ({
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    backgroundColor: bgcolor,
  }),
  container: (deviceHeight) => ({
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: deviceHeight,
    transition: 'ease-in-out 0.5s',
  }),
  title: (color, isMobile) => ({
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 18,
    left: isMobile ? 0 : 20,
    margin: 20,
    color: color,
    transition: 'ease-in-out 0.5s',
    userSelect: 'none',
    zIndex: 99,
  }),
  buttonMenu: (isMobile) => ({
    position: 'absolute',
    backgroundColor: '#00000000',
    border: 'none',
    cursor: 'pointer',
    left: isMobile ? 0 : 20,
    bottom: 0,
    margin: 20,
    zIndex: 99,
  }),
  menuActive: (rot, opc, isMobile) => ({
    position: 'absolute',
    width: isMobile ? 50 : 64,
    height: isMobile ? 50 : 64,
    transform: `rotate(${rot})`,
    opacity: opc,
    transition: 'ease-in-out 0.5s',
  }),
  menu: (rot, opc, isMobile) => ({
    width: isMobile ? 50 : 64,
    height: isMobile ? 50 : 64,
    transform: `rotate(${rot})`,
    opacity: opc,
    transition: 'ease-in-out 0.5s',
  }),
  main: {
    overflowY: 'scroll',
  },
  buttonLamp: (isMobile) => ({
    position: 'absolute',
    backgroundColor: '#00000000',
    border: 'none',
    cursor: 'pointer',
    right: isMobile ? 0 : 20,
    top: 0,
    margin: 20,
    zIndex: 99,
  }),
  lamp: {
    width: 32,
    height: 32,
  },
  buttonContact: (isMobile) => ({
    position: 'absolute',
    backgroundColor: '#00000000',
    border: 'none',
    cursor: 'pointer',
    bottom: 0,
    right: isMobile ? 0 : 20,
    margin: 20,
    zIndex: 99,
  }),
  menuContact: (rot, isMobile) => ({
    width: isMobile ? 50 : 64,
    height: isMobile ? 50 : 64,
    transform: `rotate(${rot})`,
    transition: 'ease-in-out 0.2s',
  }),
  scroll: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    zIndex: -1,
  },
  scrollText: color => ({
    fontFamily: 'Dancing Script',
    fontSize: 18,
    animation: 'slide 1.5s ease-in-out 1s infinite alternate both',
    color,
    transition: 'ease-in-out 0.5s',
    userSelect: 'none',
  }),
};

export default Home;
