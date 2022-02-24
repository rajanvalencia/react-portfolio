import React from 'react';
import AWSAmplify from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Front-End-Web-Mobile/48/Arch_AWS-Amplify_48.svg';
import CertificateManager from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Security-Identity-Compliance/64/Arch_AWS-Certificate-Manager_64.svg';
import CloudFormation from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Management-Governance/48/Arch_AWS-CloudFormation_48.svg';
import Cloudfront from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Networking-Content-Delivery/48/Arch_Amazon-CloudFront_48.svg';
import CloudWatch from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Management-Governance/48/Arch_Amazon-CloudWatch_48.svg';
import CodeBuild from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/48/Arch_AWS-CodeBuild_48.svg';
import CodePipeline from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/48/Arch_AWS-CodePipeline_48.svg';
import Codestar from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Developer-Tools/48/Arch_AWS-CodeStar_48.svg';
import Comprehend from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Machine-Learning/48/Arch_Amazon-Comprehend_48.svg';
import EC2 from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/48/Arch_Amazon-Elastic-Container-Service_48.svg';
import ElasticBeanstalk from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/48/Arch_AWS-Elastic-Beanstalk_48.svg';
import ElasticContainerService from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/48/Arch_Amazon-Elastic-Container-Service_48.svg';
import ElasticLoadBalancing from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Networking-Content-Delivery/48/Arch_Elastic-Load-Balancing_48.svg';
import IAM from 'aws-svg-icons/lib/Resource-Icons_07302021/Res_Security-Identity-and-Compliance/Res_48_Light/Res_AWS-Identity-Access-Management_AWS-IAM-Access-Analyzer_48_Light.svg';
import Lambda from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Compute/48/Arch_AWS-Lambda_48.svg';
import Rekognition from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Machine-Learning/48/Arch_Amazon-Rekognition_48.svg';
import RDS from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Database/48/Arch_Amazon-RDS_48.svg';
import Route53 from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Networking-Content-Delivery/48/Arch_Amazon-Route-53_48.svg';
import S3 from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Storage/48/Arch_AWS-Snowmobile_48.svg';
import SimpleEmailService from 'aws-svg-icons/lib/Architecture-Service-Icons_07302021/Arch_Business-Applications/48/Arch_Amazon-WorkMail_48.svg';

export default function Tools() {

    const tools = {
        languages : [
            {
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
                alt: 'Javascript'
            },
            {
                link: 'https://www.typescriptlang.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
                alt: 'Typescript'
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
                link: 'https://sass-lang.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
                alt: 'Sass'
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
                img: 'https://turreta.com/wp-content/uploads/2017/01/spring-boot-project-logo.png',
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
                img: AWSAmplify,
                alt: 'Amplify'
            },
            {
                link: 'https://aws.amazon.com/certificate-manager/',
                img: CertificateManager,
                alt: 'Certificate Manager'
            },
            {
                link: 'https://aws.amazon.com/cloudformation/',
                img: CloudFormation,
                alt: 'Cloud Formation'
            },
            {
                link: 'https://aws.amazon.com/cloudfront/',
                img: Cloudfront,
                alt: 'Cloudfront'
            },
            {
                link: 'https://aws.amazon.com/cloudwatch/',
                img: CloudWatch,
                alt: 'Cloudwatch'
            },
            {
                link: 'https://aws.amazon.com/codebuild/',
                img: CodeBuild,
                alt: 'Codebuild'
            },
            {
                link: 'https://aws.amazon.com/codepipeline/',
                img: CodePipeline,
                alt: 'Code Pipeline'
            },
            {
                link: 'https://aws.amazon.com/codestar/',
                img: Codestar,
                alt: 'Codestar'
            },
            {
                link: 'https://aws.amazon.com/comprehend/',
                img: Comprehend,
                alt: 'Comprehend'
            },
            {
                link: 'https://aws.amazon.com/ec2/',
                img: EC2,
                alt: 'EC2'
            },
            {
                link: 'https://aws.amazon.com/elasticbeanstalk/',
                img: ElasticBeanstalk,
                alt: 'Elastic Beanstalk'
            },
            {
                link: 'https://aws.amazon.com/ecr/',
                img: ElasticContainerService,
                alt: 'Elastic Container Registry'
            },
            {
                link: 'https://aws.amazon.com/ecs/',
                img: ElasticContainerService,
                alt: 'Elastic Container Service'
            },
            {
                link: 'https://aws.amazon.com/jp/elasticloadbalancing/',
                img: ElasticLoadBalancing,
                alt: 'Elastic Load Balancing'
            },
            {
                link: 'https://aws.amazon.com/iam/',
                img: IAM,
                alt: 'IAM'
            },
            {
                link: 'https://aws.amazon.com/lambda/',
                img: Lambda,
                alt: 'Lambda'
            },
            {
                link: 'https://aws.amazon.com/rekognition/',
                img: Rekognition,
                alt: 'Rekognition'
            },
            {
                link: 'https://aws.amazon.com/rds/',
                img: RDS,
                alt: 'RDS'
            },
            {
                link: 'https://aws.amazon.com/route53/',
                img: Route53,
                alt: 'Route53'
            },
            {
                link: 'https://aws.amazon.com/s3/',
                img: S3,
                alt: 'S3'
            },
            {
                link: 'https://aws.amazon.com/simpleemailservice/',
                img: SimpleEmailService,
                alt: 'Simple Email Service'
            },
        ],
        gcp: [
            {
                link: 'https://cloud.google.com/storage',
                img: 'https://cdn.worldvectorlogo.com/logos/google-cloud.svg',
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
        editors :[
            {
                link: 'https://www.eclipse.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/eclipse-11.svg',
                alt: 'Eclipse'
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
        ],
        libraries : [
            {
                link: 'https://getbootstrap.com',
                img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
                alt: 'Bootstrap'
            },
            {
                link: 'https://fontawesome.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/fontawesome-1.svg',
                alt: 'FontAwesome'
            },
            {
                link: 'https://jquery.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
                alt: 'jQuery'
            },
            {
                link: 'https://jwt.io',
                img: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
                alt: 'JWT'
            },
            {
                link: 'https://mapbox.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/mapbox-2.svg',
                alt: 'Mapbox'
            }, 
            {
                link: 'https://www.opengl.org/',
                img: 'https://cdn.worldvectorlogo.com/logos/opengl-1.svg',
                alt: 'OpenGL'
            },
            {
                link: 'https://stripe.com/',
                img: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
                alt: 'Stripe'
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
                link: 'https://www.gnu.org/software/bash/',
                img: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
                alt: 'Bash'
            },   
            {
                link: 'https://postman.com',
                img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
                alt: 'PostMan'
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
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} /> 
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>Editors</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.editors.map(t => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
                            </a>
                        )}
                    </p>
                </div>
            </li>
            <li>
                <h4>Libraries</h4>
                <div className="bg-white rounded">
                    <p className="mt-4 p-3" align="left">
                        {tools.libraries.map(t => 
                            <a href={t.link} target="_blank" className="mr-1" data-toggle="tooltip" data-placement="top" title={t.alt}> 
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
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
                                <img src={t.img} alt={t.alt} width="40" height="40" style={{ margin: '0.25rem 0 0.25rem 0' }} />
                            </a>
                        )}
                    </p>
                </div>
            </li>
        </ul>
        
    )
}