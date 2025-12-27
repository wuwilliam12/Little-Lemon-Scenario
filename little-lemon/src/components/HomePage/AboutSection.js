import './AboutSection.css'

import About1 from '../../icons_assets/Mario and Adrian A.jpg';
import About2 from '../../icons_assets/Mario and Adrian b.jpg';

function About() {
  return (
    <>
      <div className="about-section sec-row-ul">
        <div className="about-content sec-row-l">
          <div className="about-text">
            <h2 className="text-display-title">Little Lemon</h2>
            <h3 className='text-subtitle'>Chicago</h3>
            <p className='text-lead'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="about-images">
            <img src={About1} alt="About 1" className="about-1" />
            <img src={About2} alt="About 2" className="about-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;