import React, { useState } from "react";

import Radio from "../Radio";

import { StyledForm, RadioDiv } from "./styles";

function Form(props) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(undefined);
  const [isRevenue, setIsRevenue] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !value || isRevenue === null) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    props.onCreate({
      description,
      value,
      isRevenue,
    });
    clearForm();
  };

  const clearForm = () => {
    setDescription("");
    setValue("");
    isRevenue(null);
  };

  const onChangeRadio = (id) => {
    setIsRevenue(id === "entrada");
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="nome" id="lblTransaction">
          Transação:
        </label>
        <input
          id="nome"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="transaction" id="lblTransaction">
          Valor:
        </label>
        <span className="textbox">
          R$
          <input
            id="transaction"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.currentTarget.value))}
          />
        </span>
      </div>
      <RadioDiv>
        <Radio
          name="tipo"
          id="entrada"
          text="Receita"
          checked={isRevenue === true}
          onClick={() => onChangeRadio("entrada")}
        />
        <Radio
          name="tipo"
          id="saida"
          text="Despesa"
          checked={isRevenue === false}
          onClick={() => onChangeRadio("saida")}
        />
      </RadioDiv>
      <button type="submit">Confirmar</button>
    </StyledForm>
  );
}

export default Form;
