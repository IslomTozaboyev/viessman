import styled from "styled-components";

const ListWrapper = styled.div`
  ul {
    list-style-type: none;
    li {
      a {
        color: black;
        &:hover {
          color: #fd3c22;
        }
        .list {
          padding: 0 !important;
        }
      }
    }
  }
`;
export default ListWrapper;
