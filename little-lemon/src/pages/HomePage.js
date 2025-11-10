import './HomePage.css';

import Header from '../components/Nav/Header';
import Footer from '../components/Footer/Footer';

import HeroSection from '../components/HomePage/HeroSection';
import SpecialsSection from '../components/HomePage/SpecialsSection';
import TestimonialSection from '../components/HomePage/TestimonialSection';
import AboutSection from '../components/HomePage/AboutSection';

function HomePage() {
  return (
    <>
      <div className="layout">
        <header className="section-row"><Header /></header>

        <section><HeroSection /></section>
        <section><SpecialsSection /></section>
        {/*<section className="section-row"><TestimonialSection /></section>
        <section className="section-row"><AboutSection /></section>*/}

        <footer className="section-row"><Footer /></footer>
      </div>
    </>
  );
}

export default HomePage;
