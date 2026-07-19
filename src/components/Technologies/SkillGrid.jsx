// SkillGrid – 2x2 grid of technology cards
import React from 'react';
import TechnologyCard from './TechnologyCard';

const TECHNOLOGIES = [
  {
    name: 'HTML5',
    icon: '🌐',
    status: 'Intermediate',
    description: 'Semantic HTML, Accessibility, Forms, SEO-friendly structure, and Responsive Layouts using modern HTML5 standards.',
    progress: 95,
  },
  {
    name: 'CSS3',
    icon: '🎨',
    status: 'Intermediate',
    description: 'Responsive Design, Flexbox, CSS Grid, Animations, Transitions, Glassmorphism, and Modern UI Design principles.',
    progress: 89,
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    status: 'Beginner → Intermediate',
    description: 'ES6+, DOM Manipulation, Events, Functions, Arrays, Objects, and building interactive web applications.',
    progress: 83,
  },
  {
    name: 'C Language',
    icon: '⚙️',
    status: 'Intermediate',
    description: 'Programming Fundamentals, Problem Solving, Loops, Functions, Arrays, Pointers, and Basic Data Structures.',
    progress: 92,
  },
];

const SkillGrid = () => {
  return (
    <div className="skill-grid" role="list" aria-label="Technology skills">
      {TECHNOLOGIES.map((tech, index) => (
        <TechnologyCard
          key={tech.name}
          tech={tech}
          delay={index + 1}
        />
      ))}
    </div>
  );
};

export default SkillGrid;
