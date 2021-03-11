
import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
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

const App = () => {
  const [selected,setSelected] = useState(options[0]);
  return(
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/Dropdown">
        <Dropdown label="select a color"
          options={options}
          selected={selected}
          onselectedChange={setSelected} />
      </Route>

      <Route path="/Translate">
        <Translate />
      </Route>
    </div>
  )
}
export default App;
