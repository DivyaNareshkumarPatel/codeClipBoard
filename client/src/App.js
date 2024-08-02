import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CodeMirrorEditor from './pages/CodeMirrorEditor';
import ProfilePage from './pages/ProfilePic';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<CodeMirrorEditor/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}
