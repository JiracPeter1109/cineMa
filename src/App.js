import './App.css';
import { Allrouter } from './routers/Allrouter'
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Allrouter/>
      <Footer/>
    </div>
  );
}

export default App;
