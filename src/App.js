import React from 'react'
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList";
import Rewards from "./components/Rewards";
import Calendar from "./components/Calendar";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Rewards/>
      <Calendar/>
      <TodoList/>
      <FAQ/>
    </div>
  )
}

export default App