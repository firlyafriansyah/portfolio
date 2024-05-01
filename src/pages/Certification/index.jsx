/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

const Certification = props => {
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
    <div style={styles.container(deviceHeight)} id="certification">
      <h1 style={styles.title(color, isMobile)}>My Certification</h1>
      <div style={styles.imageContainer}>
        {isMobile ? (
          <>
            <div style={styles.imageWraper}>
              <a href='https://www.dicoding.com/certificates/RVZK4R97MPD5' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorThree, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('three')} onMouseLeave={() => handleColor('three')}>
                <p style={styles.imageCaption(colorThree, isSmallMobile)}>Become a Front-End Web Developer Expert</p>
                <p style={styles.imageCaptionTwo(colorThree, isMobile)}>Dicoding Academy</p>
              </a>
              <a href='https://www.dicoding.com/certificates/NVP7KKQ34ZR0' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorFour, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('four')} onMouseLeave={() => handleColor('four')}>
                <p style={styles.imageCaption(colorFour, isSmallMobile)}>Learn to Build Web Apps with React</p>
                <p style={styles.imageCaptionTwo(colorFour, isMobile)}>Dicoding Academy</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a
                href='https://www.freecodecamp.org/certification/firlyafriansyah/javascript-algorithms-and-data-structures'
                target="_blank" rel="noopener noreferrer"
                style={styles.image(colorFive, isSmallDesktop, isMobile, isSmallMobile)}
                onMouseEnter={() => handleColor('five')} onMouseLeave={() => handleColor('five')}>
                <p style={styles.imageCaption(colorFive, isSmallMobile)}>JavaScript Algorithms and Data Structures</p>
                <p style={styles.imageCaptionTwo(colorFive, isMobile)}>freeCodeCamp.org</p>
              </a>
              <a href='https://www.dicoding.com/certificates/98XW67V7LXM3' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorSix, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('six')} onMouseLeave={() => handleColor('six')}>
                <p style={styles.imageCaption(colorSix, isSmallMobile)}>Back-End Applications for Beginners</p>
                <p style={styles.imageCaptionTwo(colorSix, isMobile)}>Dicoding Academy</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a href='https://www.sololearn.com/certificates/course/en/8522102/1024/landscape/png' target="_blank"
                 rel="noopener noreferrer" style={styles.image(colorTwo, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('two')} onMouseLeave={() => handleColor('two')}>
                <p style={styles.imageCaption(colorTwo, isSmallMobile)}>Javascript Course</p>
                <p style={styles.imageCaptionTwo(colorTwo, isMobile)}>Sololearn</p>
              </a>
              <a href='https://www.dicoding.com/certificates/N9ZO6YWL8XG5' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorOne, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('one')} onMouseLeave={() => handleColor('one')}>
                <p style={styles.imageCaption(colorOne, isSmallMobile)}>Become Linux System Administrator</p>
                <p style={styles.imageCaptionTwo(colorOne, isMobile)}>Dicoding Academy</p>
              </a>

            </div>

          </>
        ) : (
          <>
            <div style={styles.imageWraper}>
              <a href='https://www.dicoding.com/certificates/RVZK4R97MPD5' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorThree, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('three')} onMouseLeave={() => handleColor('three')}>
                <p style={styles.imageCaption(colorThree, isSmallMobile)}>Become a Front-End Web Developer Expert</p>
                <p style={styles.imageCaptionTwo(colorThree, isMobile)}>Dicoding Academy</p>
              </a>
              <a href='https://www.dicoding.com/certificates/NVP7KKQ34ZR0' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorFour, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('four')} onMouseLeave={() => handleColor('four')}>
                <p style={styles.imageCaption(colorFour, isSmallMobile)}>Learn to Build Web Apps with React</p>
                <p style={styles.imageCaptionTwo(colorFour, isMobile)}>Dicoding Academy</p>
              </a>
              <a
                href='https://www.freecodecamp.org/certification/firlyafriansyah/javascript-algorithms-and-data-structures'
                target="_blank" rel="noopener noreferrer"
                style={styles.image(colorFive, isSmallDesktop, isMobile, isSmallMobile)}
                onMouseEnter={() => handleColor('five')} onMouseLeave={() => handleColor('five')}>
                <p style={styles.imageCaption(colorFive, isSmallMobile)}>JavaScript Algorithms and Data Structures</p>
                <p style={styles.imageCaptionTwo(colorFive, isMobile)}>freeCodeCamp.org</p>
              </a>
            </div>
            <div style={styles.imageWraper}>
              <a href='https://www.dicoding.com/certificates/98XW67V7LXM3' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorSix, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('six')} onMouseLeave={() => handleColor('six')}>
                <p style={styles.imageCaption(colorSix, isSmallMobile)}>Back-End Applications for Beginners</p>
                <p style={styles.imageCaptionTwo(colorSix, isMobile)}>Dicoding Academy</p>
              </a>
              <a href='https://www.sololearn.com/certificates/course/en/8522102/1024/landscape/png' target="_blank"
                 rel="noopener noreferrer" style={styles.image(colorTwo, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('two')} onMouseLeave={() => handleColor('two')}>
                <p style={styles.imageCaption(colorTwo, isSmallMobile)}>Javascript Course</p>
                <p style={styles.imageCaptionTwo(colorTwo, isMobile)}>Sololearn</p>
              </a>
              <a href='https://www.dicoding.com/certificates/N9ZO6YWL8XG5' target="_blank" rel="noopener noreferrer"
                 style={styles.image(colorOne, isSmallDesktop, isMobile, isSmallMobile)}
                 onMouseEnter={() => handleColor('one')} onMouseLeave={() => handleColor('one')}>
                <p style={styles.imageCaption(colorOne, isSmallMobile)}>Become Linux System Administrator</p>
                <p style={styles.imageCaptionTwo(colorOne, isMobile)}>Dicoding Academy</p>
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
    margin: isMobile ? `0px 15px 40px 15px` : `0px 10px 50px 10px`,
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
  imageCaption: (color, isSmallMobile) => ({
    color: color ? '#FFF' : '#000',
    fontFamily: 'Spline Sans Mono',
    fontSize: isSmallMobile ? '0.8rem' : '1rem',
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

export default Certification;
