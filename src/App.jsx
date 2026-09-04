import { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardapio';

function App() {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    console.log("Conectando ao servidor...");

    const timer = setTimeout(() => {
      setCardapio([
        { id: 101, nome: "Combo Master", descricao: "Dois lanches + refri 2L", preco: 65.00 },
        { id: 102, nome: "Hambúrguer de Grão de Bico", descricao: "Opção Vegana", preco: 28.00 },
        { id: 103, nome: "Açaí na Tigela", descricao: "500ml com morango e leite condensado", preco: 18.00 }
      ]);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Senai Delivery</h1>
      {cardapio.length === 0 ? (
        <h2> Carregando restaurante...</h2>
      ) : (
        cardapio.map((item) => (
          <ItemCardapio
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))
      )}
    </div>
  );
}

export default App;
