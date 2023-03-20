import logo from './logo.svg';
import './App.css';
import { LoginPage } from './screens/LoginPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ProfilePage } from './screens/ProfilePage';
import { SiderMenu } from './components/SiderMenu';



function App() {
  return (
    <div className="app">  
       {/* <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='sider'element={<SiderMenu/>}/>
        <Route path=':id' element={<ProfilePage/>}/>        
       </Routes> */}
    </div>
  );
}

export default App;
