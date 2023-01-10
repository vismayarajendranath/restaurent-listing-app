import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurentlist from './Components/Restaurentlist';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ViewRestaurent from './Components/ViewRestaurent'

function App() {
  return (
    <div className="App">
     <Router>
     <header className="App-header">
        <Header/>
        <Routes>
          <Route path='/' element={<Restaurentlist/>} />
          <Route path='view-restaurent/:id' element={<ViewRestaurent/>} />

        </Routes>

      </header>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
