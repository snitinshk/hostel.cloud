import React, { useRef, useEffect } from 'react';
import Container from '../hoc/container';
import LocalImages from "../utils/images";
import NorButton from "../component/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgAnimation from "../component/SvgAnimation";

function Home() {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".fstPara"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: "100",
          end: 300,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".SctPara"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: 150,
          end: 350,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".img"),
      {
        opacity: 1,
        scale: 1
      },
      {
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: 150,
          end: 400,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".mapimg_top"),
      {
        opacity: 0.4,
        transform: "scale(0.4) translateY(320px)"
      },
      {
        opacity: 1,
        transform: "scale(1) translateY(0px)",
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: 150,
          end: 450,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".banBtn"),
      {
        opacity: 1,
        y: 0
      },
      {
        opacity: 0,
        y: 200,
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: 200,
          end: 400,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".mapar"),
      {
        transform: "0",
      },
      {
        transform: "translate(-40px, -110px)",
        scrollTrigger: {
          trigger: element.querySelector(".wrapper"),
          start: 200,
          end: 400,
          scrub: true,
          ease: "expo.out"
        }
      }
    );
  }, []);


  return (
    <Container hocClass="home_mcontainer">
      <div id='homePage' className="hm_banner" ref={ref}>
        <div className="container_1">
          <h1 className='hm_hd fstPara'>The industry’s easiest student housing platform</h1>
          <h2 className='hm_shd SctPara'>Attract more students to live on-campus while simplifying housing operations</h2>
          <figure className="img">
            <img src={LocalImages.BannerImg} alt="" className='desktopvw' />
            <img src={LocalImages.BannerImgMob} alt="" className='mobilevw' />
          </figure>
          <NorButton imgPath={LocalImages.BtnAr} buttonText="Get Started" className={'get_stst_rd banBtn'} />
          <h3 className='hm_shd sm'>Housing.Cloud manages your entire student housing ecosystem</h3>
          <div className='mapimg_top desktopvw'>
            <img src={LocalImages.MapImg} alt="" className='mpImgbx' />
          </div>
          <div className="mapar desktopvw">
            <img src={LocalImages.MapArImg} alt="" className='mpArImgbx' />
          </div>
        </div>
      </div>
      <div className="modern_student">
        <div className="container Dflex sp-bt">
          <div className="lt Dflex sp-bt">
            <h2 className="heading">The modern student has changed a lot</h2>
            <div className="sub_heading desktopvw">Why hasn’t your housing management software?</div>
          </div>
          <figure className="img">
            <img src={LocalImages.StImg} alt="" />
          </figure>
          <div className="lt Dflex mobilevw sp-bt">
            <div className="sub_heading">Why hasn’t your housing management software?</div>
          </div>
        </div>
      </div>
      <div id='featuresBx' className="purpose-built">
        <div className="container">
          <div className="top Dflex sp-bt m-b-45">
            <h2 className="heading">Purpose-built with today’s technology</h2>
            <div className="sub_heading">We can offer features that old-school competitors cannot</div>
          </div>
          <ul className='purpose-builtls'>
            <li>
              <figure><img src={LocalImages.FlexBl} alt="" /></figure>
              <h4>Flexible</h4>
              <p>Set up custom tags to sort, find and organize applicants and residents</p>
            </li>
            <li>
              <figure className='selfmbob'>
                <img src={LocalImages.FlexBl2} alt="" className='desktopvw' />
                <img src={LocalImages.FlexBl2Mob} alt="" className='mobilevw' />
              </figure>
              <h4>Self-Service</h4>
              <p>Admins can manage their applications, custom fields and reports without calling Customer Support</p>
            </li>
            <li>
              <figure><img src={LocalImages.FlexBl1} alt="" /></figure>
              <h4>Customizable</h4>
              <p>Each school defines its unique applications, workflows and checklists so our system works the way you do</p>
            </li>
            <li>
              <figure><img src={LocalImages.FlexBl3} alt="" /></figure>
              <h4>Stable on the cloud</h4>
              <p>No need to stagger student access to the system: Housing.Cloud can handle surges in demand</p>
            </li>
            <li>
              <figure><img src={LocalImages.FlexBl5} alt="" /></figure>
              <h4>Connected</h4>
              <p>Housing.Cloud works with your student information system to eliminate duplicate data and to keep your team's records up-to-date</p>
            </li>
            <li>
              <figure><img src={LocalImages.FlexBl4} alt="" /></figure>
              <h4>Value-priced</h4>
              <p>Even small schools can afford to enhance their student experience with Housing.Cloud</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="conveniently_quickly">
        <div className="container">
          <div className="anim_bx">
            <figure className='mobilevw'>
              <img src={LocalImages.anibxImg} alt="" />
            </figure>
            <SvgAnimation />
          </div>
          <div className="rt">
            <h4 className='bx_head'>Conveniently and quickly control all processes</h4>
            <p className='bx_subhead'>Housing.Cloud is organized the way your housing operation works so you can find what you're looking for easily.  Our intuitive design and modern user interface make it easier to train new staff as your team changes</p>
          </div>
        </div>
      </div>
      <div className="sectiion_wrp_img">
        <div className="container Dflex sp-bt al-cnt">
          <div className="lt">
            <div className="bx_head">Improve roommate matches and room assignments</div>
            <div className="bx_subhead">Easily create rulesets that consider each student's characteristics, requirements and preferences to suggest roommate matches and room assignments</div>
          </div>
          <figure className="img"><img src={LocalImages.RoommatImg} alt="" /></figure>
        </div>
      </div>
      <div className="sectiion_wrp_img">
        <div className="container Dflex sp-bt al-cnt fl-revers">
          <div className="lt">
            <div className="bx_head">Create and control Application Forms</div>
            <div className="bx_subhead">We have developed an easy system for creating, managing your Application Form<br />
              (Like <img src={LocalImages.Glform1} alt="" /> Google Form and <img src={LocalImages.Glform2} alt="" /> AirTable)</div>
          </div>
          <figure className="img"><img src={LocalImages.Glform} alt="" /></figure>
        </div>
      </div>
      <div className="sectiion_wrp_img">
        <div className="container Dflex sp-bt al-cnt">
          <div className="lt">
            <div className="bx_head">We don't limit you</div>
            <div className="bx_subhead">Housing.Cloud bends to meet your needs rather than asking you to conform to Housing.Cloud's capabilities.</div>
          </div>
          <figure className="img">
            <img src={LocalImages.limitImg} alt="" />
          </figure>
        </div>
      </div>
      <div className='closer_student'>
        <div className="container Dflex sp-bt al-cnt">
          <figure className="img">
            <img src={LocalImages.ClStudent} alt="" className='desktopvw' />
            <img src={LocalImages.ClStudentmob} alt="" className='mobilevw' />
          </figure>
          <div className="student_details_center">
            <div className="bx_head">Be one click closer to students</div>
            <div className="bx_subhead">Attract more students to live on-campus while simplifying housing operations</div>
            <NorButton imgPath={LocalImages.BtnAr} buttonText="Get Started" className={'get_stst_blue'} />
          </div>
          <figure className="img">
            <img src={LocalImages.ClStudent1} alt="" className='desktopvw' />
            <img src={LocalImages.ClStudent1mob} alt="" className='mobilevw' />
          </figure>
        </div>
      </div>
    </Container>
  )
}

export default Home