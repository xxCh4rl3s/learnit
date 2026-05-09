class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="box maxw">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-6">
                    <img src="./resources/icon.png" alt="Learn IT logo" width="40" height="40">
                    <h1 class="m-0 fs-3 fs-md-1 header-text">
                        Learn IT
                    </h1>
                    <p class="text-dark">Home</p>
                </div>
                <div
                    class="col-6 text-end text-md-start d-flex justify-content-end justify-content-md-start align-items-center">
                    <nav class="navbar navbar-expand-md">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link info-btn-red" aria-current="page" href="./index.html">Home page</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link info-btn-blue" href="./html.html">HTML</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link info-btn-green" href="./cisco.html">Cisco Packet Tracer</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link info-btn-yellow" href="./python.html">Python</a>
                                    </li>
                                    <li class="nav-item" title="soon...">
                                        <a class="nav-link info-btn-gray disabled" href="#">Java</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>



    </header>
        `;
    }
}

customElements.define('nav-bar', Navbar);