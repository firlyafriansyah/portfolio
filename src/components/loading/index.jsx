import { ReactTyped } from 'react-typed';

const Loading = props => {
  return (
    <div style={Styles.container(props.deviceHeight)}>
      <ReactTyped strings={['Loading . . .']} typeSpeed={50} />
    </div>
  );
};

const Styles = {
  container: deviceHeight => ({
    width: '100%',
    minHeight: deviceHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};

export default Loading;
