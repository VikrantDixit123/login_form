import React from 'react';
// import App from './App'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            SurName: ''
        };
    }
    render() {
        if (this.props.value === 'Login') {
            return (
                <div>
                    <form>
                        <label>Name: </label>
                        <input type='text' placeholder='Enter first name' />
                        <br></br>
                        <label>Surname: </label>
                        <input type='text' placeholder='Enter surname name' />
                        <br></br>
                        <button type='Button' onClick={this.props.onClick1}>{this.props.value}</button>
                    </form>
                </div>

            );
        } else if (this.props.value === 'Logout') {
            return (
                <div>
                    <p>
                        You have just logged in....
                    </p>
                    <button type='button' onClick={this.props.onClick2}>{this.props.value}</button>
                </div>
            )
        }


    }


}