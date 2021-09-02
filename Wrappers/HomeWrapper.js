import styled from "styled-components";

const HomeWrapper = styled.div`
  .home {
    background-image: url("viessman.jpg");
    height: 80vh;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
  }
  .black {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 20, 46, 0.2);
  }
  .box {
    background: linear-gradient(90deg, rgb(9, 20, 46), rgba(9, 20, 46, 0.667));
    box-shadow: rgb(0 5 43 / 20%) 0px 10px 20px 0px;
    color: white;
    margin-top: 150px;
    border-radius: 10px;
    position: relative;
    h1 {
      font-size: 40px;
      margin-bottom: 15px;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      margin-bottom: 25px;
    }
    .btn {
      background-color: rgb(253, 60, 34);
      color: #fff;
      padding: 10px 20px;
      outline: none;
      &:hover {
        background-color: #e61f02;
        box-shadow: 0 0 10px #e61f02;
      }
    }
  }

  .firma {
    margin-top: 50px;
    background-color: #efe7ee;
    h1 {
      font-weight: 700;
      margin-bottom: 20px;
      color: rgb(0, 5, 43);
    }
  }
  .boxes {
    .card {
      border-radius: 10px;
      overflow: hidden;
      padding-bottom: 40px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
      height: 400px;
      .links:hover {
        color: red !important;
      }
      img {
        min-height: 200px;
        object-fit: cover;
      }
    }
  }
`;
export default HomeWrapper;
