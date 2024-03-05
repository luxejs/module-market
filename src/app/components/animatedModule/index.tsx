import React, { useState } from 'react';
import Image from "next/image"

const AnimatedModule = ({src}) => {
 const [isHovered, setIsHovered] = useState(false);

 return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      {!isHovered ? (
        <Image fill src={src} alt="Animated GIF"/>
      ) : (
        <Image fill src="/images/comstats-png.png" alt="Static Image"/>

      )}
    </div>
 );
};

export default AnimatedModule;