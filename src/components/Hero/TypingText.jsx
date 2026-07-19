// TypingText Component
// Cycles through developer roles with typewriter effect
import React, { useState, useEffect } from 'react';

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Web Developer',
  'AI Enthusiast',
  'Lifelong Learner',
];

const TYPING_SPEED = 80;   // ms per character typed
const ERASE_SPEED = 50;    // ms per character erased
const PAUSE_TYPED = 1800;  // ms after fully typed
const PAUSE_ERASED = 400;  // ms after fully erased

const TypingText = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentRole = ROLES[roleIndex];

    if (isTyping) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        // Fully typed – pause then start erasing
        timeout = setTimeout(() => setIsTyping(false), PAUSE_TYPED);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, ERASE_SPEED);
      } else {
        // Fully erased – pause then switch role
        timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setIsTyping(true);
        }, PAUSE_ERASED);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, roleIndex, isTyping]);

  return (
    <div className="hero-typing-row">
      <span className="hero-typing-prefix">I am a</span>
      <span className="hero-typed-text">
        {displayed}
        <span className="cursor-blink" aria-hidden="true" />
      </span>
    </div>
  );
};

export default TypingText;
