
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="App">
    //   HomePage
    // </div>
    // <>
    //   <header>
    //     {/* Logo and primary banner elements go here */}
    //   </header>
    //   <nav>
    //     {/* Navigation links go here */}
    //   </nav>
    //   <main>
    //     {/* Main page content goes here */}
    //     HomePage
    //   </main>
    //   <footer>
    //     {/* Copyright, legal links, and secondary info go here */}
    //   </footer>
    // </>
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
