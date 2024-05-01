import * as React from 'react';

const Project = props => {
  const [colorOne, setColorOne] = React.useState(false);
  const [colorTwo, setColorTwo] = React.useState(false);
  const [colorThree, setColorThree] = React.useState(false);
  const [colorFour, setColorFour] = React.useState(false);
  const [colorFive, setColorFive] = React.useState(false);
  const [colorSix, setColorSix] = React.useState(false);
  const { color, deviceHeight, isMobile, isSmallMobile, isSmallDesktop } = props;

  React.useEffect(() => {
    setColorOne(!colorOne);
    setColorTwo(!colorTwo);
    setColorThree(!colorThree);
    setColorFour(!colorFour);
    setColorFive(!colorFive);
    setColorSix(!colorSix);
    return () => {
      setColorOne(!colorOne);
      setColorTwo(!colorTwo);
      setColorThree(!colorThree);
      setColorFour(!colorFour);
      setColorFive(!colorFive);
      setColorSix(!colorSix);
    };
  }, [color]);

  const handleColor = (type) => {
    switch (type) {
      case "one":
        setColorOne(!colorOne);
        break;
      case "two":
        setColorTwo(!colorTwo);
        break;
      case "three":
        setColorThree(!colorThree);
        break;
      case "four":
        setColorFour(!colorFour);
        break;
      case "five":
        setColorFive(!colorFive);
        break;
      case "six":
        setColorSix(!colorSix);
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container(deviceHeight)} id="project">
      <h1 style={styles.title(color, isMobile)}>Portfolio Project</h1>
      <div style={styles.imageContainer}>
        {isMobile ? (
          <>
            <div style={styles.imageWraper}>
              <a rel="noopener noreferrer" style={styles.image(colorOne, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('one')} onMouseLeave={() => handleColor('one')}>
                <p style={styles.imageCaption(colorOne, isMobile)}>Cipher Generator Kriptografi</p>
                <p style={styles.imageCaptionTwo(colorOne, isMobile)}>(HTML, CSS, Javascript)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorTwo, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('two')} onMouseLeave={() => handleColor('two')}>
                <p style={styles.imageCaption(colorTwo, isMobile)}>Restaurant Finder</p>
                <p style={styles.imageCaptionTwo(colorTwo, isMobile)}>(Javascript, Webpack)</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a rel="noopener noreferrer" style={styles.image(colorThree, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('three')} onMouseLeave={() => handleColor('three')}>
                <p style={styles.imageCaption(colorThree, isMobile)}>Tic Tac Toe</p>
                <p style={styles.imageCaptionTwo(colorThree, isMobile)}>(HTML, CSS, JavaScript)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorFour, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('four')} onMouseLeave={() => handleColor('four')}>
                <p style={styles.imageCaption(colorFour, isMobile)}>Football Center</p>
                <p style={styles.imageCaptionTwo(colorFour, isMobile)}>(JavaScript, PWA, Web Push)</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a rel="noopener noreferrer" style={styles.image(colorFive, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('five')} onMouseLeave={() => handleColor('five')}>
                <p style={styles.imageCaption(colorFive, isMobile)}>Med-Rec Mobile</p>
                <p style={styles.imageCaptionTwo(colorFive, isMobile)}>(React Native, ExpressJS, Mysql)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorSix, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('six')} onMouseLeave={() => handleColor('six')}>
                <p style={styles.imageCaption(colorSix, isMobile)}>C19 Diagnosis Questions Design</p>
                <p style={styles.imageCaptionTwo(colorSix, isMobile)}>(HTML, CSS, JavaScript)</p>
              </a>
            </div>
          </>
        ) : (
          <>
            <div style={styles.imageWraper}>
              <a rel="noopener noreferrer" style={styles.image(colorOne, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('one')} onMouseLeave={() => handleColor('one')}>
                <p style={styles.imageCaption(colorOne, isMobile)}>Cipher Generator Kriptografi</p>
                <p style={styles.imageCaptionTwo(colorOne, isMobile)}>(HTML, CSS, Javascript)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorTwo, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('two')} onMouseLeave={() => handleColor('two')}>
                <p style={styles.imageCaption(colorTwo, isMobile)}>Restaurant Finder</p>
                <p style={styles.imageCaptionTwo(colorTwo, isMobile)}>(Javascript, Webpack)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorThree, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('three')} onMouseLeave={() => handleColor('three')}>
                <p style={styles.imageCaption(colorThree, isMobile)}>Tic Tac Toe</p>
                <p style={styles.imageCaptionTwo(colorThree, isMobile)}>(HTML, CSS, JavaScript)</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a rel="noopener noreferrer" style={styles.image(colorFour, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('four')} onMouseLeave={() => handleColor('four')}>
                <p style={styles.imageCaption(colorFour, isMobile)}>Football Center</p>
                <p style={styles.imageCaptionTwo(colorFour, isMobile)}>(JavaScript, PWA, Web Push)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorFive, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('five')} onMouseLeave={() => handleColor('five')}>
                <p style={styles.imageCaption(colorFive, isMobile)}>Med-Rec Mobile</p>
                <p style={styles.imageCaptionTwo(colorFive, isMobile)}>(React Native, ExpressJS, Mysql)</p>
              </a>
              <a rel="noopener noreferrer" style={styles.image(colorSix, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('six')} onMouseLeave={() => handleColor('six')}>
                <p style={styles.imageCaption(colorSix, isMobile)}>C19 Diagnosis Questions Design</p>
                <p style={styles.imageCaptionTwo(colorSix, isMobile)}>(HTML, CSS, JavaScript)</p>
              </a>
            </div>
          </>
        )}
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
  title: (color, isMobile) => ({
    lineHeight: 1,
    textAlign: 'center',
    color: color,
    fontWeight: 100,
    fontSize: isMobile ? '2rem' : '2.5rem',
    margin: isMobile ? `0px 10px 40px 15px` : `0px 10px 50px 10px`,
  }),
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageWraper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: (color, isSmallDesktop, isMobile, isSmallMobile) => ({
    textDecoration: 'none',
    width: isSmallMobile ? '140px' : isMobile ? '160px' : '180px',
    height: isSmallMobile ? '140px' : isMobile ? '160px' : '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color ? '#000' : '#FFF',
    margin: isSmallMobile ? '2px' : isSmallDesktop ? '5px' : '10px',
    borderSize: isMobile ? 'none' : '5px',
    borderColor: color ? '#FFF' : '#000',
    borderStyle: 'solid',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
  }),
  imageCaption: (color, isMobile) => ({
    color: color ? '#FFF' : '#000',
    fontFamily: 'Spline Sans Mono',
    fontSize: isMobile ? '1rem' : '1.2rem',
    fontWeight: color ? 500 : 700,
    textAlign: 'center',
    padding: '10px',
  }),
  imageCaptionTwo: (color, isMobile) => ({
    color: color ? '#FFF' : '#000',
    fontFamily: 'Spline Sans Mono',
    fontSize: isMobile ? '0.5rem' : '0.7rem',
    marginTop: '10px',
    fontWeight: color ? 500 : 700,
    textAlign: 'center',
    padding: '10px',
  }),
};

export default Project;
