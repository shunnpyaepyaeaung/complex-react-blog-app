import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import About from './components/About';
import Terms from './components/Terms';

function Main() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <HomeGuest/>
                    </Route>
                    <Route path="/about-us">
                        <About/>
                    </Route>
                    <Route path="/terms">
                        <Terms/>
                    </Route>
                </Switch>
                <Footer/> 
            </div>

        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.querySelector('#app'))

if (module.hot) {
    module.hot.accept()
}