import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="cartinha-wrap">
    <article class="cartinha" aria-live="polite">
      <header class="cartinha-header">
        <h1>Uma cartinha fofa</h1>
      </header>
        <section class="cartinha-body">
          <p class="message">Vim por meio desta cartinha pedir um favor: poderia, por obséquio,<br/>me passar uma cópia do banco de dados, a mesma que eu havia falado que queria toda segunda,<br/> ✨não e sua culpa pois eu havia esquecida de pedir a mesma✨</p>
          <p class="details">Pequenos gestos fazem grandes dias — sorria e aproveite!</p>
        </section>
      <footer class="cartinha-footer">
        <p class="from">Com carinho, <strong>🐱Vitor🐱</strong></p>
        <button id="toggle" class="btn">Abrir / Fechar</button>
      </footer>
    </article>
  </main>
`

const cart = document.querySelector('.cartinha')
const btn = document.getElementById('toggle')
const message = document.querySelector('.message')

// initial closed state
btn.textContent = 'Abrir'
btn.setAttribute('aria-expanded', 'false')
message.setAttribute('aria-hidden', 'true')

btn.addEventListener('click', () => {
  const opened = cart.classList.toggle('open')
  btn.textContent = opened ? 'Fechar' : 'Abrir'
  btn.setAttribute('aria-expanded', String(opened))
  message.setAttribute('aria-hidden', String(!opened))
})
