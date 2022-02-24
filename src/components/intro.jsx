import React, { Fragment, useEffect, useState } from "react";
import "./stars.scss";
import Typed from "react-typed";
import multiyouthWhiteLogo from "../img/white_logo_transparent_background.png";
import multiyouthMainLogo from "../img/logo_transparent_background.png";

export default function Intro() {

  const [isMouseOnEnter, setIsMouseOnEnter] = useState(false);

  const [start, setStart] = useState({
    MultiYouthDeveloper_English: true,
    MultiYouthDeveloper_Japanese: true,
    SoftwareDeveloper_English: true,
    SoftwareDeveloper_Japanese: true,
    TheMulticulturalYouthProjectDeputyRepesentative_English: false,
    TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false
  });

  const [complete, setComplete] = useState({
    MultiYouthDeveloper_English: false,
    MultiYouthDeveloper_Japanese: false,
    SoftwareDeveloper_English: false,
    SoftwareDeveloper_Japanese: false,
    TheMulticulturalYouthProjectDeputyRepesentative_English: false,
    TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false
  });

  useEffect(() => {
    async function handle() {
      await setTimeout(handleOnComplete, 1000);
    }
    handle();
    // eslint-disable-next-line
  }, [complete]);

  const handleOnComplete = () => {
    if (complete.MultiYouthDeveloper_English && complete.MultiYouthDeveloper_Japanese) {
      setStart({
        ...start,
        MultiYouthDeveloper_English: false,
        MultiYouthDeveloper_Japanese: false,
        SoftwareDeveloper_English: true,
        SoftwareDeveloper_Japanese: true
      });
      setComplete({
        ...complete,
        MultiYouthDeveloper_English: false,
        MultiYouthDeveloper_Japanese: false
      });
    }

    if (complete.SoftwareDeveloper_English && complete.SoftwareDeveloper_Japanese) {
      setStart({
        ...start,
        SoftwareDeveloper_English: false,
        SoftwareDeveloper_Japanese: false,
        TheMulticulturalYouthProjectDeputyRepesentative_English: true,
        TheMulticulturalYouthProjectDeputyRepesentative_Japanese: true
      });
      setComplete({
        ...complete,
        SoftwareDeveloper_English: false,
        SoftwareDeveloper_Japanese: false
      });
    }

    if (complete.TheMulticulturalYouthProjectDeputyRepesentative_English && complete.TheMulticulturalYouthProjectDeputyRepesentative_Japanese) {
      setStart({
        ...start,
        TheMulticulturalYouthProjectDeputyRepesentative_English: false,
        TheMulticulturalYouthProjectDeputyRepesentative_Japanese: false,
        // MultiYouthDeveloper_English: true,
        // MultiYouthDeveloper_Japanese: true,
        SoftwareDeveloper_English: true,
        SoftwareDeveloper_Japanese: true,
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

  const onMultiYouthDeveloper_EnglishComplete = () => {
    setComplete({
      ...complete,
      MultiYouthDeveloper_English: true
    });
  }

  const onMultiYouthDeveloper_JapaneseComplete = () => {
    setComplete({
      ...complete,
      MultiYouthDeveloper_Japanese: true
    });
  }

  const onSoftwareDeveloper_EnglishComplete = () => {
    setComplete({
      ...complete,
      SoftwareDeveloper_English: true
    });
  }

  const onSoftwareDeveloper_JapaneseComplete = () => {
    setComplete({
      ...complete,
      SoftwareDeveloper_Japanese: true
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
            <h3 className="mb-2">Yamazaki Rajan Valencia</h3>
            <h3 className="mb-5">山崎 ラジャン バレンシア</h3>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
              {start.SoftwareDeveloper_English && start.SoftwareDeveloper_Japanese &&
                  <Fragment>
                    <Typed
                      strings={[
                        "Software Developer",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={40}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onSoftwareDeveloper_EnglishComplete}
                    />
                    <br />
                    <Typed
                      strings={[
                        "ソフトウェアエンジニア",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={65}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onSoftwareDeveloper_JapaneseComplete}
                    />
                  </Fragment>
                }
                {/* {start.MultiYouthDeveloper_English && start.MultiYouthDeveloper_Japanese &&
                  <Fragment>
                    <Typed
                      strings={[
                        "MultiYouth Developer"
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={30}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onMultiYouthDeveloper_EnglishComplete}
                    />
                    <br />
                    <Typed
                      strings={[
                        "MultiYouth 開発者",
                      ]}
                      style={{ fontSize: '20px' }}
                      typeSpeed={50}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onMultiYouthDeveloper_JapaneseComplete}
                    />
                  </Fragment>
                } */}
                {start.TheMulticulturalYouthProjectDeputyRepesentative_English && start.TheMulticulturalYouthProjectDeputyRepesentative_Japanese &&
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
                      typeSpeed={83}
                      backDelay={1100}
                      backSpeed={90}
                      onComplete={onTheMulticulturalYouthProjectDeputyRepesentative_JapaneseComplete}
                    />
                  </Fragment>
                }
              </strong>
            </p>
            <div style={{ maxWidth: '400px', display: 'block', marginRight: 'auto', marginLeft: 'auto' }}>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://multiyouth.com"
                  role="button"
                  target="_blank"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <img src={isMouseOnEnter ? multiyouthMainLogo : multiyouthWhiteLogo} width="100" alt="" style={{ borderRadius: '8px', marginRight: '10px' }} />
                    MultiYouth (日本語)
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://multiyouth.com/en-us"
                  role="button"
                  target="_blank"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <img src={isMouseOnEnter ? multiyouthMainLogo : multiyouthWhiteLogo} width="100" alt="" style={{ borderRadius: '8px', marginRight: '10px' }} />
                    MultiYouth (English)
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://github.com/rajanvalencia"
                  role="button"
                  target="_blank"
                >
                  Github
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://multiyouth.com/multiculturalyouth"
                  role="button"
                  target="_blank"
                >
                  多文化ユースプロジェクト
                </a>
              </p>
              {/* <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://instagram.com/rajanvalencia"
                  role="button"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://facebook.com/rajanvalencia"
                  role="button"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="pt-1">
                <a
                  className="btn btn-outline-light btn btn-block js-scroll px-4"
                  href="http://twitter.com/rajanvalencia"
                  role="button"
                  target="_blank"
                >
                  Twitter
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

