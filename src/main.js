import './style.css'
import mamaco from '../public/mamaco.png'

document.querySelector('#app').innerHTML = `
  <main class="cartinha-wrap">
    <article class="cartinha" aria-live="polite">
      <header class="cartinha-header">
        <h1>Uma cartinha fofa</h1>
      </header>
        <section class="cartinha-body">
        <img src="${mamaco}" alt="Mamaco sorrindo" class="cartinha-image" />
        </section>
      <footer class="cartinha-footer">
        <p class="from">Com carinho, <strong>🐱Vitor🐱</strong></p>
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
