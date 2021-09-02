import styled from "styled-components";

const BackWrapper = styled.div`
  .back {
    background: url("services.jpg");
    height: 70vh;
    background-size: cover;
    position: relative;
    overflow: hidden;
    background-attachment: fixed;
  }
  .text_back {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    justify-content: center;
  }

  .text {
    font-size: 70px;
    color: white;
  }
`;
export default BackWrapper;
