import React, {useState} from "react" 
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

// react router
import{BrowserRouter as Router, Switch, Route} from "react-router-dom"

// toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

// firebase
import firebase from "firebase/app"
import "firebase/auth"

// pages
import Home from "./pages/Home"
import SignUp from "./pages/Sgnup"
import SignIn from "./pages/Signin"
import Pagenotfound from "./pages/pagentfound"

import { UserContext } from "./component/usercontex"
import Footer from "./layout/foter"
import Header from "./layout/Header"

// init firebase
import firebaseConfig from "./firebase/configfirebase"
firebase.initializeApp(firebaseConfig)

const App = () =>{
    const [user , setUser] = useState(null)

    return(
        <Router>
            <ToastContainer/>
                <UserContext.Provider value = {{user, setUser}}>
                    <Header/>
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="*" component={Pagenotfound} />
                    </Switch>
                    
                    <Footer/>
                </UserContext.Provider>
        </Router>
    );
};
export default App