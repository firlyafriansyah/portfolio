import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category='Portfolio Web') => {
  const eventTracker = (action = 'See Details', label = 'See Details') => {
    ReactGA.event({ category, action, label });
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;
