import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #e61f02 !important;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px !important;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  .logo {
    height: 30px;
  }
  .btnn:hover {
    background-color: #fd3c22;
    color: #000;
  }
  .menu_navbar {
    display: flex;
    list-style-type: none;
    .navbar_link {
      padding: 10px;
      color: #fff;
      &:hover {
        color: #000;
      }
    }
  }
`;
export default HeaderWrapper;
