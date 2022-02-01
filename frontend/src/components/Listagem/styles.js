import styled from "styled-components";

export const StyledList = styled.div`
  background: #a0e0e0;
  padding: 16px;
  max-width: 1024px;
  min-width: 340px;
  margin: auto;

  span,
  label,
  button {
    font-size: 18px;
  }

  .saldo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  ul {
    overflow: scroll;
    max-height: 65vh;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    margin-top: 8px;
    border-radius: 8px;
  }

  li.entrada {
    background: lightgreen;
  }

  li.saida {
    background: lightcoral;
  }

  .valueDiv {
    display: flex;
    align-items: center;
    svg {
      margin-left: 8px;
      height: 20px;
    }
  }
`;
