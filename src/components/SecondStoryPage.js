import React from "react";
import styled from "styled-components";

const Story = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #000;
  color: #fff;
  height: 100vh;
  padding: 50px;
  padding-top: 11rem;
`;

const StoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

const StoryHeading = styled.h2`
  font-size: clamp(25px, 3.5vw, 40px);
  padding-bottom: 20px;
`;

const StoryText = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 3vw, 20px);
  text-align: justify;
  line-height: 40px;
`;

const StoryVideo = styled.div`
padding: 30px;
max-width: 100%;

`;

const SecondStoryPage = () => {
  return (
    <Story>
      <StoryDetails>
        <StoryHeading>The Lagdo Dam in Cameroon</StoryHeading>
        <StoryText>
          The construction of the Lagdo Dam located in Northern Cameroon started
          in 1977 and was completed in 1982. At inception, Cameroon and Nigeria
          had an agreement to build two dams such that when water is released
          from the Cameroonian dam, the Nigerian dam would contain it and
          prevent it from causing floods. So, to cushion the effect of possible
          flooding from the Lagdo dam in Cameroon, the Nigerian government
          agreed to build a shock-absorber dam tagged Dasin Hausa Dam in Adamawa
          State.
        </StoryText>
      </StoryDetails>

      <StoryVideo>
        <iframe
          width="603"
          height="500"
          src={`https://www.youtube.com/embed/_HwGJLwAGRU`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </StoryVideo>
    </Story>
  );
};

export default SecondStoryPage;
