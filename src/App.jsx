import './App.css';
import ItemListConteiner from './components/ItemList/ItemListConteiner';
import NavBar from  './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
       
        
        <ItemListConteiner/>
        </header>
    </div>
  );
}

export default App;
