class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        let loginSession =  sessionStorage.getItem("user");
        console.log(loginSession)
      this.innerHTML = `
    
      <nav class="navbar navbar-expand-lg  ">
      <div class="container-fluid d-flex justify-content-between ">
          <!-- logo -->
          <div class="logo-conatiner d-flex  align-items-center ">
              <a href="index.html" ><img src="./public/images/logo.jpg" class="img-thumbnail" width="80px" /> </a>
              <div class="logo-text">
                  <div class="main-text">
                      Institute of Art Design
                  </div>
                  <div class="sub-text">
                      World 1st Ranking Institute
                  </div>
              </div>
          </div>

          <!--  nav tabs  -->
          <ul class="navitem ">
              <li class="nav-item">
                  <a href="gallery.html"> Gallery </a>
              </li>
              <li class="nav-item">
                  <a href="about.html"> About </a>
              </li>
              <li class="nav-item">
                  ${
                      loginSession == null ? '<a href="login.html"> Login </a>' :loginSession +'<a href="logout.html"  class="logout"  > Logout </a>'
                  }
              </li>
          </ul>
      </div>
     
  </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);