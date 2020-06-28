import React from 'react'

class Register extends React.Component
{

    state = { phno:'', name:'', dept:'', desig:'', passwd:'' };

    renderOption = () =>{
        return (
            <div>
                <div className="ui container">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Phone Number</label>
                        <input type="number" value={this.state.phno} onChange={e=>this.setState({phno: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Department</label>
                        <input type="text" value={this.state.dept} onChange={e=>this.setState({dept: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Designation</label>
                        <input type="text" value={this.state.desig} onChange={e=>this.setState({desig: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" value={this.state.passwd} onChange={e=>this.setState({passwd: e.target.value})} />
                    </div>
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
                <hr/>
           </div>
            </div>
        );
    };

    render()
    {
        return (
            <div>
                {this.renderOption()};
            </div>
        );
    }
}

export default Register;