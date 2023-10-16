import { Routers, Route, Link } from 'react-router-dom';
import { register } from './pages/register';

const App = () => <div className="App">
    <Router>
        <div>
            <Route exact path="/register" Component={<register/>} />
        </div>
    </Router>
    </div>
