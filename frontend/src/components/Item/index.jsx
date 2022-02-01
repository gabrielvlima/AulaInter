import React, { useState } from "react";

import Delete from "../../assets/delete";
import ArrowUp from "../../assets/arrowUp";
import ArrowDown from "../../assets/arrowDown";
import Edit from "../../assets/edit";
import Radio from "../Radio";
import { Button } from "../Button";
import { StyledForms } from "./styles";

export default function Item(props) {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [value, setValue] = useState(Number(props.value));
  const [isRevenue, setIsRevenue] = useState(props.isRevenue);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onEdit({
      id: props.id,
      description,
      value: Number(value),
      isRevenue,
    });
    setEditMode(false);
    console.log("saiu");
  };

  const onChangeRadio = (id) => {
    setIsRevenue(id === "entrada");
  };

  const handleCancel = () => {
    setEditMode(false);
    setDescription(props.description);
    setValue(Number(props.value));
    setIsRevenue(props.isRevenue);
  };

  return (
    <li className={isRevenue ? "entrada" : "saida"}>
      {editMode ? (
        <StyledForms onSubmit={onSubmit}>
          <input
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
          <div>
            <Radio
              name="tipo"
              id="entrada"
              text="Receita"
              checked={isRevenue}
              onClick={() => onChangeRadio("entrada")}
            />
            <Radio
              name="tipo"
              id="saida"
              text="Despesa"
              checked={!isRevenue}
              onClick={() => onChangeRadio("saida")}
            />
          </div>
          <div>
            <button onClick={handleCancel}>Cancelar</button>
            <button>Confirmar</button>
          </div>
        </StyledForms>
      ) : (
        <>
          <span>{description}</span>
          <div className="valueDiv">
            <span>R$ {Number(value).toFixed(2)}</span>
            {isRevenue ? <ArrowUp /> : <ArrowDown />}
          </div>
          <div>
            <Button onClick={() => props.onDelete(props.id)}>
              <Delete />
            </Button>

            <Button onClick={() => setEditMode(true)}>
              <Edit />
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
