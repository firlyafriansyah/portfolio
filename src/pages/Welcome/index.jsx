import ParticlesBg from "particles-bg";
import * as React from "react";
import { Link } from "react-router-dom";
import { ContactBlack, ContactWhite, LightBlack, LightWhite } from "../../assets";
import { Contact } from "../../components";
import Loading from "../../components/loading/index.jsx";
import TypingText from "../../components/typingText/index.jsx";
import useAnalyticsEventTracker from "../../utils/useAnalyticsEventTracker";

const titleRun = ["HELLO.", "I'M", "FIRLY AFRIANSYAH", "FRONT-END DEVELOPER", "LET'S", "MAKE", "SOMETHING", "AWESOME!"]

const Welcome = props => {
  const [loading, setLoading] = React.useState(true);
  const [dark, setDark] = React.useState(false);
  const [color, setColor] = React.useState(true);
  const [contact, setContact] = React.useState(false);
  const { deviceHeight, isTablet, isMobile, isSmallDesktop } = props;
  const getEventTracker = useAnalyticsEventTracker('Welcome page');

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  })

  const handleColor = () => {
    setColor(!color);
  }

  return (
    <>
      {loading ? (
        <Loading deviceHeight={deviceHeight} />
      ) : (
        <>
          <ParticlesBg type="cobweb" color={dark ? '#FFFFFF' : '#000000'} num={isTablet ? 20 : 100} bg={Styles.bg(dark ? '#121212' : '#FFFFFF')} style={{ position: 'fixed' }} />
          <div style={Styles.container(deviceHeight)}>
            <Link style={Styles.title(dark ? '#FFFFFF' : '#000000', isTablet)} to={'/'}>FIRLY</Link>
            <div style={Styles.main}>
              <div style={Styles.wrapper} id="welcome">
                <TypingText dark={dark} isSmallDesktop={isSmallDesktop} isMobile={isMobile} sentences={titleRun} />
              </div>
              <div style={Styles.buttonHomeWrapper}>
                <Link style={Styles.buttonHome(color, isMobile)} onMouseEnter={handleColor} onMouseLeave={handleColor} to={'/home'} onClick={() => getEventTracker('See Details')}>See Details</Link>
              </div>
            </div>
            <button style={Styles.buttonLamp(isTablet)} onClick={() => { setDark(!dark); setColor(!color) }}>
              <img style={Styles.lamp} src={dark ? LightWhite : LightBlack} alt="icon" />
            </button>
            <button style={Styles.buttonContact(isTablet)} onClick={() => setContact(!contact)}>
              <img style={Styles.menuContact(contact ? '45deg' : '0deg', isTablet)} src={dark ? ContactWhite : ContactBlack} alt="contact" />
            </button>
            <Contact display={contact} color={dark ? '#FFFFFF' : '#000000'} onclick={() => setContact(!contact)} isMobile={isMobile} />
          </div>
        </>
      )}
    </>
  );
};

const Styles = {
  bg: color => ({
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    backgroundColor: color,
  }),
  container: deviceHeight => ({
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: deviceHeight,
    transition: 'ease-in-out 0.5s',
  }),
  title: (color, isTablet) => ({
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 18,
    left: isTablet ? 0 : 20,
    margin: 20,
    color: color,
    transition: 'ease-in-out 0.5s',
    userSelect: 'none',
    zIndex: 99,
  }),
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    overflowY: 'hidden',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80px',
  },
  buttonHomeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60px',
  },
  buttonHome: (color, isMobile) => ({
    backgroundColor: color ? '#000000' : '#FFFFFF',
    padding: '8px 40px',
    color: color ? '#FFFFFF' : '#000000',
    fontSize: '1rem',
    letterSpacing: 5,
    border: isMobile ? 'none' : `4px solid ${color ? '#FFFFFF' : '#000000'}`,
    textDecoration: 'none',
    fontWeight: color ? 'normal' : 'bold',
  }),
  buttonLamp: (isTablet) => ({
    position: 'absolute',
    backgroundColor: '#00000000',
    border: 'none',
    cursor: 'pointer',
    right: isTablet ? 0 : 20,
    top: 0,
    margin: 20,
    zIndex: 99,
  }),
  lamp: {
    width: 32,
    height: 32,
  },
  buttonContact: (isTablet) => ({
    position: 'absolute',
    backgroundColor: '#00000000',
    border: 'none',
    cursor: 'pointer',
    bottom: 0,
    right: isTablet ? 0 : 20,
    margin: 20,
    zIndex: 99,
  }),
  menuContact: (rot, isTablet) => ({
    width: isTablet ? 50 : 64,
    height: isTablet ? 50 : 64,
    transform: `rotate(${rot})`,
    transition: 'ease-in-out 0.2s',
    zIndex: 99,
  }),
};

export default Welcome;
