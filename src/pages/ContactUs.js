import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: toBePartiallyChecked;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  background: #353535;
  border-radius: 50%;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
