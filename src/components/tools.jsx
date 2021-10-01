import React from 'react';

export default function Tools() {

    const tools = {
        languages : [
            {
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
                alt: 'Javascript'
            },
            {
                link: 'https://www.java.com',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
                alt: 'Java'
            },
            {
                link: 'https://www.php.net',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
                alt: 'PHP'
            },
            {
                link: 'https://python.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                alt: 'Python'
            },
            {
                link: 'https://www.w3schools.com/cpp/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
                alt: 'C++'
            },
            {
                link: 'https://jquery.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
                alt: 'jQuery'
            },
            {
                link: 'https://www.w3schools.com/css/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
                alt: 'CSS3'
            }, 
            {
                link: 'https://www.w3.org/html/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
                alt: 'HTML5'
            }, 
        ],
        frameworks : [
            {
                link: 'https://reactjs.org/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
                alt: 'React'
            },
            {
                link: 'https://nextjs.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
                alt: 'NextJs'
            }, 
            {
                link: 'https://nodejs.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
                alt: 'NodeJs'
            },
            {
                link: 'https://spring.io/',
                img: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
                alt: 'Spring'
            }, 
            {
                link: 'https://spring.io/projects/spring-boot',
                img: 'https://cdn.worldvectorlogo.com/logos/spring-14.svg',
                alt: 'Spring Boot'
            }, 
            {
                link: 'https://laravel.com',
                img: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
                alt: 'Laravel'
            }, 
        ],
        database:[
            {
                link: 'https://www.mysql.com/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
                alt: 'MySQL'
            }, 
            {
                link: 'https://mariadb.org/',
                img: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg',
                alt: 'MariaDB'
            }, 
        ],
        aws: [
            {
                link: 'https://aws.amazon.com/amplify/',
                img: 'https://docs.amplify.aws/assets/logo-dark.svg',
                alt: 'Amplify'
            },
            {
                link: 'https://aws.amazon.com/certificate-manager/',
                img: 'https://symbols.getvecta.com/stencil_23/3_aws-certificate-manager.b79c71d4c3.svg',
                alt: 'Certificate Manager'
            },
            {
                link: 'https://aws.amazon.com/cloudformation/',
                img: 'https://symbols.getvecta.com/stencil_16/5_aws-cloudformation.89d93ec8e8.svg',
                alt: 'Cloud Formation'
            },
            {
                link: 'https://aws.amazon.com/cloudfront/',
                img: 'https://symbols.getvecta.com/stencil_20/0_amazon-cloudfront.c349f9d1dc.svg',
                alt: 'Cloudfront'
            },
            {
                link: 'https://aws.amazon.com/cloudwatch/',
                img: 'https://symbols.getvecta.com/stencil_73/84_amazon-cloudwatch-icon.10d39b18a6.svg',
                alt: 'Cloudwatch'
            },
            {
                link: 'https://aws.amazon.com/codebuild/',
                img: 'https://symbols.getvecta.com/stencil_12/0_aws-codebuild.0c1cad5388.svg',
                alt: 'Codebuild'
            },
            {
                link: 'https://aws.amazon.com/codepipeline/',
                img: 'https://symbols.getvecta.com/stencil_12/3_aws-codepipeline.2b22fe114b.svg',
                alt: 'Code Pipeline'
            },
            {
                link: 'https://aws.amazon.com/codestar/',
                img: 'https://symbols.getvecta.com/stencil_12/5_aws-codestar.a7175af236.svg',
                alt: 'Codestar'
            },
            {
                link: 'https://aws.amazon.com/comprehend/',
                img: 'https://symbols.getvecta.com/stencil_258/0_aws-comprehend.068d98ba38.svg',
                alt: 'Comprehend'
            },
            {
                link: 'https://aws.amazon.com/ec2/',
                img: 'https://symbols.getvecta.com/stencil_9/0_ec2.607c2cfeab.svg',
                alt: 'EC2'
            },
            {
                link: 'https://aws.amazon.com/elasticbeanstalk/',
                img: 'https://symbols.getvecta.com/stencil_9/32_aws-elastic-beanstalk.e06f11f2b0.svg',
                alt: 'Elastic Beanstalk'
            },
            {
                link: 'https://aws.amazon.com/ecr/',
                img: 'https://symbols.getvecta.com/stencil_9/12_amazon-ecr.e2bb590423.svg',
                alt: 'Elastic Container Registry'
            },
            {
                link: 'https://aws.amazon.com/ecs/',
                img: 'https://symbols.getvecta.com/stencil_9/14_amazon-ecs.0defeec970.svg',
                alt: 'Elastic Container Service'
            },
            {
                link: 'https://aws.amazon.com/jp/elasticloadbalancing/',
                img: 'https://symbols.getvecta.com/stencil_20/20_elastic-load-balancing.e612ef989d.svg',
                alt: 'Elastic Load Balancing'
            },
            {
                link: 'https://aws.amazon.com/iam/',
                img: 'https://symbols.getvecta.com/stencil_23/11_iam.ff93ec62a2.svg',
                alt: 'IAM'
            },
            {
                link: 'https://aws.amazon.com/lambda/',
                img: 'https://symbols.getvecta.com/stencil_74/144_aws-lambda-icon.70ee4ffc8e.svg',
                alt: 'Lambda'
            },
            {
                link: 'https://aws.amazon.com/rekognition/',
                img: 'https://symbols.getvecta.com/stencil_7/3_amazon-rekognition.b9683a0796.svg',
                alt: 'Rekognition'
            },
            {
                link: 'https://aws.amazon.com/rds/',
                img: 'https://symbols.getvecta.com/stencil_10/12_amazon-rds.b2cd85c3d2.svg',
                alt: 'RDS'
            },
            {
                link: 'https://aws.amazon.com/route53/',
                img: 'https://cdn.worldvectorlogo.com/logos/aws-route53.svg',
                alt: 'Route53'
            },
            {
                link: 'https://aws.amazon.com/s3/',
                img: 'https://symbols.getvecta.com/stencil_24/6_amazon-s3.88314aefee.svg',
                alt: 'S3'
            },
            {
                link: 'https://aws.amazon.com/simpleemailservice/',
                img: 'https://symbols.getvecta.com/stencil_17/1_amazon-ses.f2cd79b845.svg',
                alt: 'Simple Email Service'
            },
        ],
        gcp: [
            {
                link: 'https://cloud.google.com/storage',
                img: 'https://symbols.getvecta.com/stencil_4/47_google-cloud-storage.ee53caf67f.svg',
                alt: 'Cloud Storage'
            },
            {
                link: 'https://firebase.google.com/',
                img: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
                alt: 'Firebase'
            },
            {
                link: 'https://developers.google.com/apps-script',
                img: 'https://static.cdnlogo.com/logos/g/12/google-apps-script.svg',
                alt: 'Google App Script'
            }, 
            {
                link: 'https://cloud.google.com/translate/docs',
                img: 'https://static.cdnlogo.com/logos/g/31/google-translate.svg',
                alt: 'Cloud Translate'
            }, 
            {
                link: 'https://developers.google.com/maps',
                img: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg',
                alt: 'Google Maps'
            },
            {
                link: 'https://developers.google.com/identity/protocols/oauth2',
                img: 'https://cdn.worldvectorlogo.com/logos/oauth.svg',
                alt: 'OAuth2'
            },
        ],
        os:[
            {
                link: 'https://aws.amazon.com/jp/amazon-linux-2/',
                img: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
                alt: 'Amazon Linux 2'
            }, 
            {
                link: 'https://ubuntu.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg',
                alt: 'Ubuntu'
            }, 
            {
                link: 'https://www.centos.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/centos-1.svg',
                alt: 'CentOS'
            },

            {
                link: 'https://www.linux.org/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
                alt: 'Linux'
            },
            {
                link: 'https://www.apple.com/macos',
                img: 'https://cdn.worldvectorlogo.com/logos/macos.svg',
                alt: 'MacOS'
            }, 
            {
                link: 'https://www.microsoft.com/windows',
                img: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg',
                alt: 'Windows'
            }, 
        ],
        others : [
            {
                link: 'https://git-scm.com/',
                img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
                alt: 'Git'
            }, 
            {
                link: 'https://github.com',
                img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
                alt: 'Github'
            },
            {
                link: 'https://www.docker.com/',
                img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
                alt: 'Docker'
            },
            {
                link: 'https://www.eclipse.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/eclipse-11.svg',
                alt: 'Eclipse'
            },
            {
                link: 'https://www.gnu.org/software/bash/',
                img: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
                alt: 'Bash'
            }, 
            {
                link: 'https://jwt.io',
                img: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
                alt: 'JWT'
            },
            {
                link: 'https://getbootstrap.com',
                img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
                alt: 'Bootstrap'
            },  
            {
                link: 'https://www.opengl.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/opengl-1.svg',
                alt: 'OpenGL'
            },
            {
                link: 'https://postman.com',
                img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
                alt: 'PostMan'
            }, 
            {
                link: 'https://visualstudio.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/visual-studio-2013.svg',
                alt: 'Visual Studio'
            }, 
            {
                link: 'https://code.visualstudio.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
                alt: 'VS Code'
            }, 
            {
                link: 'https://stripe.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
                alt: 'Stripe'
            }, 
            {
                link: 'https://mapbox.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/mapbox-2.svg',
                alt: 'Mapbox'
            }, 
            {
                link: 'https://fontawesome.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/fontawesome-1.svg',
                alt: 'FontAwesome'
            }, 
            {
                link: 'https://wordpress.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg',
                alt: 'WordPress'
            },
        ]
    };

    return (
        <ul style={{ listStyle: 'none' }} className="m-0 p-0">
            <li>
                <h4>Languages</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" target="_blank" align="left">
                        {tools.languages.map(t => 
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
                        {tools.frameworks.map(t => 
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
                        {tools.aws.map(t => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}>
                                <img src={t.img} alt={t.alt} width="40" height="40"/> 
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>GCP / Google Developers</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.gcp.map(t => 
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
                        {tools.os.map(t => 
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
                        {tools.database.map(t => 
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
                        {tools.others.map(t => 
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