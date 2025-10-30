import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="layout">
        <div className="headerRow"><Header /></div>
        <div className="mainRow"><Main /></div>
        <div className="footerRow"><Footer  /></div>
      </div>
    </>
  );
}

export default App;
