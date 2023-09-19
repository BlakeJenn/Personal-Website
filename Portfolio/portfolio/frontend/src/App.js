// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import AddComposerPageTable from './pages/AddComposerPageTable';
import EditComposerPageTable from './pages/EditComposerPageTable';
//import Products from './data/products.js'
import HomePage from './pages/HomePage.js';
import TopicPage from './pages/TopicsPage.js';
import ComposersPage from './pages/ComposersPage.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [composer, setComposerToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>
            Blake <FaMusic /> Jennings</h1>
            <p>My Personal Website</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<AddComposerPageTable />} /> 
                    <Route path="/topics" element={<TopicPage />} /> 
                    <Route path="/composers" element={<ComposersPage setComposer={setComposerToEdit}/>} /> 
                    <Route path="/update" element={<EditComposerPageTable composerToEdit={composer}/>} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy;2023 Blake Jennings</p>
          </footer>

      </BrowserRouter>
    </>
  );
}


export default App;