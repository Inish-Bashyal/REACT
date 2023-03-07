import Home from "./pages/home/Home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
    <TopBar/>

    <Switch>
      
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>

        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>

        <Route path="/settings">
        {user ? <Setting /> : <Register />}
        </Route>

        <Route path="/post">
          <Single />
        </Route>

    </Switch>
    </Router>
  );
}

export default App;
