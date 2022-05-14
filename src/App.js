import { BrowserRouter, Switch, Route } from "react-router-dom";
import BanksContainer from "./components/BanksContainer";

const Home = () => {
    return <h1> Home </h1>
}

const App = () => {
    return ( <BrowserRouter >
        <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path= "/all-banks" component = {BanksContainer}/>
        </Switch> 
        </BrowserRouter>
    );
}

export default App;