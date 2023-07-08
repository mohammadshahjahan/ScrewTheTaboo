import React from 'react'
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList";
import Rewards from "./components/Rewards";
import Calendar from "./components/Calendar";
import FAQ from "./components/FAQ";
import Rew from './components/Rew';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Rew/>
      <Rewards/>
      <Calendar/>
      <TodoList/>
      <FAQ/>
    </div>
  )
}

export default App