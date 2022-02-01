import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Listagem from "./components/Listagem";
import { api } from "./service/api";

function App() {
  const [transactions, setTransactions] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const listagem = await api.get("/");
      setTransactions({ total: getTotal(listagem.data), list: listagem.data });
    };
    getData();
  }, []);

  const getTotal = (list) => {
    if (!list || list.length === 0) return 0;

    return list.reduce(
      (value, curr) =>
        curr.isRevenue ? value + curr.value : value - curr.value,
      0
    );
  };

  const handleCreate = async (data) => {
    const list = transactions.list;

    api
      .post("/", data)
      .then((response) => {
        list.push(response.data);
        setTransactions({ total: getTotal(list), list });
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  };

  return (
    <>
      <Header />
      <Form onCreate={handleCreate} />
      {transactions && (
        <Listagem
          transactions={transactions}
          setTransactions={setTransactions}
          getTotal={getTotal}
        />
      )}
    </>
  );
}

export default App;
