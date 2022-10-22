import styled from "styled-components";
import Cards from "./Cards";

const FirstStory = styled.section`
  display: grid;
  text-align: center;
  background: url("https://images.pexels.com/photos/3959485/pexels-photo-3959485.jpeg?auto=compress&cs=tinysrgb&w=1600")
    no-repeat center center;
  background-size: cover;
  background-color: black;
  padding: 0;
  margin: 0;
  color: #fff;
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

const StoryText = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 3vw, 20px);
  text-align: justify;
  line-height: 40px;
`;

const Donation = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1198px;
`;

const Donations = () => {
  return (
    <FirstStory>
      <Story>
        <StoryHeading>How can we help?</StoryHeading>

        <StoryText>
          Several individuals have taken up the challenge to raise funds to
          support the flood victims while we have a few non-profit organizations
          too who have shown interest. You can donate to any of them below. <br/>
          You can click on Learn more to see other methods to donate especially for people in diaspora.
        </StoryText>

        <Donation>
          <Cards
            name="Sly Foundation"
            acctName="The sly foundation"
            acctNumber="7611726010"
            bankName="FCMB"
            link="https://slyfoundation.org/"
          />
          <Cards
            name=" InnerCity Mission"
            acctName="InnerCity Mission For Children"
            acctNumber="1013117857"
            bankName="Zenith bank"
            link="https://theinnercitymission.ngo/video/hope-nigeria-benue-flood-victims/"
          />
          <Cards 
            name=" International Rescues Committee"
            acctName="Please click on the link below to donate"
        
            link="https://www.rescue.org/country/nigeria"
          />
          <Cards 
            name="Chief Foundation"
            acctName="Jonathan Irondi"
            acctNumber="0040825686"
            bankName="Guaranty Trust bank"
            link="https://twitter.com/gechife/status/1579889714144096265"
          />

          <Cards 
            name="Sesor Empowerment Foundation"
            acctName="Sesor Empowerment Foundation"
            acctNumber="0170089727"
            bankName="Guaranty Trust bank"
            link="https://sesorafrica.org/"
          />

        </Donation>
      </Story>
    </FirstStory>
  );
};

export default Donations;
