import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import PostForm from './pages/PostForm/PostForm';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from   './components/Profile/Profile'
const App = () => {
  return (
    <div className="App">
      <Header />
        <div className="content-wrapper">
      <Routes>  
        <Route path="/" element={<Main />} />
        <Route path="/createpost" element={<PostForm />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>  
      {/* <Sidebar /> */}
        </div>  
      <Footer />
    </div>
  );
}

export default App;
