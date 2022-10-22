import React from "react";
import flood from "../files/flooding.mp4";
import styled from "styled-components";
import { animated, Spring } from "react-spring";

const FirstPage = styled.section`
  max-width: 100%;
`;

const LandingPage = styled.div`
  width: 80%;
  max-width: 100%;
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 0 30px 30px 30px;
`;

const LandingText = styled.h1`
  font-size: clamp(4rem, 6.5vw, 25rem);

  text-align: center;
  margin: 0;

  @media screen and (max-width: 587px) {
    font-size: calc(5vw + 1.5rem);
    max-width: 100%;
  }
  @media screen and (max-width: 328px) {
    font-size: calc(3vw + 1.5rem);
    line-height: 50px;
  }
`;

const OtherDetails = styled.ul`
  padding: none;
  list-style-type: circle;
`;

const OtherDetailsItem = styled.li`
  font-size: clamp(18px, 3vw, 25px);
  font-weight: 700;
  padding: 10px;
`;

const Landing = () => {
  return (
    <FirstPage>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={flood} type="video/mp4" />
      </video>

      <LandingPage>
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {(props) => (
            <animated.div style={props}>
              <LandingText>
                Over 3 Million Nigerians have been affected by floods in recent
                months
              </LandingText>
            </animated.div>
          )}
        </Spring>

        <OtherDetails>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 10000, duration: 3000 }}
          >
            {(props) => (
              <animated.div style={props}>
                <OtherDetailsItem>
                  The flood has claimed about 603 lives, affected 2,504,095
                  persons and displaced 1,302,589 persons across the country.
                </OtherDetailsItem>
                <OtherDetailsItem>Toll keep rising daily</OtherDetailsItem>
                <OtherDetailsItem>
                  5 states still at risk this year
                </OtherDetailsItem>
                <OtherDetailsItem>
                  {" "}
                  Some media outlets say it's as a result of global warming
                </OtherDetailsItem>
                <OtherDetailsItem>
                  {" "}
                  But what is the really is the cause of this disaster?
                </OtherDetailsItem>
              </animated.div>
            )}
          </Spring>
        </OtherDetails>
      </LandingPage>
    </FirstPage>
  );
};

export default Landing;
