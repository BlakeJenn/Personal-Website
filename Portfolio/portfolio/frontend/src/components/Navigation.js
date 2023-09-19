import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/composers">Composers</Link>
        <Link to="/topics">Topics</Link>
    </nav>
  );
}

export default Nav;
