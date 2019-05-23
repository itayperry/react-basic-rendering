import React from 'react';
import './App.css';
import PopularLanguages from './PopularLanguages';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTrashAlt)

function App() {
  return (
    <div className="App">
      <PopularLanguages/>
    </div>
  );
}

export default App;
