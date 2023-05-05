const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const tamanho = document.querySelector('#size').value;
  const quantidade = document.querySelector('#quantity').value;
  
  const item = {
    nome: 'Nome do Produto',
    tamanho: tamanho,
    quantidade: quantidade,
    preco: 50 // Preço do produto em reais
  };
  
  let carrinho = localStorage.getItem('carrinho');
  if (carrinho) {
    carrinho = JSON.parse(carrinho);
    carrinho.push(item);
  } else {
    carrinho = [item];
  }
  
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
  alert('Produto adicionado ao carrinho!');
});
