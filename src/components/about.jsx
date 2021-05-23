import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Just another software engineer."
        },
        {
          id: "second-p-about",
          content:
            ""
        },
        {
          id: "third-p-about",
          content:
            ""
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route" style={{ backgroundColor: '#121212' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full" style={{ backgroundColor: '#222222' }}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-mf">
                      <img
                        src="https://github-readme-stats.vercel.app/api?username=rajanvalencia&count_private=true&show_icons=true&theme=dark"
                        style={{ width: '100%' }}
                      />
                      <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=rajanvalencia&theme=dark"
                        style={{ width: '100%' }}
                      />
                      <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajanvalencia&count_private=true&layout=compact&show_icons=true&theme=dark"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0" style={{ color: '#9e9e9e' }}>
                      <div className="title-box-2">
                        <h5 className="title-left" style={{ color: '#cfcfcf' }}>About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
