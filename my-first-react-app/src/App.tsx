import { useState } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './Header.tsx'

function App() {
  

  return (
    <div>
      <Header />
    </div>
   
  )
}
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if container is not null
root.render(<App />);

export default App
