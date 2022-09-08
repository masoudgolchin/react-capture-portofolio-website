import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

import { useScroll } from "./useScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq ref={element} variants={fade} animate={controls} initial="hidden">
      <h2>
        Any Suestions? <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis provident pariatur odit voluptas excepturi tempore
              possimus blanditiis. Temporibus aliquid mollitia obcaecati
              voluptate maxime dolorum aliquam? Enim illum minus dolor
              praesentium.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis provident pariatur odit voluptas excepturi tempore
              possimus blanditiis. Temporibus aliquid mollitia obcaecati
              voluptate maxime dolorum aliquam? Enim illum minus dolor
              praesentium.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis provident pariatur odit voluptas excepturi tempore
              possimus blanditiis. Temporibus aliquid mollitia obcaecati
              voluptate maxime dolorum aliquam? Enim illum minus dolor
              praesentium.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis provident pariatur odit voluptas excepturi tempore
              possimus blanditiis. Temporibus aliquid mollitia obcaecati
              voluptate maxime dolorum aliquam? Enim illum minus dolor
              praesentium.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  h4 {
    font-size: 2rem;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
