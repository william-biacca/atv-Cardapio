// Recebendo a nova Prop: adicionarItem (que é uma Função enviada pelo App.jsx!)
function ItemCardapio({ nome, descricao, preco, adicionarItem }) {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: '#fafafa',
            }}>
            <h2 style={{ margin: '0 0 5px 0', color: '#333' }}>{nome}</h2>
            <p style={{ margin: '0 0 10px 0', color: '#777', fontSize: '0.9rem' }}>{descricao}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: '#27ae60', fontSize: '1.2rem' }}>
                    R$ {Number(preco).toFixed(2).replace('.', ',')}
                </strong>

                {/* Executando a função mágica que veio de fora (do App.jsx) */}
                <button
                    onClick={adicionarItem}
                    style={{
                        backgroundColor: '#7b43ff',
                        color: '#165cb8',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}>
                    + Adicionar
                </button>
            </div>
        </div>
    );
}

export default ItemCardapio;
