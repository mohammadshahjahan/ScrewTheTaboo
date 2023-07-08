import React from 'react'
import Navbar from './components/Navbar'
import TodoList from "./components/TodoList";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Link to="/notes" />
        <Link to="/aboutUs" />
        <Switch>
          <Route path="/notes" Component={TodoList}>
            <TodoList />
          </Route>
          <div>Calender</div>
          <div>FAQs</div>
          <div>Notes</div>
          <div>About Us!</div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App