import SmallContainer from "./SmallContainer.jsx";
import Container from "./Container";
const InBus = () => {
  return (
    <>
      <Container>
        <SmallContainer title="Route : ">Pune to Solapur</SmallContainer>

        <SmallContainer title="Bus No. : ">MH-13 CD 1552</SmallContainer>

        <SmallContainer title="Current Location: ">
          Bhigwan at 8pm
        </SmallContainer>

        <SmallContainer title="Msg : ">No seat available</SmallContainer>
      </Container>
    </>
  );
};

export default InBus;
