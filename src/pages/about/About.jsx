import React from "react";
import "./aboutpage.scss";
import { Container } from "react-bootstrap";
import UnderLine from "../../components/helper/UnderLine";
import VisionMission from "../../components/aboutComponent/VisionMission";
import CoreTeams from "../../components/aboutComponent/CoreTeams";
import Partners from "../../components/partners/Partners";

const About = () => {
  return (
    <>
      <div className="about-page">
        <Container>
          <h1>ABout Thunderbolts</h1>
          <UnderLine />
          <p>
            THUNDERBOLTS DEVELOPMENT CENTER (TDC) is Nepal’s premier sports and
            e-sports academy, dedicated to nurturing talent and fostering
            athletic excellence. As part of the esteemed GEMS Group, which
            boasts 40 years of experience in the education industry, TDC
            leverages the expertise and values of its parent organization to
            provide a holistic environment for athletes of all ages.
            <br /> <br /> Located on the GEMS School campus, TDC benefits from
            the resources and reputation of one of Nepal's leading educational
            institutions. GEMS School, renowned for academic excellence and
            comprehensive student development, has been a cornerstone in shaping
            future leaders of the country. In partnership with Little Flowers
            English School (LFES), another reputable institution under the GEMS
            Group, TDC is equipped with world-class facilities and
            infrastructure that cater to the sporting aspirations of youth
            across the country.
            <br /> <br />
            At TDC, we provide tailored programs for grassroots, intermediate,
            and senior athletes, supported by professional coaching,
            cutting-edge sports science, and international collaborations. Our
            vision extends beyond national borders, connecting athletes to
            opportunities globally through partnerships with leading sports
            academies and clubs. We believe in a holistic approach to training,
            focusing on both physical and mental development to ensure success
            on and off the field.
            <br /> <br /> Whether it’s through football, cricket, swimming,
            tennis, or esports, TDC is committed to setting new standards in
            sports education and development in Nepal, helping athletes reach
            their full potential while instilling values of discipline,
            teamwork, and perseverance.
            <br /> <br />
          </p>
        </Container>
        <VisionMission />
        <Partners />
        {/* <CoreTeams /> */}
      </div>
    </>
  );
};

export default About;
