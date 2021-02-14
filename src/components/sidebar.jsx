import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/profile.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Charuka Herath</a></h1>
              <span className="email"><i className="icon-mail"></i> charuka09@gmail.com</span>
              <span className="number"><i className="icon-phone"></i> +94-77-5543-531</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul id="menu">
                <li><a href="https://www.facebook.com/charuka.herath.9" target="_blank"><i className="icon-facebook2" /></a></li>
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank"><i className="icon-twitter2" /></a></li> */}
                <li><a href="" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/charuka-herath" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Charuka09" target="_blank"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@charuka95" target="_blank"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                  Automated deployment on gh-pages using Travis-CI
              </small></p>
            </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
