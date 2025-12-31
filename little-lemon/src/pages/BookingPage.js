import './BookingPage.css';

import Header from '../components/Nav/Header';
import Footer from '../components/Footer/Footer';

import BookingForm from '../components/BookingPage/BookingForm';

function BookingPage() {
  return (
    <>
      <div className="layout">
        <header className="sec-row-l"><Header /></header>

        <section className="sec-row-l"><BookingForm /></section>

        <footer className="sec-row-l"><Footer /></footer>
      </div>
    </>
  );
}

export default BookingPage;