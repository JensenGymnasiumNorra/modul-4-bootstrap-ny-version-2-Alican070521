 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil


 let header = document.querySelector("header");

 header.innerHTML = `
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="index.html">Min Media</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Movies
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="movies.html">All movies</a></li>
                <li><a class="dropdown-item" href="#">2000s</a></li>
                <li><a class="dropdown-item" href="#">1900s</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="series.html">Series</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="music.html">Music</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;