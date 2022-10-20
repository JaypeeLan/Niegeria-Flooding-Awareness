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

const ThirdStoryPage = () => {
  return (
    <Story>
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

      <StoryDetails>
        <StoryHeading>The Dasin Hausa dam in Nigeria</StoryHeading>
        <StoryText>
          The Dasin Hausa dam in Nigeria The Dasin Hausa dam was supposed to be
          two and a half the size of the Lagdo dam, which was built to supply
          electricity to the northern part of Cameroon and allow the irrigation
          of 15,000 hectares of crops downstream. Like the Lagdo dam, the dam
          project sited at the Dasin Village of Fufore Local Government Area of
          Adamawa State was supposed to generate 300 megawatts of electricity
          and irrigate about 150,000 hectares of land in Adamawa, Taraba, and
          Benue states. But sadly, since 1982, the Nigerian government has yet
          to complete the building of the Dasin Hausa dam. As a result, anytime
          the Cameroonian government releases excess water from the Lagdo dam,
          communities in Kogi, Benue, and northeastern states get flooded.
          According to the spokesperson of the National Emergency Management
          Agency (NEMA), Manzo Ezekiel, the 2022 flooding is the highest Nigeria
          has ever had since 2012.
        </StoryText>
      </StoryDetails>
    </Story>
  );
};

export default ThirdStoryPage;
