import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import logo1 from "../img/rajanvalencia.JPG";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <img
                src={logo1}
                alt="logo"
                style={{ maxWidth: "80px", borderRadius: '50%' }}
              />
              <h2 className="intro-title mb-4">Yamazaki Rajan Valencia</h2>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Multiyouth CEO",
                      "Full-stack Web Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                  <br />
                  <Typed
                    strings={[
                      "マルチユース CEO",
                      "フルスタックエンジニア"
                    ]}
                    typeSpeed={150}
                    backDelay={1100}
                    backSpeed={50}
                    loop
                  />
                </strong>
              </p>
              <div style={{ maxWidth: '400px', display: 'block', marginRight: 'auto', marginLeft: 'auto' }}>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://multiyouth.com"
                    role="button"
                  >
                    MultiYouth
                </a>
                </p>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://multiyouth.com/multiculturalyouth"
                    role="button"
                  >
                    多文化ユースプロジェクト
                </a>
                </p>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://github.com/rajanvalencia"
                    role="button"
                  >
                    Github
                </a>
                </p>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://instagram.com/instagram"
                    role="button"
                  >
                    Instagram
                </a>
                </p>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://facebook.com/rajanvalencia"
                    role="button"
                  >
                    Facebook
                </a>
                </p>
                <p className="pt-1">
                  <a
                    className="btn btn-outline-light btn btn-block js-scroll px-4"
                    href="http://twitter.com/rajanvalencia"
                    role="button"
                  >
                    Twitter
                </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
