import React from 'react';
import MyForm from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className="h1-text">Please enter your name and pick the Sectors you are currently involved in</p>
         <MyForm />
      </div>
       
    );
  }
}

export default App;