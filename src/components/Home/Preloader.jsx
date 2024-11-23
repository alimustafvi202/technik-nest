import React from "react";
import "./styles.css"; // Ensure you import any required CSS

const Preloader = () => {
    return (
        <div id="preloader">
            {/* Digimax Preloader */}
            <div id="digimax-preloader" className="digimax-preloader">
                {/* Preloader Animation */}
                <div className="preloader-animation">
                    {/* Spinner */}
                    <div className="spinner"></div>
                    {/* Loader */}
                    <div className="loader">
                        <span data-text-preloader="T" className="animated-letters">T</span>
                        <span data-text-preloader="E" className="animated-letters">E</span>
                        <span data-text-preloader="C" className="animated-letters">C</span>
                        <span data-text-preloader="H" className="animated-letters">H</span>
                        <span data-text-preloader="N" className="animated-letters">N</span>
                        <span data-text-preloader="I" className="animated-letters">I</span>
                        <span data-text-preloader="K" className="animated-letters">K</span>
                        <span data-text-preloader="N" className="animated-letters">N</span>
                        <span data-text-preloader="E" className="animated-letters">E</span>
                        <span data-text-preloader="S" className="animated-letters">S</span>
                        <span data-text-preloader="T" className="animated-letters">T</span>
                    </div>
                    <p className="fw-5 text-center text-uppercase">Loading</p>
                </div>
                {/* Loader Animation */}
                <div className="loader-animation">
                    <div className="row h-100">
                        {/* Single Loader */}
                        <div className="col-3 single-loader p-0">
                            <div className="loader-bg"></div>
                        </div>
                        {/* Single Loader */}
                        <div className="col-3 single-loader p-0">
                            <div className="loader-bg"></div>
                        </div>
                        {/* Single Loader */}
                        <div className="col-3 single-loader p-0">
                            <div className="loader-bg"></div>
                        </div>
                        {/* Single Loader */}
                        <div className="col-3 single-loader p-0">
                            <div className="loader-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
