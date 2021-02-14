import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Software Engineer-intern at Sysco LABS</a> <span>2021-03 to Present</span></h2>
                        <p>I work as a full-stack develper at Sysco LABS Sri Lanka. Technologies: React, AWS, Java SpringBoot</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Former Software Engineer-intern at WSO2</a> <span>2019-08 to 2021-03</span></h2>
                        <p>I have developed the WSO2 expenses claims app and WSO2 OPD claims app. Technologies: React, Ballerina, MySQL, Java, python, OAuth1, Tomacat server</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Former Part-time Software Engineer at Electrobeam</a> <span>2019-06 to 20210-01</span></h2>
                        <p>I contibuted in developing Udinate.com, Udinate mobile app and taxco.ca websites and moblie application. Technologies: Angular, React, React-native, MEAN-Stack, MERN-stack, AWS, Serverless-stack, MySQL</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Research Student at Shibaura Institute of Technology, Tokyo, Japan</a> <span>2020</span></h2>
                        <p>I have participated to an image processing and a Robotic workshop at Tokyo, Japan by representing university as a research student.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Bsc. (Hons) in Information Technology at University of Moratuwa</a> <span>2015-2021</span></h2>
                        <p>I have completed my degree in Information Technology(Hons) at faculty of Information Technology.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Primary and Higher Education</a> <span>2001-2014</span></h2>
                        <p>I have completed my Advanced Level Examination with Mathematics, Physics and Chemistry.During schooling I became the Assistant Head Prefect, became a member of many shool socieies incuiding Rotery club, Interact Club, English society, scout club etc. and sport teams, including crircet team, chess team and wushu/boxing team </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
