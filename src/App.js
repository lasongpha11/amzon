import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { db, auth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from './components/Login';
function App() {
// Json stringify - parse
  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
        let tempItems =[];

        tempItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data()
        }));
        setCartItems(tempItems);
    });
}

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

useEffect(() => {
  getCartItems();
}, []);

// console.log('user ne', user);



  return (
    <Router>
      {
        !user ?(
          <Login setUser={setUser} />
        ):(
          <div className="App">
            <Header signOut= {signOut} user={user} cartItems={cartItems} />

            <Switch>
              {/* <Route path="/login">
                <Login setUser={setUser} />
              </Route> */}
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            
            </Switch>
        </div>
        )
      }

    </Router>
  );
}

export default App;
