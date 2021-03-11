import React from "react";
import Link from "./Link";
const Header = () => {
   return(
     <div className = "ui secondary pointing menu">
     <Link href="/" className="item">Acccordion</Link>
      <Link href="/list" className="item">List</Link>
       <Link href="/Dropdown" className="item">Dropdown</Link>
        <Link href="/Translate" className="item">Translate</Link>
     </div>
   )
}
export default Header;
