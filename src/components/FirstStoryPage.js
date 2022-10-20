import React from "react";
import styled from "styled-components";

const FirstStory = styled.section`
  height: 100vh;
  display: grid;
  text-align: center;
  background: url("https://f5p3e9e4.stackpathcdn.com/wp-content/uploads/2022/10/Hydro-Power-Dam-680x365_c.jpg")
    no-repeat center center;
  background-size: cover;
  padding: 0;
  margin: 0;
`;

const Story = styled.div`
  padding: 50px;
  display: grid;
  place-items: center;
`;

const FirstStoryText = styled.p`
  color: #000;
  font-weight: 700;
  font-size: clamp(18px, 3vw, 35px);
   text-align: justify;
   color: navy;
`;

const FirstStoryPage = () => {
  return (
    <FirstStory>
      <Story>
        <FirstStoryText>
          In September, the National Emergency Management Agency and the Nigeria
          Hydrological Services Agency (NHISA) informed Nigerians that “the
          Lagdo Dam operators in the Republic of Cameroon, had commenced the
          release of excess water from the reservoir on September 13, 2022.” <br/>The
          agencies said they were “aware that the released water cascades down
          into Nigeria, through River Benue and its tributaries, thereby
          overwhelming communities that have already been impacted by heavy
          rainfall”. But the flooding affecting Kogi state particularly did not
          start today. The problem can be traced back to the 80's when the
          Nigerian government failed to honour an agreement it had with the
          Cameroonian authorities.
        </FirstStoryText>
      </Story>
    </FirstStory>
  );
};

export default FirstStoryPage;
