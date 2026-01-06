# SI-website
Site de vendas associado à disciplina de SI

Projeto integrado com HTML, CSS, JS e PostgreSQL.

## Javascript
**Data:** 06 Janeiro 2026  
**Atualização:** 06 Janeiro 2026 - Interface Visual Melhorada

### Funcionalidades Implementadas:

#### **1. Carrinho de Compras Interativo** 🛒
- **Sistema completo** para adicionar/remover produtos
- **Contador dinâmico** com animação no navbar
- **Modal elegante** com lista organizada e total
- **Gestão individual** de itens (remover um por um)
- **Finalização de compra** com feedback visual

#### **2. Sistema de Modais** 📱
- **Modal de informações** para cada produto
- **Modal do carrinho** com design profissional
- **Botões interativos** dentro dos modals
- **Fecho por clique** fora ou no ❌

#### **3. Notificações Visuais** 🔔
- **Notificações deslizantes** do lado direito
- **Cores diferentes** por tipo (sucesso, info, erro)
- **Animações suaves** de entrada e saída
- **Remoção automática** após 3 segundos

#### **4. Navegação Suave** 🧭
- **Scroll animado** entre secções
- **Links ativos** na navbar
- **Experiência fluida** de navegação

### Ficheiros e Estrutura:
```
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── produtos.js         # Base de dados dos produtos
├── script.js          # Lógica JavaScript principal
└── README.md          # Documentação
```

### Conceitos JavaScript Aplicados (com Exemplos):

#### **1. DOM Manipulation**
```javascript
// Selecionar elementos
document.querySelector('.cart-count')
document.querySelectorAll('.btn-cart')

// Alterar conteúdo
contador.textContent = carrinho.length
modal.style.display = 'block'

// Criar elementos dinamicamente
document.createElement('div')
document.body.appendChild(notificacao)
```
**Localização:** `script.js` linhas 15-25, 35-40, 95-110

#### **2. Event Listeners**
```javascript
// Responder a cliques
botao.addEventListener('click', function() {
    const nomeProduto = this.closest('.product-card').querySelector('h3').textContent;
    adicionarCarrinho(nomeProduto);
});

// Eventos de fecho do modal
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) fecharModal();
});
```
**Localização:** `script.js` linhas 8-14, 48-52

#### **3. Arrays e Métodos**
```javascript
// Gerir carrinho como array
let carrinho = [];
carrinho.push({ nome: nome, preco: produto.preco });
carrinho.splice(index, 1); // Remover item
carrinho.forEach((item, index) => { ... }); // Iterar
const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
```
**Localização:** `script.js` linhas 1, 60-65, 80-90

#### **4. Objects e Propriedades**
```javascript
// Estrutura de dados dos produtos
const produtos = {
    'OctoSkull': {
        nome: 'OctoSkull',
        preco: 39.99,
        descricao: 'Uma caveira impressa...'
    }
};

// Acesso às propriedades
const produto = produtos[nome];
produto.preco, produto.descricao
```
**Localização:** `produtos.js` todas as linhas

#### **5. Functions e Reutilização**
```javascript
// Funções organizadas por funcionalidade
function adicionarCarrinho(nome) { ... }
function atualizarContador() { ... }
function mostrarModal(titulo, conteudo) { ... }
function mostrarNotificacao(texto, tipo) { ... }
```
**Localização:** `script.js` linhas 58, 66, 42, 108

#### **6. Template Literals**
```javascript
// Criar HTML dinamicamente
const conteudo = `
    <div class="item-carrinho">
        <strong>${item.nome}</strong>
        <span>€${item.preco.toFixed(2)}</span>
        <button onclick="removerItem(${index})">
            <i class="fas fa-trash"></i>
        </button>
    </div>
`;
```
**Localização:** `script.js` linhas 75-85, 125-135

#### **7. Conditional Logic**
```javascript
// Validações e condições
if (!produto) return;
if (carrinho.length === 0) {
    mostrarNotificacao('Carrinho vazio!', 'info');
    return;
}
```
**Localização:** `script.js` linhas 60, 70-75

#### **8. setTimeout e Animações**
```javascript
// Animações temporais
contador.style.transform = 'scale(1.3)';
setTimeout(() => {
    contador.style.transform = '';
}, 300);

// Remoção automática de notificações
setTimeout(() => notificacao.classList.add('mostrar'), 100);
setTimeout(() => notificacao.remove(), 3000);
```
**Localização:** `script.js` linhas 67-72, 115-120

### Interface e UX:

#### **Notificações Inteligentes:**
- **Verde:** Produto adicionado, compra finalizada
- **Azul:** Informações gerais, carrinho vazio
- **Vermelho:** Erros (quando implementados)

#### **Modal do Carrinho:**
- **Lista scrollável** para muitos itens
- **Botões individuais** de remoção
- **Total destacado** com fundo escuro
- **Ações principais** (Limpar/Finalizar)

#### **Responsividade:**
- **Design adaptável** a diferentes tamanhos
- **Botões touch-friendly** para mobile
- **Animações suaves** em todos os dispositivos

### Como Testar:

1. **📱 Adicionar Produtos:** Clique nos ícones 🛒 dos produtos
2. **ℹ️ Ver Detalhes:** Clique nos ícones ℹ️ para modal de informações  
3. **🛒 Gerir Carrinho:** Clique no ícone carrinho (topo direito)
4. **🗑️ Remover Itens:** Use os botões lixo individuais
5. **✅ Finalizar:** Botão verde para completar compra
6. **🧭 Navegar:** Links da navbar com scroll suave

### Objetivo Educativo:
**Demonstrar conceitos fundamentais do JavaScript moderno de forma progressiva:**
- Começar com **manipulação básica** do DOM
- Evoluir para **gestão de estados** (carrinho)
- Implementar **interfaces dinâmicas** (modals/notificações)
- Aplicar **boas práticas** de organização de código
- Criar **experiências de utilizador** profissionais
