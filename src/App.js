import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import NavBar from './NavBar';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';

const router=createBrowserRouter([
{ path: '/',
element: <div>
<NavBar></NavBar>
<div className="App">
<Sidebar/>
<Feed/>
<Widgets/>
</div>
</div>, 
},
{
  path: 'login',
  element: <LoginPage></LoginPage>
},
{
  path: 'Signup',
  element: <SignUpPage></SignUpPage>
}

])
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
