import React from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';

import App from '../component/App';
import Home from '../component/Home';
import About from '../component/About';
import NotFound from '../component/NotFound';

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="*" component={NotFound} />
            </Route>

        </Router>
    );
};

export default Routes;