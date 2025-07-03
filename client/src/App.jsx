 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InputField from './components/InputField'

function App() {
  

  return (
    <BrowserRouter>
    <InputField label="check" />
     <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<ChatPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
 