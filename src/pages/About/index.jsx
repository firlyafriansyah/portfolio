const About = props => {
  const { deviceHeight, color, isMobile, isSmallMobile, isSmallDesktop } = props;

  return (
    <div style={styles.container(deviceHeight)} id="about">
      <h1 style={styles.title(color, isMobile)}>About Me</h1>
      <p style={styles.text(color, isSmallDesktop, isMobile, isSmallMobile)}>"A Full Stack Developer with 3+ years of experience in Web and Mobile Hybrid
        Development. Familiar with <span style={styles.highlight(color)}>Javascript & Typescript</span> Programming Language, focusing develop
        Web and Mobile Apps with <span style={styles.highlight(color)}>React JS</span> and <span style={styles.highlight(color)}>React Native</span>, and also can develop
        Rest Full API with <span style={styles.highlight(color)}>Express JS</span>.Always interested to learn new
        programming language and new technology"
      </p>
    </div>
  );
};

const styles = {
  container: deviceHeight => ({
    padding: '0px 40px',
    width: '100%',
    minHeight: deviceHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (color, isMobile) => ({
    lineHeight: 1,
    textAlign: 'center',
    color: color,
    fontWeight: 100,
    fontSize: isMobile ? '2rem' : '2.5rem',
    margin: isMobile ? `0px 20px 40px 10px` : `0px 10px 50px 10px`,
  }),
  text: (color, isSmallDesktop, isMobile, isSmallMobile) => ({
    width: isMobile ? '100%' : isSmallDesktop ? '90%' : '70%',
    color: color,
    lineHeight: isSmallMobile ? 1.5 : 2,
    fontWeight: 500,
    textAlign: 'justify',
    fontSize: isMobile ? '1rem' : isSmallDesktop ? '1.3rem' : '1.8rem',
    fontFamily: 'Spline Sans Mono',
  }),
  highlight: color => ({
    backgroundColor: color,
    color: color === "#000000" ? "#FFF" : '#000',
  }),
};

export default About;
