import './App.css'
import { ListItems } from './components/list/listItems';
import BookStore from './data/booklist'
const App: React.FC = () => {
  const _AddHandler = (): any => {

  }

  const _EditHandler = (): any => {

  }
  return (
    <div className="App">
      <h1>My Book Store</h1>
      <button  color="success" onClick={_AddHandler()}>Add</button>
      <button  color="warning" onClick={_EditHandler()}>Edit</button>
      <ListItems items={BookStore} />
    </div>
  );
}

export default App;
