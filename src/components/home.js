import React from 'react'
import './home.css'

class Home extends React.Component
{
    render()
    {
        return (
               <div className ="imgcontainer">
                    <img src={require('../pics/1.jpg')} alt="pic" />
                    <h1 style={{ fontSize: '400%' }} className="centered">PU Health Care Centre</h1>
                    <p className="centeredl1">Over Five thousand employees of the University and their families including widows,</p>
                    <p className="centeredl2">mothers and children are entitled to free medical treatment.</p>
               </div>
        );
    }
}

export default Home;