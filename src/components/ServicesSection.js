import React from "react";
import styled from "styled-components";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import { About, Description, Hide, Image } from "../style.js";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Clock icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Clock icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Description>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
