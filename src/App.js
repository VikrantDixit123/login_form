import React from 'react';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Login'
    }
  }

  changeButtonContent1 = () => {
    this.setState({ value: 'Logout' });
  }
  changeButtonContent2 = () => {
    this.setState({ value: 'Login' });
  }

  render() {
    return (
      <div className="App">
        <Login
          value={this.state.value}
          onClick1={this.changeButtonContent1}
          onClick2={this.changeButtonContent2}
        />
      </div>
    );
  }
}

export default App;
