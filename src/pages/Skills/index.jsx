/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

const Skills = props => {
  const [colorTypescript, setColorTypescript] = React.useState(false);
  const [colorReact, setColorReact] = React.useState(false);
  const [colorNative, setColorNative] = React.useState(false);
  const [colorExpress, setColorExpress] = React.useState(false);
  const [colorNext, setColorNext] = React.useState(false);
  const [colorTailwind, setColorTailwind] = React.useState(false);
  const [colorChakra, setColorChakra] = React.useState(false);
  const [colorPrisma, setColorPrisma] = React.useState(false);
  const { color, deviceHeight, isSmallDesktop, isMobile, isSmallMobile } = props;

  React.useEffect(() => {
    setColorTypescript(!colorTypescript);
    setColorReact(!colorReact);
    setColorNative(!colorNative);
    setColorExpress(!colorExpress);
    setColorNext(!colorNext);
    setColorTailwind(!colorTailwind);
    setColorChakra(!colorChakra);
    setColorPrisma(!colorPrisma);
    return () => {
      setColorTypescript(!colorTypescript);
      setColorReact(!colorReact);
      setColorNative(!colorNative);
      setColorExpress(!colorExpress);
      setColorNext(!colorNext);
      setColorTailwind(!colorTailwind);
      setColorChakra(!colorChakra);
      setColorPrisma(!colorPrisma);
    };
  }, [color]);

  const handleColor = type => {
    switch (type) {
      case "typescript":
        setColorTypescript(!colorTypescript);
        break;
      case "react":
        setColorReact(!colorReact);
        break;
      case "native":
        setColorNative(!colorNative);
        break;
      case "express":
        setColorExpress(!colorExpress);
        break;
      case "next":
        setColorNext(!colorNext);
        break;
      case "tailwind":
        setColorTailwind(!colorTailwind);
        break;
      case "chakra":
        setColorChakra(!colorChakra);
        break;
      case "prisma":
        setColorPrisma(!colorPrisma);
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container(deviceHeight)} id="skills">
      <h1 style={styles.title(color, isMobile)}>What I'm Into?</h1>
      <div style={styles.imageWrapper}>
        <a href='https://www.typescriptlang.org/' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorTypescript, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('typescript')} onMouseLeave={() => handleColor('typescript')}>
          <p style={styles.imageCaption(colorTypescript, isSmallMobile)}>Typescript</p>
        </a>
        <a href='https://reactjs.org' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorReact, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('react')} onMouseLeave={() => handleColor('react')}>
          <p style={styles.imageCaption(colorReact, isSmallMobile)}>React JS</p>
        </a>
        <a href='https://reactnative.dev' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorNative, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('native')} onMouseLeave={() => handleColor('native')}>
          <p style={styles.imageCaption(colorNative, isSmallMobile)}>React Native</p>
        </a>
        <a href='https://expressjs.com' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorExpress, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('express')} onMouseLeave={() => handleColor('express')}>
          <p style={styles.imageCaption(colorExpress, isSmallMobile)}>Express JS</p>
        </a>
      </div>
      <div style={styles.imageWrapper}>
        <a href='https://nextjs.org/' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorNext, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('next')} onMouseLeave={() => handleColor('next')}>
          <p style={styles.imageCaption(colorNext, isSmallMobile)}>Next JS</p>
        </a>
        <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorTailwind, isSmallDesktop, isMobile, isSmallMobile)} onMouseEnter={() => handleColor('tailwind')}
           onMouseLeave={() => handleColor('tailwind')}>
          <p style={styles.imageCaption(colorTailwind, isSmallMobile)}>Tailwind</p>
        </a>
        <a href='https://chakra-ui.com' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorChakra, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('chakra')} onMouseLeave={() => handleColor('chakra')}>
          <p style={styles.imageCaption(colorChakra, isSmallMobile)}>Chakra UI</p>
        </a>
        <a href='https://www.prisma.io/' target="_blank" rel="noopener noreferrer"
           style={styles.image(colorPrisma, isSmallDesktop, isMobile, isSmallMobile)}
           onMouseEnter={() => handleColor('prisma')} onMouseLeave={() => handleColor('prisma')}>
          <p style={styles.imageCaption(colorPrisma, isSmallMobile)}>Prisma</p>
        </a>
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
    padding: '0px 30px',
  }),
  title: (color, isMobile) => ({
    lineHeight: 1,
    textAlign: 'center',
    color: color,
    fontWeight: 100,
    fontSize: isMobile ? '2rem' : '2.5rem',
    margin: isMobile ? `0px 10px 40px 10px` : `0px 10px 50px 10px`,
  }),
  imageWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: (color, isSmallDesktop, isMobile, isSmallMobile) => ({
    textDecoration: 'none',
    width: isSmallMobile ? '120px' : isSmallDesktop ? '150px' : '180px',
    height: isSmallMobile ? '120px' : isSmallDesktop ? '150px' : '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color ? '#000' : '#FFF',
    margin: isSmallMobile ? '1px' : isSmallDesktop ? '5px' : '10px',
    borderSize: isMobile ? 'none' : '5px',
    borderColor: color ? '#FFF' : '#000',
    borderStyle: 'solid',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
  }),
  imageCaption: (color, isSmallMobile) => ({
    wordWrap: 'break-word',
    color: color ? '#FFF' : '#000',
    fontFamily: 'Spline Sans Mono',
    fontSize: isSmallMobile ? '1rem' : '1.2rem',
    fontWeight: color ? 500 : 700,
  }),
};

export default Skills;
