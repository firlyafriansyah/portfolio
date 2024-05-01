import * as React from "react";
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-177833990-1';

ReactGA.initialize(TRACKING_ID);

const Contact = props => {
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
          <a style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} target='_blank' rel="noopener noreferrer" href="https://wa.me/6285695177537">Whatsapp</a>
        </li>
        <li style={Styles.list}>
          <a style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} href="mailto:firlyafriansyah50@gmail.com">Email</a>
        </li>
        <li style={Styles.list}>
          <a style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} href="tel:6285695177537">Phone</a>
        </li>
        <li style={Styles.list}>
          <a style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/firlyafriansyah/">LinkedIn</a>
        </li>
        <li style={Styles.list}>
          <a style={Styles.menuLink(props.color, display)} onClick={() => { setDisplay(!display); props.onclick() }} target='_blank' rel="noopener noreferrer" href="https://github.com/firlyafriansyah">Github</a>
        </li>
      </ul>
    </div>
  );
};

const Styles = {
  container: display => ({
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 40,
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
    justifyContent: 'end',
    marginBottom: 10,
    fontSize: '1rem',
    userSelect: 'none',
  },
  menuLink: (color, display) => ({
    textDecoration: 'none',
    color: color === '#000000' ? '#FFFFFF' : '#000000',
    display: display ? 'unset' : 'none',
    cusrsor: display ? 'pointer' : 'default',
    backgroundColor: color,
    padding: '5px 15px',
    border: `2px solid ${color === '#000000' ? '#FFFFFF' : '#000000'}`,
  }),
};

export default Contact;
