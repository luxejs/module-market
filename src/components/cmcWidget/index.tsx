// // components/CMCWidget.js
// import { useEffect, useRef } from 'react';

// const CMCWidget = () => {
//  const widgetRef = useRef(null);

//  useEffect(() => {
//     if (!widgetRef.current) return;

//     const script = document.createElement('script');
//     script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
//     script.async = true;
//     widgetRef.current.appendChild(script);

//     return () => {
//       widgetRef.current.removeChild(script);
//     };
//  }, []);

//  return (
//     <div ref={widgetRef} id="coinmarketcap-widget-marquee" coins="29509,22974,1,1027" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"></div>
//  );
// };

// export default CMCWidget;
