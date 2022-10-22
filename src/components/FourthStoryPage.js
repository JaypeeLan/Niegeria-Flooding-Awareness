import styled from "styled-components";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";

import video from "../files/nigeria-flood.mp4";

const Story = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #000;
  padding: 50px;

  @media screen and (max-width: 1253px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }
`;

const StoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
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

  @media screen and (max-width: 1253px) {
    line-height: normal;
  }
`;

const StoryVideo = styled.div`
  padding: 20px;
  max-width: 100%;
`;

// -------------------------------------
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("mode"));

const FourthStoryPage = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // ---------------------------------------------------------------------
  return (
    <Story>
      <StoryDetails>
        <Fade delay={100} duration={1000} top>
          <StoryHeading>Effects of the flood so far</StoryHeading>
        </Fade>

        <Fade delay={400} duration={1500} bottom>
          <StoryText>
            With the recent rainfall witnessed in Nigeria, coupled with the
            opening of the dam, over 100,000 Nigerians have been displaced, at
            least 300 killed and more than 500,000 others affected in the past
            few months. Data released in Abuja, on Monday, by the National
            Emergency Management Agency and the Nigeria Hydrological Services
            Agency, at an emergency technical meeting on flood situation across
            the country disclosed this. “Based on our communication with NIHSA,
            the Lagdo Dam operators in the Republic of Cameroon, had commenced
            the release of excess water from the reservoir on September 13,
            2022,” the Director-General, NEMA, Mustapha Ahmed, stated while
            speaking at the meeting. <br />
            Benue State is called the food basket of Nigeria. With the
            destruction of several hectares of farm land, the food crisis in
            Nigeria will worsen.
          </StoryText>
        </Fade>
      </StoryDetails>
      {/* --------------------------------------------------------- */}

      <div id="mode">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Video Modal"
        >
          <button
            onClick={closeModal}
            style={{ position: "relative", left: "32rem", padding: "5px" }}
          >
            <img style={{height: "30px", width: "30px"}} src="https://cdn-icons-png.flaticon.com/512/6276/6276642.png" alt="close"/>
          </button>
          <StoryVideo onClick={openModal}>
            <video width="100%" height="300" controls>
              <source src={video} type="video/mp4" />
            </video>
          </StoryVideo>
        </Modal>

        {/* ------- */}
        <StoryVideo>
          <video width="100%" height="300" controls>
            <source src={video} type="video/mp4" />
          </video>
        </StoryVideo>

        <button
          onClick={openModal}
          style={{
            marginLeft: "35px",
            border: "none",
            color: "aqua",
            fontSize: "16px",
            backgroundColor: "transparent",
          }}
        >
          Click here to watch video{" "}
        </button>
      </div>
    </Story>
  );
};

export default FourthStoryPage;
