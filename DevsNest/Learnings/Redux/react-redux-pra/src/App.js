import { Provider } from 'react-redux';
import './App.css';
import MangoCo from './components/MangoCo';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MangoCo />
      </div>

    </Provider>
  );
}

export default App;
