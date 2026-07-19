// HeroContent Component
// Left-side hero content: welcome, name, headings, typing, intro, buttons
import React from 'react';
import TypingText from './TypingText';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="hero-left">
      {/* Welcome greeting */}
      <p className="hero-welcome" aria-label="Hello greeting">
        <span className="hero-wave" aria-hidden="true">👋</span>
        Hello, I'm
      </p>

      {/* Name */}
      <h1 className="hero-name">Mitul Padhiyar</h1>

      {/* Main heading */}
      <h2 className="hero-heading">Passionate Web Developer</h2>

      {/* Second heading */}
      <p className="hero-heading-second">Aspiring Software Engineer</p>

      {/* Animated typing roles */}
      <TypingText />

      {/* Short introduction */}
      <p className="hero-paragraph">
        I enjoy crafting modern, responsive, and user-centric web experiences that blend
        creativity with clean code. Passionate about frontend development and the ever-evolving
        world of technology, I believe in growing through real-world challenges, continuous
        exploration, and turning ambitious ideas into polished digital realities.
      </p>

      {/* CTA Buttons */}
      <HeroButtons />
    </div>
  );
};

export default HeroContent;
