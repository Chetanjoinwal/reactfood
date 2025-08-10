import React from 'react';

const About = () => {
  return (
    <>
      {/* <Innerbanner /> */}
      <section id="about" className="about section">
        <div
          className="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>
            About Us
            <br />
          </h2>
          <p>
            <span>Learn More</span> <span className="description-title">About Us</span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-7 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/images/about.jpg"
                className="img-fluid mb-4"
                alt="about image"
              />
              <div className="book-a-table">
                <h3>Book a Table</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div
              className="col-lg-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>{' '}
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>{' '}
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>{' '}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident
                </p>

                <div className="position-relative mt-4">
                  <img src="/images/about2.jpg" className="img-fluid" alt="" />
                  {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="../../public/images/about-img.png" alt="about image 2" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Feane</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you
                  need to be sure there isn't anything embarrassing hidden in the
                  middle of text. All
                </p>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
