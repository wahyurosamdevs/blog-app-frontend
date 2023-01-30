import './App.css';
import Header from './layout/Header';
import {Route, Routes} from "react-router-dom";
import Layout from './layout/Layout';
import IndexPage from './page/IndexPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import { UserContextProvider } from './context/UserContext';
import CreatePost from './page/CreatePost';
import PostPage from './page/PostPage';
import EditPost from './page/EditPost';
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={'/'} element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} /> 
          <Route path='/register' element={<RegisterPage />} /> 
          <Route path='/create' element={<CreatePost />} /> 
          <Route path='/post/:id' element={<PostPage />} /> 
          <Route path='/edit/:id' element={<EditPost />} /> 
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
