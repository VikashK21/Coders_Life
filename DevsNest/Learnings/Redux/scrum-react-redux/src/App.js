import { Provider } from 'react-redux';
import './App.css';
import MangoCom from './components/MangoCom';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MangoCom />
      </div>
    </Provider>
  );
}

export default App;
