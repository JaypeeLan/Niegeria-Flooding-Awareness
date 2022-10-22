import React from "react";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";

const FirstStory = styled.section`
  display: grid;
  text-align: center;
  background: url("https://nation-media-assets.storage.googleapis.com/wp-content/uploads/2022/10/19071509/FfX_ZubWAAAYZDy-1024x576.jpg")
    no-repeat center center;
  background-size: cover;
  padding: 0;
  margin: 0;
  color: #ffffff;
`;

const Story = styled.div`
  padding: 50px;
  display: grid;
  place-items: center;

  @media screen and (max-width: 362px) {
    padding: 20px;
  }
`;

const FirstStoryText = styled.p`
  font-weight: 700;
  font-size: clamp(18px, 3vw, 35px);
  text-align: justify;
  line-height: 40px;

  @media screen and (max-width: 457px) {
    line-height: 29px;
    text-align: start;
  }
`;

const FirstStoryPage = () => {
  return (
    <FirstStory>
      <Story>
        <Rotate delay={500} duration={2000} top left>
          <FirstStoryText>
            In September, the National Emergency Management Agency and the
            Nigeria Hydrological Services Agency (NHISA) informed Nigerians that
            “the Lagdo Dam operators in the Republic of Cameroon, had commenced
            the release of excess water from the reservoir on September 13,
            2022.” <br />
            The agencies said they were “aware that the released water cascades
            down into Nigeria, through River Benue and its tributaries, thereby
            overwhelming communities that have already been impacted by heavy
            rainfall”. But the flooding affecting Kogi state particularly did
            not start today. The problem can be traced back to the 80's when the
            Nigerian government failed to honour an agreement it had with the
            Cameroonian authorities.
          </FirstStoryText>
        </Rotate>
      </Story>
    </FirstStory>
  );
};

export default FirstStoryPage;
