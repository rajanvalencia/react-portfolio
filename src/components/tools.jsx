import React from 'react';

export default function Tools() {

    const tools = {
        languages : [
            {
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
                alt: 'javascript'
            },
            {
                link: 'https://www.java.com',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
                alt: 'java'
            },
            {
                link: 'https://www.php.net',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
                alt: 'php'
            },
            {
                link: 'https://python.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                alt: 'python'
            },
            {
                link: 'https://www.w3schools.com/cpp/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
                alt: 'c++'
            },
            {
                link: 'https://jquery.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
                alt: 'jQuery'
            },
            {
                link: 'https://www.w3schools.com/css/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
                alt: 'css3'
            }, 
            {
                link: 'https://www.w3.org/html/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
                alt: 'html5'
            }, 
        ],
        frameworks : [
            {
                link: 'https://reactjs.org/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
                alt: 'react'
            },
            {
                link: 'https://nextjs.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
                alt: 'nextjs'
            }, 
            {
                link: 'https://nodejs.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
                alt: 'nodejs'
            },
            {
                link: 'https://spring.io/',
                img: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
                alt: 'spring'
            }, 
            {
                link: 'https://spring.io/projects/spring-boot',
                img: 'https://cdn.worldvectorlogo.com/logos/spring-14.svg',
                alt: 'spring boot'
            }, 
        ],
        database:[
            {
                link: 'https://www.mysql.com/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
                alt: 'mysql'
            }, 
            {
                link: 'https://mariadb.org/',
                img: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg',
                alt: 'mariadb'
            }, 
        ],
        aws: [
            {
                link: 'https://aws.amazon.com/amplify/',
                img: 'https://docs.amplify.aws/assets/logo-dark.svg',
                alt: 'amplify'
            },
            {
                link: 'https://aws.amazon.com/certificate-manager/',
                img: 'https://symbols.getvecta.com/stencil_23/3_aws-certificate-manager.b79c71d4c3.svg',
                alt: 'certificate manager'
            },
            {
                link: 'https://aws.amazon.com/cloudformation/',
                img: 'https://symbols.getvecta.com/stencil_16/5_aws-cloudformation.89d93ec8e8.svg',
                alt: 'cloud formation'
            },
            {
                link: 'https://aws.amazon.com/cloudfront/',
                img: 'https://symbols.getvecta.com/stencil_20/0_amazon-cloudfront.c349f9d1dc.svg',
                alt: 'cloudfront'
            },
            {
                link: 'https://aws.amazon.com/cloudwatch/',
                img: 'https://symbols.getvecta.com/stencil_73/84_amazon-cloudwatch-icon.10d39b18a6.svg',
                alt: 'cloudwatch'
            },
            {
                link: 'https://aws.amazon.com/codebuild/',
                img: 'https://symbols.getvecta.com/stencil_12/0_aws-codebuild.0c1cad5388.svg',
                alt: 'codebuild'
            },
            {
                link: 'https://aws.amazon.com/codepipeline/',
                img: 'https://symbols.getvecta.com/stencil_12/3_aws-codepipeline.2b22fe114b.svg',
                alt: 'codepipeline'
            },
            {
                link: 'https://aws.amazon.com/codestar/',
                img: 'https://symbols.getvecta.com/stencil_12/5_aws-codestar.a7175af236.svg',
                alt: 'codestar'
            },
            {
                link: 'https://aws.amazon.com/ec2/',
                img: 'https://symbols.getvecta.com/stencil_9/0_ec2.607c2cfeab.svg',
                alt: 'ec2'
            },
            {
                link: 'https://aws.amazon.com/elasticbeanstalk/',
                img: 'https://symbols.getvecta.com/stencil_9/32_aws-elastic-beanstalk.e06f11f2b0.svg',
                alt: 'elastic beanstalk'
            },
            {
                link: 'https://aws.amazon.com/ecr/',
                img: 'https://symbols.getvecta.com/stencil_9/12_amazon-ecr.e2bb590423.svg',
                alt: 'elastic container registry'
            },
            {
                link: 'https://aws.amazon.com/ecs/',
                img: 'https://symbols.getvecta.com/stencil_9/14_amazon-ecs.0defeec970.svg',
                alt: 'elastic container service'
            },
            {
                link: 'https://aws.amazon.com/iam/',
                img: 'https://symbols.getvecta.com/stencil_23/11_iam.ff93ec62a2.svg',
                alt: 'iam'
            },
            {
                link: 'https://aws.amazon.com/lambda/',
                img: 'https://symbols.getvecta.com/stencil_74/144_aws-lambda-icon.70ee4ffc8e.svg',
                alt: 'lambda'
            },
            {
                link: 'https://aws.amazon.com/rds/',
                img: 'https://symbols.getvecta.com/stencil_10/12_amazon-rds.b2cd85c3d2.svg',
                alt: 'rds'
            },
            {
                link: 'https://aws.amazon.com/route53/',
                img: 'https://cdn.worldvectorlogo.com/logos/aws-route53.svg',
                alt: 'route53'
            },
            {
                link: 'https://aws.amazon.com/s3/',
                img: 'https://symbols.getvecta.com/stencil_24/6_amazon-s3.88314aefee.svg',
                alt: 's3'
            },
            {
                link: 'https://aws.amazon.com/simpleemailservice/',
                img: 'https://symbols.getvecta.com/stencil_17/1_amazon-ses.f2cd79b845.svg',
                alt: 'simple email service'
            },
        ],
        os:[
            {
                link: 'https://aws.amazon.com/jp/amazon-linux-2/',
                img: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
                alt: 'amazon linux 2'
            }, 
            {
                link: 'https://ubuntu.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg',
                alt: 'ubuntu'
            }, 
            {
                link: 'https://www.centos.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/centos-1.svg',
                alt: 'centos'
            },

            {
                link: 'https://www.linux.org/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
                alt: 'linux'
            },
            {
                link: 'https://www.apple.com/macos/big-sur/',
                img: 'https://cdn.worldvectorlogo.com/logos/macos.svg',
                alt: 'macos'
            }, 
        ],
        others : [
            {
                link: 'https://git-scm.com/',
                img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
                alt: 'git'
            }, 
            {
                link: 'https://github.com',
                img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
                alt: 'github'
            },
            {
                link: 'https://firebase.google.com/',
                img: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
                alt: 'firebase'
            },
            {
                link: 'https://www.docker.com/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
                alt: 'docker'
            },
            {
                link: 'https://oauth.net/2/',
                img: 'https://cdn.worldvectorlogo.com/logos/oauth.svg',
                alt: 'oauth2'
            },
            {
                link: 'https://www.gnu.org/software/bash/',
                img: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
                alt: 'bash'
            }, 
            {
                link: 'https://getbootstrap.com',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
                alt: 'bootstrap'
            },  
            {
                link: 'https://materializecss.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/materialize-css-1.svg',
                alt: 'materializecss'
            },  
            {
                link: 'https://postman.com',
                img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
                alt: 'postman'
            }, 
            {
                link: 'https://code.visualstudio.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
                alt: 'visual studio code'
            }, 
            {
                link: 'https://stripe.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
                alt: 'stripe'
            }, 
        ]
    };

    return (
        <ul style={{ listStyle: 'none' }} className="m-0 p-0">
            <li>
                <h4>Languages</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" target="_blank" align="left">
                        {tools.languages.map((t, index) => 
                            <a href={t.link} className="mr-1"> 
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>Frameworks</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.frameworks.map((t, index) => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>AWS</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.aws.map((t, index) => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}>
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>OS</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.os.map((t, index) => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>Database</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.database.map((t, index) => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>Others</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.others.map((t, index) => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
        </ul>
        
    )
}