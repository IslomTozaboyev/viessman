import styled from "styled-components";

const ServicesWrapper = styled.div`
  .box {
    border-radius: 10px;
    overflow: hidden;
    .photo {
      object-fit: cover;
      object-position: center center;
      min-height: 200px !important;
      border-radius: 10px 10px 0 0;
    }
  }
  .text:hover {
    color: red !important;
  }
`;
export default ServicesWrapper;
