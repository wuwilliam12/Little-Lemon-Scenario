import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="layout">
        <header className="section-row"><Header /></header>
        <main><Main /></main>
        <footer className="section-row"><Footer /></footer>
      </div>
    </>
  );
}

export default App;
