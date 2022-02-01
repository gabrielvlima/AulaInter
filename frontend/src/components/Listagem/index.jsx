import React from "react";

import { StyledList } from "./styles";
import Item from "../Item";
import { api } from "../../service/api";

function Listagem(props) {
  const { transactions, setTransactions, getTotal } = props;

  const handleEdit = async (data) => {
    const list = transactions.list.map((item) =>
      item.id !== data.id ? item : data
    );

    const response = await api.put(`/${data.id}`, data);
    console.log("entrou");
    if (response.data) {
      setTransactions({ total: getTotal(list), list });
    }
  };

  const handleDelete = async (id) => {
    const list = transactions.list.filter((c) => c.id !== id);

    const response = await api.delete(`/${id}`);

    if (response.status === 200) {
      setTransactions({ total: getTotal(list), list });
    }
  };

  return (
    <StyledList>
      <div className="saldo">
        <span>
          Saldo atual: R${" "}
          <strong>{Number(transactions.total).toFixed(2)}</strong>
        </span>
      </div>
      <ul>
        {transactions.list.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            value={item.value}
            isRevenue={item.isRevenue}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </StyledList>
  );
}

export default Listagem;
