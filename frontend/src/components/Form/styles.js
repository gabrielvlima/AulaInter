import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 16px;
  background: #e0e0e0;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  min-width: 340px;
  margin: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  #lblTransaction,
  #entrada {
    margin-right: 8px;
  }

  label,
  input,
  span,
  button {
    font-size: 24px;
  }

  span.textbox {
    display: inline-block;
    background-color: #fff;
    color: #888;
    line-height: 20px;
    height: 20px;
    padding: 3px;
    border: 1px #888 solid;
    height: 30px;
    margin-top: 16px;

    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }

  span.textbox input {
    margin-left: 4px;
    border: 0px;
    background-color: #fff;
    outline: none;
    width: 260px;

    @media (min-width: 1024px) {
      width: 100px;
    }
  }

  button {
    border: none;
    background: aqua;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const RadioDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  margin: 16px;
  width: 40%;

  @media (min-width: 1024px) {
    width: auto;
    height: 60px;
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: column;
  }
`;
