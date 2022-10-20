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

const StoryHeading = styled.h2`
  font-size: clamp(25px, 3.5vw, 40px);
  padding-bottom: 20px;
`;

const FirstStoryText = styled.p`
  color: #000;
  font-weight: 700;
  font-size: clamp(18px, 3vw, 35px);
  text-align: justify;
  color: navy;
`;

const Donations = () => {
  return (
    <FirstStory>
      <Story>
        <StoryHeading>How can we help?</StoryHeading>

        <FirstStoryText>
        
        </FirstStoryText>
      </Story>
    </FirstStory>
  );
};

export default Donations;
