// Carrinho simples
let carrinho = [];

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    criarModal(); // Criar o modal
    
    // Eventos dos botões carrinho
    document.querySelectorAll('.btn-cart').forEach(botao => {
        botao.addEventListener('click', function() {
            const nomeProduto = this.closest('.product-card').querySelector('h3').textContent;
            adicionarCarrinho(nomeProduto);
        });
    });

    // Eventos dos botões info
    document.querySelectorAll('.btn-info').forEach(botao => {
        botao.addEventListener('click', function() {
            const nomeProduto = this.closest('.product-card').querySelector('h3').textContent;
            mostrarInfo(nomeProduto);
        });
    });

    // Ver carrinho
    document.querySelector('.cart-link').addEventListener('click', function() {
        verCarrinho();
    });

    // Navegação suave
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const secao = document.querySelector(this.getAttribute('href'));
            if (secao) secao.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Criar modal
function criarModal() {
    const modalHTML = `
        <div id="modal" class="modal">
            <div class="modal-conteudo">
                <span id="fechar-modal" class="fechar">&times;</span>
                <h2 id="modal-titulo"></h2>
                <div id="modal-corpo"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Fechar modal
    document.getElementById('fechar-modal').addEventListener('click', fecharModal);
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) fecharModal();
    });
}

// Mostrar modal
function mostrarModal(titulo, conteudo) {
    document.getElementById('modal-titulo').innerHTML = titulo;
    document.getElementById('modal-corpo').innerHTML = conteudo;
    document.getElementById('modal').style.display = 'block';
}

// Fechar modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Adicionar ao carrinho
function adicionarCarrinho(nome) {
    const produto = produtos[nome];
    if (!produto) return;
    
    carrinho.push({ nome: nome, preco: produto.preco });
    atualizarContador();
    mostrarNotificacao(`${nome} adicionado ao carrinho!`, 'sucesso');
}

// Atualizar contador
function atualizarContador() {
    const contador = document.querySelector('.cart-count');
    contador.textContent = carrinho.length;
    
    // Animação no contador
    contador.style.transform = 'scale(1.3)';
    contador.style.backgroundColor = '#10b981';
    setTimeout(() => {
        contador.style.transform = '';
        contador.style.backgroundColor = '';
    }, 300);
}

// Ver carrinho
function verCarrinho() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Carrinho vazio!', 'info');
        return;
    }
    
    let total = 0;
    let conteudo = '<div class="carrinho-lista">';
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        conteudo += `
            <div class="item-carrinho">
                <div class="item-info">
                    <strong>${item.nome}</strong>
                    <span class="item-preco">€${item.preco.toFixed(2)}</span>
                </div>
                <button onclick="removerItem(${index})" class="btn-remover"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
    
    conteudo += `
        </div>
        <div class="carrinho-total">
            <h3>Total: €${total.toFixed(2)}</h3>
        </div>
        <div class="carrinho-acoes">
            <button onclick="limparCarrinho()" class="btn-limpar">Limpar Carrinho</button>
            <button onclick="finalizarCompra()" class="btn-finalizar">Finalizar Compra</button>
        </div>
    `;
    
    mostrarModal('<i class="fas fa-shopping-cart"></i> Meu Carrinho', conteudo);
}

// Remover item do carrinho
function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarContador();
    verCarrinho(); // Recarregar o modal
    mostrarNotificacao('Item removido!', 'info');
}

// Limpar carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarContador();
    fecharModal();
    mostrarNotificacao('Carrinho limpo!', 'info');
}

// Finalizar compra
function finalizarCompra() {
    if (carrinho.length === 0) return;
    
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    carrinho = [];
    atualizarContador();
    fecharModal();
    mostrarNotificacao(`Compra finalizada! Total: €${total.toFixed(2)}`, 'sucesso');
}

// Mostrar notificação
function mostrarNotificacao(texto, tipo = 'info') {
    // Remover notificação anterior
    const anterior = document.querySelector('.notificacao');
    if (anterior) anterior.remove();
    
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao ${tipo}`;
    notificacao.textContent = texto;
    
    document.body.appendChild(notificacao);
    
    // Mostrar com animação
    setTimeout(() => notificacao.classList.add('mostrar'), 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notificacao.classList.remove('mostrar');
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Mostrar informações
function mostrarInfo(nome) {
    const produto = produtos[nome];
    if (!produto) return;
    
    const conteudo = `
        <div class="info-produto">
            <p class="preco">€${produto.preco.toFixed(2)}</p>
            <p class="descricao">${produto.descricao}</p>
            <button onclick="adicionarCarrinho('${nome}'); fecharModal();" class="btn-adicionar">
                <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
    
    mostrarModal(produto.nome, conteudo);
}