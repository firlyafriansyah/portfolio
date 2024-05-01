import { ReactTyped } from 'react-typed';

const TypingText = props => {
  const { dark, isSmallDesktop, isMobile, sentences } = props;
  return (
    <ReactTyped style={Styles.welcometext(dark, isSmallDesktop, isMobile)} strings={sentences} typeSpeed={70} backSpeed={30} loop />
  );
};

const Styles = {
  welcometext: (dark, isSmallDesktop, isMobile) => ({
    maxWidth: '80%',
    marginTop: '-150px',
    lineHeight: 1.3,
    textAlign: 'center',
    fontSize: isMobile ? '2rem' : isSmallDesktop ? '3rem' : '5rem',
    textShadow: dark ? '8px 8px 4px rgba(255, 255, 255, 0.25)' : '8px 8px 4px rgba(0, 0, 0, 0.25)',
    color: dark ? '#FFFFFF' : '#000000',
    transition: 'ease-in-out 0.5s',
    userSelect: 'none',
  }),
};

export default TypingText;
