import React from "react";
import styled from "styled-components";

const Story = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StoryDetails = styled.div``;

const StoryHeading = styled.h2``;

const SecondStoryText = styled.p`
  color: #000;
  font-weight: 700;
  font-size: clamp(18px, 3vw, 35px);
  text-align: justify;
  color: navy;
`;

const StoryVideo = styled.div``;

const SecondStoryPage = () => {
  return (
    <Story>
      <StoryDetails>
        <StoryHeading>The Lagdo Dam in Cameroon</StoryHeading>
        <SecondStoryText>
          The construction of the Lagdo Dam located in Northern Cameroon started
          in 1977 and was completed in 1982. At inception, Cameroon and Nigeria
          had an agreement to build two dams such that when water is released
          from the Cameroonian dam, the Nigerian dam would contain it and
          prevent it from causing floods. So, to cushion the effect of possible
          flooding from the Lagdo dam in Cameroon, the Nigerian government
          agreed to build a shock-absorber dam tagged Dasin Hausa Dam in Adamawa
          State.
        </SecondStoryText>
      </StoryDetails>

      <StoryVideo></StoryVideo>
    </Story>
  );
};

export default SecondStoryPage;
