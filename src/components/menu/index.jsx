import * as React from "react";
import { Link } from "react-scroll";
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-177833990-1';

ReactGA.initialize(TRACKING_ID);

const Menu = props => {
  const [display, setDisplay] = React.useState('');

  React.useEffect(() => {
    setDisplay(props.display);
  }, [props.display]);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div style={Styles.container(display)}>
      <ul style={Styles.listWrapper}>
        <li style={Styles.list}>
          <Link style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} containerId={'main-container'}>About</Link>
        </li>
        <li style={Styles.list}>
          <Link style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} containerId={'main-container'}>Skill</Link>
        </li>
        <li style={Styles.list}>
          <Link style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} activeClass="active" to="certification" spy={true} smooth={true} offset={0} duration={500} containerId={'main-container'}>Certification</Link>
        </li>
        <li style={Styles.list}>
          <Link style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} activeClass="active" to="project" spy={true} smooth={true} offset={0} duration={500} containerId={'main-container'}>Project</Link>
        </li>
        <li style={Styles.list}>
          <Link style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} activeClass="active" to="vitae" spy={true} smooth={true} offset={0} duration={500} containerId={'main-container'}>Curriculum Vitae</Link>
        </li>
      </ul>
    </div>
  );
};

const Styles = {
  container: display => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginLeft: 40,
    marginBottom: 100,
    opacity: display ? 1 : 0,
    transition: `opacity 0.5s`,
    zIndex: 99,
  }),
  listWrapper: {
    listStyle: 'none',
  },
  list: {
    display: 'flex',
    justifyContent: 'start',
    marginBottom: 10,
    fontSize: '1rem',
    userSelect: 'none',
  },
  menuLink: (color, display) => ({
    textDecoration: 'none',
    color: color === '#000000' ? '#FFFFFF' : '#000000',
    display: display ? 'unset' : 'none',
    cursor: display ? 'pointer' : 'default',
    backgroundColor: color,
    padding: '5px 15px',
    wordWrap: 'none',
    border: `2px solid ${color === '#000000' ? '#FFFFFF' : '#000000'}`,
  }),
};

export default Menu;
