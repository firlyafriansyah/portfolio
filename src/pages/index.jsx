import * as React from 'react'
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/index.jsx'
import Welcome from './Welcome/index.jsx'

const Pages = () => {
  const [deviceHeight, setDeviceHeight] = React.useState(window.innerHeight);
  const isSmallDesktop = useMediaQuery({ maxWidth: 950 });
  const isTablet = useMediaQuery({ maxWidth: 700 });
  const isMobile = useMediaQuery({ maxWidth: 550 });
  const isSmallMobile = useMediaQuery({ maxWidth: 500, maxHeight: 800 });

  React.useEffect(() => {
    const handleResize = () => {
      setDeviceHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome deviceHeight={deviceHeight} isSmallDesktop={isSmallDesktop} isTablet={isTablet} isMobile={isMobile} isSmallMobile={isSmallMobile} />} />
        <Route path="/home" element={<Home deviceHeight={deviceHeight} isSmallDesktop={isSmallDesktop} isTablet={isTablet} isMobile={isMobile} isSmallMobile={isSmallMobile} />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
