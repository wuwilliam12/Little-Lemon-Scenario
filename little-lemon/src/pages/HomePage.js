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
        <header className="sec-row-l"><Header /></header>

        <section className="sec-row-ul"><HeroSection /></section>
        <section className="sec-row-l"><SpecialsSection /></section>
        <section className="sec-row-l"><TestimonialSection /></section>
        <section className="sec-row-ul"><AboutSection /></section>

        <footer className="sec-row-l"><Footer /></footer>
      </div>
    </>
  );
}

export default HomePage;
