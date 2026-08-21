import ItemCardapio from './components/ItemCardapio';

function App() {
    return (
        <div>
            <h1>Senai Delivery</h1>
            <ItemCardapio
                nome="X-Bacon"
                descricao="Delicioso sanduíche com bacon, queijo e molho especial."
                preco="R$ 15,00"
            />
            <ItemCardapio
                nome="Batata Frita"
                descricao="Porção de batatas fritas crocantes e douradas."
                preco="R$ 8,00"
            />
            <ItemCardapio
                nome="Refrigerante"
                descricao="Bebida gelada para acompanhar sua refeição."
                preco="R$ 5,00"
            />
        </div>
    );
}

export default App;
