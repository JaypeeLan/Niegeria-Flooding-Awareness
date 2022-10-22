import { useState } from "react";
import styled from "styled-components";
import video from "../files/Floods-in-Nigeria-spark-fears-of-food-crisis.mp4";
import Modal from "react-modal";
import { Fade } from "react-reveal";

const Story = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #000;
  padding: 50px;
  padding-top: 11rem;

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
  padding-bottom: 20px;
`;

const StoryText = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 3vw, 20px);
  text-align: justify;
  line-height: 40px;

  @media screen and (max-width: 362px) {
    line-height: 27px;
    text-align: start;
  }
`;

const StoryVideo = styled.div`
  padding: 20px;
  max-width: 100%;
`;

// ------------------------------------------
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

Modal.setAppElement(document.getElementById("modal"));

const SecondStoryPage = () => {
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
          <StoryHeading>The Lagdo Dam in Cameroon</StoryHeading>
        </Fade>

        <Fade delay={400} duration={1500} bottom>
          <StoryText>
            The construction of the Lagdo Dam located in Northern Cameroon
            started in 1977 and was completed in 1982. At inception, Cameroon
            and Nigeria had an agreement to build two dams such that when water
            is released from the Cameroonian dam, the Nigerian dam would contain
            it and prevent it from causing floods. So, to cushion the effect of
            possible flooding from the Lagdo dam in Cameroon, the Nigerian
            government agreed to build a shock-absorber dam tagged Dasin Hausa
            Dam in Adamawa State.
          </StoryText>
        </Fade>
      </StoryDetails>

      <div id="modal">
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
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/6276/6276642.png"
              alt="close"
            />
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

export default SecondStoryPage;
