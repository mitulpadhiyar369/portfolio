// Hero Section – full-screen hero with two columns
import React from 'react';
import '../../styles/Hero.css';
import HeroContent from './HeroContent';
import profilePhoto from '../../assets/profile-photo.jpg';



const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background blobs */}
      <div className="bg-blob hero-blob-1" aria-hidden="true" />
      <div className="bg-blob hero-blob-2" aria-hidden="true" />
      <div className="bg-blob hero-blob-3" aria-hidden="true" />



      {/* Main Content Grid */}
      <div className="hero-container">
        {/* Left: Content */}
        <HeroContent />

        {/* Right: Profile Photo */}
        <div className="hero-right" aria-label="Profile photo of Mitul Padhiyar">
          <div className="hero-image-wrapper">
            <img
              src={profilePhoto}
              alt="Mitul Padhiyar – Web Developer"
              className="hero-profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
