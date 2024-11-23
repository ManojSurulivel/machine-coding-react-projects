//App.js
import React from 'react'
import TodoComponent from './Projects/Todo/redux/TodoComponent.js'

const App = () => {
  return (
    <div>
      <TodoComponent />
    </div>
  )
}
export default App;


//index.js
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import {store} from '../src/Projects/Todo/redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)