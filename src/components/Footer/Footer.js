import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div>
            <footer id="footer" class="footer-1">
                <div class="main-footer widgets-dark typo-light">
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="widget subscribe no-box">
                                    <h5 class="widget-title">Best Cheff<span></span></h5>
                                    <p>A cooking school is an institution devoted to education in the art and science of cooking and food preparation. ... Many programs include practical experience in the kitchen of a restaurant attached to the school or a period of work experience in a privately owned restaurant. </p>
                                </div>
                            </div>


                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Quick Links<span></span></h5>
                                    <ul class="thumbnail-widget">
                                        <li>
                                            <div class="thumb-content"><a href="#.">&nbsp;Get Started</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">&nbsp;Top Leaders</a></div>
                                        </li>

                                    </ul>
                                </div>
                            </div>




                            <br />
                            <br />


                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="widget no-box">
                                    <h5 class="widget-title">Contact Us<span></span></h5>
                                    <p>Feel Free Contact Us For More Details</p>
                                    <div class="emailfield">
                                        <input type="text" name="email" value="Email" />
                                        <input name="uri" type="hidden" value="arabiantheme" />
                                        <input name="loc" type="hidden" value="en_US" />
                                        <input class="submitbutton ripplelink" type="submit" value="Subscribe" />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="footer-copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <p>Copyright Design Bondhon Das © 2021. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>

    );
};

export default Footer;