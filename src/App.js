import Header from "./components/Header/Header"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Request from './helpers/request'
import { useState } from "react"
import Results from "./components/Results/Results"

const App = () => {
  const [selectedOption, setSelectedOption] = useState(Request.fetchTrending)
  
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={ selectedOption } />
    </div>
  )
}
export default App

