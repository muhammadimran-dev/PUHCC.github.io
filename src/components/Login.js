import React from 'react'
import './Login.css'
class Login extends React.Component
{
    state = { username: '', passwd: '', isLoggedIn:0 }

    onFormSubmit = async event => {
        event.preventDefault();
        //username, password check here
        if(this.state.username==='usama' && this.state.passwd==='masood')
        {
            await this.setState({ isLoggedIn: 1 });
            this.props.onReturnValue(this.state.isLoggedIn);
            this.props.history.push('/upload');
        }
    };

    render()
        {
            return (
                <div className="background ui container" >
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Username</label>
                            <input type="text" value={this.state.username} onChange={e=>this.setState({username: e.target.value})} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" value={this.state.passwd} onChange={e=>this.setState({passwd: e.target.value})} />
                        </div>
                        <button className="ui primary button" type="submit">Submit</button>
                    </form>
                    <hr/>
               </div>
            );
        }
}

export default Login;