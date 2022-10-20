import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from "@coreui/react";

const Cards = () => {
  return (
    <CCard style={{ width: "18rem" }}>
      <CCardImage orientation="top" src="/images/react.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CCardText>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
      <CCardBody>
        <CCardLink href="#">Card link</CCardLink>
        <CCardLink href="#">Another link</CCardLink>
      </CCardBody>
    </CCard>
  );
};

export default Cards;
