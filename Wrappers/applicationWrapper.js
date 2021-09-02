import styled from "styled-components";

const ApplicationWrapper = styled.div`
  .padding {
    padding-top: 100px;
  }
  .checkbox {
    width: 18px;
    height: 18px;
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
  .label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: -11px;
    margin-right: 16px;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    .input_card {
      display: block;
      margin-top: 30px;
      border-radius: 10px;
      border: 1px solid rgb(238, 238, 238);
      padding: 5px 15px 20px;
      box-shadow: rgb(0 0 0 / 7%) 0px 4px 8px 0px;
    }
    .input_subtitle {
      color: rgba(0, 0, 0, 0.54);
      padding: 0;
      font-size: 1rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0.00938em;
    }
    .checkbox_row {
      flex-direction: row;
    }
    .form_control {
      display: block;
      margin-top: 30px;
      border-radius: 10px;
      border: 1px solid rgb(238, 238, 238);
      padding: 5px 15px 20px;
      box-shadow: rgb(0 0 0 / 7%) 0px 4px 8px 0px;
      .form_text {
        color: rgba(0, 0, 0, 0.54);
        padding: 0;
        font-size: 1rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1;
        letter-spacing: 0.00938em;
      }
    }
  }
`;
export default ApplicationWrapper;
