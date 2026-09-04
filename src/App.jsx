import { useEffect, useState } from 'react';
import ItemCardapio from './components/ItemCardapio';
import './App.css';

function App() {
    const [itensCarrinho, setItensCarrinho] = useState(0);
    const [cardapio, setCardapio] = useState([]);
    const [endereco, setEndereco] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    function finalizarCompra() {
        if (itensCarrinho === 0) {
            setMensagemModal('Coloque algo no carrinho!');
            setModalAberto(true);
            return;
        }

        if (endereco === '') {
            setMensagemModal('Informe o endereço de entrega!');
            setModalAberto(true);
            return;
        }

        setMensagemModal('Pedido finalizado com sucesso!');
        setModalAberto(true);
        setItensCarrinho(0);
        setEndereco('');
    }

    useEffect(() => {
        setTimeout(() => {
            setCardapio([
                { id: 11, nome: 'Combo Master', descricao: 'Dois lanches + refri 2L', preco: 65.0 },
                {
                    id: 12,
                    nome: 'Hambúrguer de Grão de Bico',
                    descricao: 'Opção Vegana',
                    preco: 28.0,
                },
                {
                    id: 13,
                    nome: 'Açaí na Tigela',
                    descricao: '500ml com morango e leite condensado',
                    preco: 18.0,
                },
            ]);
        }, 2000);
    }, []);

    if (cardapio.length === 0) {
        return (
            <div className="loading-container">
                <div className="loading-card">Carregando cardápio...</div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="app-card">
                {modalAberto && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <p className="modal-text">{mensagemModal}</p>
                            <button className="modal-button" onClick={() => setModalAberto(false)}>
                                Entendido
                            </button>
                        </div>
                    </div>
                )}

                <header className="header">
                    <div>
                        <h1 className="title">Senai Delivery 🍔</h1>
                        <p className="subtitle">Sabor e rapidez na sua porta</p>
                    </div>
                    <div className="cart-badge">
                        🛒 <span>{itensCarrinho}</span>
                    </div>
                </header>

                <main>
                    <h2 className="section-title">Cardápio</h2>
                    <div className="menu-list">
                        {cardapio.map((item) => (
                            <ItemCardapio
                                key={item.id}
                                nome={item.nome}
                                descricao={item.descricao}
                                preco={item.preco}
                                adicionarItem={() =>
                                    setItensCarrinho((itensAtuais) => itensAtuais + 1)
                                }
                            />
                        ))}
                    </div>

                    <section className="checkout-section">
                        <h2 className="section-title">Finalizar Pedido</h2>
                        <div className="checkout-form">
                            <input
                                type="text"
                                className="input"
                                value={endereco}
                                onChange={(evento) => setEndereco(evento.target.value)}
                                placeholder="Rua, número e bairro"
                                aria-label="Rua e Número da Entrega"
                            />
                            <button className="primary-button" onClick={finalizarCompra}>
                                Concluir Pedido
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
