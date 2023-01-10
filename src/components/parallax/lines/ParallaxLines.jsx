import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxLines = () => {
  const line1 = {
    className: 'lines-line',
    translateX: [-200, 400, 'easeIn'],
  };
  const line2 = {
    className: 'lines-line',
    translateX: [200, -400, 'easeIn'],
  };
  const line3 = {
    className: 'lines-line',
    translateX: [-200, 400, 'easeIn'],
  };
  const line4 = {
    className: 'lines-line',
    translateX: [200, -400, 'easeIn'],
  };

  return <ParallaxBanner layers={[line1, line2, line3, line4]} className="lines" />;
};

export { ParallaxLines };
