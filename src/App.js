import './App.css';
import React from 'react';
import ToDolist from './components/TodoList/TodoList'
import CustomFooter from './components/footer/CustomFooter';
import CustomHeader from './components/header/CustomHeader';

function App() {
  return (
    <div className="App">
      <CustomHeader/>
      <ToDolist/>
      <CustomFooter/>
    </div>
  );
}

export default App;
