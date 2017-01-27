// import react
import React from "react";

import NavigationBar from "./NavigationBar";

// export default
// can export an arrow func
class App extends React.Component {
  
  //test
  //console.log("src map");

  // this is main app
  // has a nav bar for home, signup, etc..............
  render() {
    return (
      <div className="container">
        <NavigationBar />
        { this.props.children }
      </div>
    );
  }
  
}

export default App;
