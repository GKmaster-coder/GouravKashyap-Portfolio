import React, { useState, useEffect } from 'react';

const SpaceCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [role="button"], .interactive')) {
        setHovered(true);
      }
    };
    
    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, [role="button"], .interactive')) {
        setHovered(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const cursorStyles = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  const renderStarCursor = () => (
    <div className="relative">
      <div className={`
        w-6 h-6
        bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300
        shadow-lg shadow-yellow-400/60
        transition-all duration-500
        ${clicked ? 'scale-50 rotate-180 bg-red-400' : hovered ? 'scale-150 rotate-45 bg-white' : 'scale-100 rotate-0'}
        animate-pulse-gentle
      `} style={{ 
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
      }}></div>
      
      <div className="absolute inset-0 w-6 h-6 bg-yellow-300/30 animate-pulse-slower rounded-full"></div>
      
      <div className="absolute -inset-6">
        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-twinkle-1 shadow-lg shadow-white"></div>
        <div className="absolute top-2 -right-2 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle-2 shadow-lg shadow-cyan-400"></div>
        <div className="absolute -bottom-2 left-0 w-1 h-1 bg-purple-300 rounded-full animate-twinkle-3 shadow-lg shadow-purple-400"></div>
        <div className="absolute -top-2 right-0 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle-4 shadow-lg shadow-yellow-400"></div>
        <div className="absolute bottom-0 -left-2 w-1 h-1 bg-pink-300 rounded-full animate-twinkle-5 shadow-lg shadow-pink-400"></div>
        
        <div className="absolute top-1 -right-3 w-1 h-1 bg-white rounded-full animate-orbit-mini"></div>
        <div className="absolute -bottom-1 -left-3 w-1 h-1 bg-blue-300 rounded-full animate-orbit-mini-reverse"></div>
      </div>
      
      <div className="absolute inset-0 animate-star-burst">
        <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-yellow-200 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-2 h-0.5 bg-yellow-200 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={cursorStyles}
    >
      {renderStarCursor()}
    </div>
  );
};

export default SpaceCursor;