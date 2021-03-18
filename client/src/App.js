import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages';
import SignupSignin from './pages/SignupSignin'
import ForgetPassword from './pages/ForgetPassword'
import './App.css';
import VerificationSend from './pages/VerificationSend'
import FeedPage from './pages/FeedPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Signup_signin" component={SignupSignin} exact />
        <Route path="/Forget_Password" component={ForgetPassword} exact />
        <Route path="/next" component={VerificationSend} exact />
        <Route path="/FeedPage" component={FeedPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
