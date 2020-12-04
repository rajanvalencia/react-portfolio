import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import logo1 from "../img/rajanvalencia.JPG";
import multiyouthLogo from "../img/white_logo_transparent_background.png";
import tabunkayouth from "../img/multiculturalyouth-image.png";

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
                style={{ maxWidth: "60px", borderRadius: '50%' }}
              />
              <h3 className="mb-4" style={{ color: '#fff' }}>Yamazaki Rajan Valencia</h3>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "MultiYouth CEO",
                      "Full-stack Web Developer",
                      "The Multicultural Youth Project Deputy Representative"
                    ]}
                    style={{ fontSize: '20px' }}
                    typeSpeed={30}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                  <br />
                  <Typed
                    strings={[
                      "マルチユース 最高経営責任者",
                      "フルスタックエンジニア",
                      "多文化ユースプロジェクト副代表"
                    ]}
                    style={{ fontSize: '20px' }}
                    typeSpeed={90}
                    backDelay={1100}
                    backSpeed={30}
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
                    <img src={multiyouthLogo} width="100" style={{ borderRadius: '8px', marginRight: '10px' }} />
                    MultiYouth (近日公開)
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
                    href="http://instagram.com/rajanvalencia"
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
