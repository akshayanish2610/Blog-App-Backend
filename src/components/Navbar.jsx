import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Blog App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/add">Add Post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/post">My POst</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">View All</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<br></br>
    </div>
  )
}

export default Navbar