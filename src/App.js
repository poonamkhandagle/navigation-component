
import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [
  {
    title:"what is React?",
    content:"React is front end javascript framework"
  },
  {
    title:"why use react?",
    content:"react is favorite js library among engineers"
  },
  {
    title:"How do you use React?",
    content:"you use react by creating Component"
  }
]
const options = [
  {
    label:"The Color Red",
    value:"Red"
  },
  {
    label:"The Color Green",
    value:"Green"
  },
  {
    label:"A Shade Of Blue",
    value:"Blue"
  }
]

const showAccordion = () =>{
  if(window.location.pathname === "/"){
    return <Accordion items={items} />
  }
}
const showList = () =>{
  if(window.location.pathname === "/list"){
    return <Search />
  }
}

const showDropdown = () =>{
  if(window.location.pathname === "/Dropdown"){
    return <Dropdown options={options} />
  }
}

const showTranslate = () =>{
  if(window.location.pathname === "/Translate"){
    return <Translate />
  }
}
 const App = () => {
  return(
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
)
}
export default App;
