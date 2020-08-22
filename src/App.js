import React from 'react';
import Config from './config';

import './fontawesome';

import Header from './Components/header';
import Editor from './Components/editor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Config.languages[0]
    }
  }

  render() {
    return (
      <div className="bg-blue-400 flex flex-col h-screen">
        <Header />
        <Editor />
      </div>
    );
  }
}

export default App;
