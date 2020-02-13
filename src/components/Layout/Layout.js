import React from "react";
import Aux from "../../hoc/Auxilary";
import  './layout.css'

const Layout = (props) => (
  <Aux>
    <div>ToolBar , SideDrawer , BackDrop</div>

    <div>
      <main className="Content" >
          {props.children}
     </main>
    </div>
  </Aux>
);
export default Layout;
