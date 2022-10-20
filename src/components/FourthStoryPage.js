import React from "react";
import styled from "styled-components";

const Story = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #000;
  color: #fff;
  height: 100vh;
  padding: 50px;
`;

const StoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

const StoryHeading = styled.h2`
  font-size: clamp(25px, 3.5vw, 40px);
  padding-bottom: 30px;
`;

const StoryText = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 3vw, 20px);
  text-align: justify;
  line-height: 50px;
`;

const StoryVideo = styled.div`
  padding: 30px;
  max-width: 100%;
`;

const FourthStoryPage = () => {
  return (
    <Story>
      <StoryDetails>
        <StoryHeading>Effects of the flood so far</StoryHeading>
        <StoryText>
          With the recent rainfall witnessed in Nigeria, coupled with the
          opening of the dam, over 100,000 Nigerians have been displaced, at
          least 300 killed and more than 500,000 others affected in the past few
          months. Data released in Abuja, on Monday, by the National Emergency
          Management Agency and the Nigeria Hydrological Services Agency, at an
          emergency technical meeting on flood situation across the country
          disclosed this. “Based on our communication with NIHSA, the Lagdo Dam
          operators in the Republic of Cameroon, had commenced the release of
          excess water from the reservoir on September 13, 2022,” the
          Director-General, NEMA, Mustapha Ahmed, stated while speaking at the
          meeting. <br />
          Benue State is called the food basket of Nigeria. With the destruction
          of several hectares of farm land, the food crisis in Nigeria will
          worsen.
        </StoryText>
      </StoryDetails>

      <StoryVideo>
        <iframe
          width="603"
          height="680"
          src={`https://www.youtube.com/embed/NQIHdDArow4`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </StoryVideo>
    </Story>
  );
};

export default FourthStoryPage;
