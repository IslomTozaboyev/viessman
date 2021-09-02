import styled from "styled-components";

const HomeBoxWrapper = styled.div`
  .cards {
    width: 100%;
    .cardd {
      width: 100%;
      height: 350px;
      position: relative;
      border-radius: 6px;
      box-shadow: rgb(0 0 0 / 40%) 20px 20px 75px;
      overflow: hidden;
      transition: all 0.4s ease 0s;
      cursor: pointer;
      &:hover {
        transform: translateY(-5px);
        background-color: black;
        .black {
          background: linear-gradient(
            rgba(9, 20, 46, 0.533) 0%,
            rgba(9, 20, 46, 0.967) 50%,
            rgb(9, 20, 46) 100%
          );
          transition: 0.5s;
        }
      }
      .black {
        position: absolute;
        top: 0%;
        left: 0px;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          rgba(9, 20, 46, 0.333) 0%,
          rgba(9, 20, 46, 0.667) 50%,
          rgb(9, 20, 46) 100%
        );
        transition: all 0.7s ease 0s;
      }
    }
    .title {
      position: absolute;
      width: 100%;
      left: 0px;
      bottom: 20px;
      color: white;
      text-align: center;
      transition: all 0.7s ease 0s;
    }
  }
`;
export default HomeBoxWrapper;
