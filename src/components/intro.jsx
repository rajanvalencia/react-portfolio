import React, { Fragment, useEffect, useState } from "react";
import "./stars.scss";
import Typed from "react-typed";
import logo1 from "../img/rajanvalencia.JPG";
import multiyouthWhiteLogo from "../img/white_logo_transparent_background.png";
import multiyouthMainLogo from "../img/logo_transparent_background.png";

export default function Intro() {

  const [isMouseOnEnter, setIsMouseOnEnter] = useState(false);

  const [start, setStart] = useState({
    MultiYouthCEO_English: true,
    MultiYouthCEO_Japanese: true,
    FullstackWebDeveloper_English: false,
    FullstackWebDeveloper_Japanese: false,
    TheMulticulturalYouthProjectDeputyRepesentative_English: false,
    TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false
  });

  const [complete, setComplete] = useState({
    MultiYouthCEO_English: false,
    MultiYouthCEO_Japanese: false,
    FullstackWebDeveloper_English: false,
    FullstackWebDeveloper_Japanese: false,
    TheMulticulturalYouthProjectDeputyRepesentative_English: false,
    TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false
  });

  useEffect(() => {
    async function handle() {
      await setTimeout(handleOnComplete, 1000);
    }
    handle();
  }, [complete]);

  const handleOnComplete = () => {
    if (complete.MultiYouthCEO_English && complete.MultiYouthCEO_Japanese) {
      setStart({
        ...start,
        MultiYouthCEO_English: false,
        MultiYouthCEO_Japanese: false,
        FullstackWebDeveloper_English: true,
        FullstackWebDeveloper_Japanese: true
      });
      setComplete({
        ...complete,
        MultiYouthCEO_English: false,
        MultiYouthCEO_Japanese: false
      });
    }

    if (complete.FullstackWebDeveloper_English && complete.FullstackWebDeveloper_Japanese) {
      setStart({
        ...start,
        FullstackWebDeveloper_English: false,
        FullstackWebDeveloper_Japanese: false,
        TheMulticulturalYouthProjectDeputyRepesentative_English: true,
        TheMulticulturalYouthProjectDeputyRepesentative_Japanese: true
      });
      setComplete({
        ...complete,
        FullstackWebDeveloper_English: false,
        FullstackWebDeveloper_Japanese: false
      });
    }

    if (complete.TheMulticulturalYouthProjectDeputyRepesentative_English && complete.TheMulticulturalYouthProjectDeputyRepesentative_Japanese) {
      setStart({
        ...start,
        TheMulticulturalYouthProjectDeputyRepesentative_English: false,
        TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false,
        MultiYouthCEO_English: true,
        MultiYouthCEO_Japanese: true
      });
      setComplete({
        ...complete,
        TheMulticulturalYouthProjectDeputyRepesentative_English: false,
        TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false
      })
    }
  }


  const onMouseEnter = () => {
    setIsMouseOnEnter(true);
  }

  const onMouseLeave = () => {
    setIsMouseOnEnter(false);
  }

  const onMultiYouthCEO_EnglishComplete = () => {
    setComplete({
      ...complete,
      MultiYouthCEO_English: true
    });
  }

  const onMultiYouthCEO_JapaneseComplete = () => {
    setComplete({
      ...complete,
      MultiYouthCEO_Japanese: true
    });
  }

  const onFullstackWebDeveloper_EnglishComplete = () => {
    setComplete({
      ...complete,
      FullstackWebDeveloper_English: true
    });
  }

  const onFullstackWebDeveloper_JapaneseComplete = () => {
    setComplete({
      ...complete,
      FullstackWebDeveloper_Japanese: true
    });
  }

  const onTheMulticulturalYouthProjectDeputyRepesentative_EnglishComplete = () => {
    setComplete({
      ...complete,
      TheMulticulturalYouthProjectDeputyRepesentative_English: true
    });
  }

  const onTheMulticulturalYouthProjectDeputyRepesentative_JapaneseComplete = () => {
    setComplete({
      ...complete,
      TheMulticulturalYouthProjectDeputyRepesentative_Japanese: true
    });
  }

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
                {start.MultiYouthCEO_English && start.MultiYouthCEO_Japanese ?
                  <Fragment>
                    <Typed
                      strings={[
                        "MultiYouth Founder ・ CEO"
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={50}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onMultiYouthCEO_EnglishComplete}
                    />
                    <br />
                    <Typed
                      strings={[
                        "MultiYouth 創立者 ・ 最高経営責任者",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={50}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onMultiYouthCEO_JapaneseComplete}
                    />
                  </Fragment>
                  : null
                }
                {start.FullstackWebDeveloper_English && start.FullstackWebDeveloper_Japanese ?
                  <Fragment>
                    <Typed
                      strings={[
                        "Full Stack Web Developer",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={40}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onFullstackWebDeveloper_EnglishComplete}
                    />
                    <br />
                    <Typed
                      strings={[
                        "フルスタックエンジニア",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={90}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onFullstackWebDeveloper_JapaneseComplete}
                    />
                  </Fragment>
                  :
                  null
                }
                {start.TheMulticulturalYouthProjectDeputyRepesentative_English && start.TheMulticulturalYouthProjectDeputyRepesentative_Japanese ?
                  <Fragment>
                    <Typed
                      strings={[
                        "The Multicultural Youth Project Deputy Representative"
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={20}
                      backDelay={1100}
                      backSpeed={90}
                      start={start.TheMulticulturalYouthProjectDeputyRepesentative_English}
                      onComplete={onTheMulticulturalYouthProjectDeputyRepesentative_EnglishComplete}
                    />
                    <br />
                    <Typed
                      strings={[
                        "多文化ユースプロジェクト副代表"
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={90}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onTheMulticulturalYouthProjectDeputyRepesentative_JapaneseComplete}
                    />
                  </Fragment>
                  :
                  null
                }
              </strong>
            </p>
            <div style={{ maxWidth: '400px', display: 'block', marginRight: 'auto', marginLeft: 'auto' }}>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://multiyouth.com"
                  role="button"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <img src={isMouseOnEnter ? multiyouthMainLogo : multiyouthWhiteLogo} width="100" style={{ borderRadius: '8px', marginRight: '10px' }} />
                    MultiYouth (近日公開)
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://multiyouth.com/en"
                  role="button"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <img src={isMouseOnEnter ? multiyouthMainLogo : multiyouthWhiteLogo} width="100" style={{ borderRadius: '8px', marginRight: '10px' }} />
                    MultiYouth (Coming soon)
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

