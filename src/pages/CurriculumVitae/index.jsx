/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

const CurriculumVitae = props => {
  const [localColor, setLocalColor] = React.useState(false);
  const { color, deviceHeight, isMobile, isSmallDesktop } = props;

  React.useEffect(() => {
    setLocalColor(!localColor);
    return () => {
      setLocalColor(!localColor);
    }
  }, [color]);

  const handleColor = () => {
    setLocalColor(!localColor);
  };

  return (
    <div style={styles.container(deviceHeight)} id="vitae">
      <p style={styles.title(color, isSmallDesktop, isMobile)}>Download My Curriculum Vitae here!</p>
      <div>
        <a style={styles.button(localColor, isMobile)} onMouseEnter={handleColor} onMouseLeave={handleColor} href="https://drive.google.com/file/d/1Mx_f0auE2NuEN3TFmZITeqbTHFYXeymN/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download</a>
      </div>
    </div>
  );
};

const styles = {
  container: deviceHeight => ({
    minHeight: deviceHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }),
  title: (color, isSmallDesktop, isMobile) => ({
    wordWrap: 'break-word',
    textAlign: 'center',
    fontSize: isMobile ? '1rem' : isSmallDesktop ? '2rem' : '2.5rem',
    fontFamily: 'Spline Sans Mono',
    fontWeight: 700,
    margin: isMobile ? '20px 20px' : '80px 20px',
    color,
  }),
  button: (color, isMobile) => ({
    textDecoration: 'none',
    padding: '10px 40px',
    fontSize: isMobile ? '1rem' : '2rem',
    fontFamily: 'Spline Sans Mono',
    fontWeight: 500,
    color: color ? '#fff' : '#000',
    backgroundColor: color ? '#000' : '#fff',
    borderSize: isMobile ? 'none' : '5px',
    borderColor: color ? '#FFF' : '#000',
    borderStyle: 'solid',
    cursor: 'pointer',
  }),
};

export default CurriculumVitae;
