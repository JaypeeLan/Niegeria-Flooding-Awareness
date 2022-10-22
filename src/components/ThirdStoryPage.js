import styled from "styled-components";
import {Fade} from 'react-reveal'

const Story = styled.section`
  display: flex;
  align-items: center;

  background-color: #000;
  padding: 50px;

  @media screen and (max-width: 1253px) {
    flex-direction: column;
    padding: 10px;
    margin-bottom: 2rem;
  }
`;

const StoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  max-width: 90%;

  @media screen and (max-width: 444px) {
    padding-top: 4rem;
  }
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

  @media screen and (max-width: 362px) {
    line-height: normal;
    text-align: start;
  }
`;

const ThirdStoryPage = () => {
  return (
    <Story>
      <StoryDetails>
        <Fade delay={100} duration={1000} top>
          <StoryHeading>The Dasin Hausa dam in Nigeria</StoryHeading>
        </Fade>

        <Fade delay={400} duration={1500} bottom>
          <StoryText>
            The Dasin Hausa dam in Nigeria The Dasin Hausa dam was supposed to
            be two and a half the size of the Lagdo dam, which was built to
            supply electricity to the northern part of Cameroon and allow the
            irrigation of 15,000 hectares of crops downstream. Like the Lagdo
            dam, the dam project sited at the Dasin Village of Fufore Local
            Government Area of Adamawa State was supposed to generate 300
            megawatts of electricity and irrigate about 150,000 hectares of land
            in Adamawa, Taraba, and Benue states. But sadly, since 1982, the
            Nigerian government has yet to complete the building of the Dasin
            Hausa dam. As a result, anytime the Cameroonian government releases
            excess water from the Lagdo dam, communities in Kogi, Benue, and
            northeastern states get flooded. According to the spokesperson of
            the National Emergency Management Agency (NEMA), Manzo Ezekiel, the
            2022 flooding is the highest Nigeria has ever had since 2012.
          </StoryText>
        </Fade>
        
      </StoryDetails>
    </Story>
  );
};

export default ThirdStoryPage;
