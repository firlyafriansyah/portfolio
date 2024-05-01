import Pages from "./pages/index.jsx";
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-177833990-1';
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Pages />
  )
}

export default App
