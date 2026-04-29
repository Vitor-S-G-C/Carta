import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="cartinha-wrap">
    <article class="cartinha" aria-live="polite">
      <header class="cartinha-header">
        <p class="chancela">Capitania de Sao Vicente</p>
        <h1>Carta de Solicitacao</h1>
      </header>
      <section class="cartinha-body">
        Prezados Senhores, venho, por meio desta, solicitar o fornecimento de dois pães com ovo, bem como de um canudo. Outrossim, solicito que os referidos itens sejam acondicionados e transportados com o máximo zelo, observando-se rigorosamente as condições adequadas de higiene e integridade. Ademais, caso haja disponibilidade, rogo pela inclusão de uma unidade de Coca-Cola Zero.
      </section>
      <footer class="cartinha-footer">
        <p class="from">Subscrevo-me, com estima.</p>
        <button id="toggle" class="btn">Abrir / Fechar</button>
      </footer>
    </article>
  </main>
`

const cartinha = document.querySelector('.cartinha')
const btn = document.getElementById('toggle')
const message = document.querySelector('.cartinha-body')

// estado inicial
btn.textContent = 'Abrir'
btn.setAttribute('aria-expanded', 'false')
message.setAttribute('aria-hidden', 'true')
message.hidden = true

btn.addEventListener('click', () => {
  const opened = cartinha.classList.toggle('open')
  btn.textContent = opened ? 'Fechar' : 'Abrir'
  btn.setAttribute('aria-expanded', String(opened))
  message.setAttribute('aria-hidden', String(!opened))
  message.hidden = !opened
})
