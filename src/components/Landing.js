import React from "react";
import flood from "../files/flooding.mp4";
import styled from "styled-components";

const LandingPage = styled.div`
  width: 80%;
  max-width: 100%;
  border: 2px solid black;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 30px 30px 30px;
`;

const LandingText = styled.h1`
  /* color: white; */
  font-size: clamp(4rem, 6.5vw, 25rem);
  max-width: 80%;
  text-align: center;
  margin: 0;
`;

const OtherDetails = styled.ul`
  padding: none;
  list-style-type: circle;
`;

const OtherDetailsItem = styled.li`
  font-size: clamp(18px, 3vw, 25px);
  padding: 10px;
`;

const Landing = () => {
  return (
    <section>
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
        <LandingText>
          Over 3 Million Nigerians have been affected by floods in recent months
        </LandingText>

        <OtherDetails>
          <OtherDetailsItem>
            The flood has claimed about 603 lives, affected 2,504,095 persons
            and displaced 1,302,589 persons across the country.
          </OtherDetailsItem>
          <OtherDetailsItem>Toll keep rising daily</OtherDetailsItem>
          <OtherDetailsItem>5 states still at risk this year</OtherDetailsItem>
          <OtherDetailsItem>
            {" "}
            Some media outlets say it's as a result of global warming
          </OtherDetailsItem>
          <OtherDetailsItem>
            {" "}
            But what is the really is the cause of this disaster?
          </OtherDetailsItem>
        </OtherDetails>
      </LandingPage>
    </section>
  );
};

export default Landing;
