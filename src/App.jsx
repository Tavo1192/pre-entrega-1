import './App.css';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import ItemListConteiner from './components/ItemList/ItemListConteiner';
import NavBar from  './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        {/* <ItemListConteiner/> */}
        <ItemDetailContainer/>
        </header>
    </div>
  );
}

export default App;
