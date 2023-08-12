import React from 'react'
import abhishek_img from '../images/abhishek_img.jpeg'

export default function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={abhishek_img} alt="Abhishek" width={150} height={160} />
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Abhishek Tiwari</h5>
                <h6>Meerut</h6>
                <p className="profile-rating mt-3 mb-5">B.Tech-CSE <span>, GGSIPU</span> </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active bg-dark text-white" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row pt-2">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>SOCIAL MEDIA LINK</p>
                <a href="https://www.linkedin.com/in/abhishek-tiwari-36a718209/" target="_self" className="text-secondary text-decoration-none">Linkedin</a> <br />

                <a href="https://www.instagram.com/abhishek_code_art/" target="_self" className="text-secondary text-decoration-none">Instagram</a> <br />

                <a href="https://twitter.com/abhishek_8439_" target="_self" className="text-secondary text-decoration-none">Twitter</a> <br />

                <a href="https://www.facebook.com/profile.php?id=100054391483526" target="_self" className="text-secondary text-decoration-none">Facebook</a> <br />

                <a href="https://github.com/Abhishek-code-art" target="_self" className="text-secondary text-decoration-none">Github</a> <br />
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="text-secondary">Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p className="text-primary">Fresher</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="text-secondary">Name</label>
                      </div>
                      <div className="col-md-6">
                        <p className="text-primary">Abhishek Tiwari</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="text-secondary">Email</label>
                      </div>
                      <div className="col-md-6">
                        <p className="text-primary">abhishek@gmail.com</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="text-secondary">Skills</label>
                      </div>
                      <div className="col-md-6">
                        <p className="text-primary">Java, Python, C, Web Development</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="text-secondary">Role</label>
                      </div>
                      <div className="col-md-6">
                        <p className="text-primary">Software Engineer, Web Developer</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}