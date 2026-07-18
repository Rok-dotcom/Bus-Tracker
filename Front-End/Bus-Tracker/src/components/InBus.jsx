import SmallContainer from "./SmallContainer.jsx";
import Container from "./Container";

const InBus = () => {
  // these below value Title and all are hardcoded
  // make it user input
  //
  return (
    <>
      {/* should add forms in it to take input from the user
       */}
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
