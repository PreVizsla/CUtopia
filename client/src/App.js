import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages';
import SignupSignin from './pages/SignupSignin'
import ForgetPassword from './pages/ForgetPassword'
import './App.css';
import VerificationSend from './pages/VerificationSend'
import FeedPage from './pages/FeedPage'
import SignUp from './pages/SignUpPageDetail'
import Profile from './pages/Profile'
import CUnity from './pages/CUnity'
import Events from './pages/Events'
import Jobs from './pages/Jobs'
import Chat from './pages/Chat'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Signup_signin" component={SignupSignin} exact />
        <Route path="/Forget_Password" component={ForgetPassword} exact />
        <Route path="/next" component={VerificationSend} exact />
        <Route path="/feed" component={FeedPage} exact />
        <Route path="/Signup" component={SignUp} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/cunity" component={CUnity} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/jobs" component={Jobs} exact />
        <Route path="/chat" component={Chat} exact />
      </Switch>
    </Router>
  );
}

export default App;
