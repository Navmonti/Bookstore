import './App.css'
import { ListItems } from './components/list/listItems';
import BookStore from './data/booklist'
const App: React.FC = () => {
  const _AddHandler = (): any => {
    alert("Add Button presses")
  }

  const _EditHandler = (): any => {
    alert("Edit Button presses")
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Navmonti BookStore</h1>
      </div>
      <div className='content'>
        <div className='btn-bar'>
          <button className='btn-success btn' onClick={() => _AddHandler()}>Add</button>
          <button className='btn-warning btn' onClick={() => _EditHandler()}>Edit</button>
        </div>
        <ListItems items={BookStore} />
      </div> 
    </div>
  );
}

export default App;
