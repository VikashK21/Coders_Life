import './App.css';
// import CakeContainer from './components/CakeContainer';
import React from 'react';
// import { Provider } from "react-redux";
// import store from './redux/store';
import TimeComponent from './components/TimeComponent';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import ItemContainer from './components/ItemContainer';


function App() {

  return (
    // <Provider store={store}>
      <div className="App">
        <TimeComponent />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer /> */}
      </div>

    // </Provider>
  );
}

export default App;
