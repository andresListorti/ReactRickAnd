import "./App.css";
import { Navbar } from './components/public/Navbar';   // Se importa asi con corchetes porque no es una classe es simplemente una const
import Main from "./components/public/Main";
import { Footer } from "./components/public/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      {/* ----------------------------------------------------------------------- */}
      <Main />
      {/* ------------------------------------------------------------------------- */}
      <Footer />
      

    </div>
  );
}

export default App;
