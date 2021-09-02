import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/post/Post";

function App() {
  const user = false;
  return (
    <Router>
       <TopBar />
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> { user ? <Home />:<Register />}
          </Route>
          <Route path="/login"> { user ? <Home />:<Login />}
          </Route>
          <Route path="/create"> { user ? <Create />:<Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
       
       
    </Router>
  );
}

export default App;
