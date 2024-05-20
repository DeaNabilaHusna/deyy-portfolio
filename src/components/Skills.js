import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import css from "../assets/img/css.png";
import bootstrap from "../assets/img/bootstrap.png";
import JavaScript from "../assets/img/javascript.png";
import laravel from "../assets/img/laravel.png";
import php from "../assets/img/php.png";
import html from "../assets/img/html.png";
import figma from "../assets/img/figma.png";
import mysql from "../assets/img/mysql.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" className="skill-img" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" className="skill-img" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" className="skill-img" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" className="skill-img" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="Image" className="skill-img" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" className="skill-img" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" className="skill-img" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" className="skill-img" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" className="skill-img" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" className="skill-img" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" className="skill-img" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" className="skill-img" />
                                <h5>Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
