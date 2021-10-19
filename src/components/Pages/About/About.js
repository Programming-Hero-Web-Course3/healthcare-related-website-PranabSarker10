import React from 'react';
import img1 from '../../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../../images/architecture-building-city-2047397.png'
import img3 from '../../../images/chef-cook-food-33614.png'
import './About.css'

const About = () => {
    return (
        <div className="container text-start">
            <div>
                <h4>Medical Equipment & Kit</h4>
                <div>
                <small>
                Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review. Even if you can't afford to travel the world, you can take your children to the museum, zoo or local park. And don't be afraid to take them to grown-up spots.
                </small>
                </div>
                <img src="https://www.mpnrc.org/wp-content/uploads/2021/05/Covidself-kit.png" alt="" width="1100" height="400"></img>
            </div>
            <div className="row">
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img1} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-car"></i>
                        </div>
                        <div>
                            <h5>Fast Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="far fa-bell"></i>

                        </div>
                        <div>
                            <h5>A good auto responder</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more</a> <button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img2} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div>
                            <h5>Home Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img1} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-car"></i>
                        </div>
                        <div>
                            <h5>Fast Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="far fa-bell"></i>

                        </div>
                        <div>
                            <h5>A good auto responder</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more</a> <button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img2} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div>
                            <h5>Home Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img1} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-car"></i>
                        </div>
                        <div>
                            <h5>Fast Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="far fa-bell"></i>

                        </div>
                        <div>
                            <h5>A good auto responder</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more</a> <button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img2} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div>
                            <h5>Home Service</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;