import React from 'react'
import Login from './Login'
import Register from './Register'
import Home from './home';
import Header from '../Header'
import About from './About'
import ReportUpload from './ReportUpload'
import Successful from './Successful'
import { BrowserRouter, Route } from 'react-router-dom';

var isLogged = 0;
class App extends React.Component
{
    onSearchSubmit = (isLoggedIn) => {
        isLogged = isLoggedIn;
    };

    render()
    {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' render={(props)=> <Login {...props} onReturnValue={this.onSearchSubmit}/>}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path="/upload" render={(props)=> <ReportUpload {...props} status={isLogged} /> }></Route>
                        <Route path="/successful" component={Successful}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;