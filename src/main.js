import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="cartinha-wrap">
    <article class="cartinha" aria-live="polite">
      <header class="cartinha-header">
        <h1>Uma cartinha fofa</h1>
      </header>
        <section class="cartinha-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue pretium ex nec pulvinar. Aliquam tellus risus, sodales vitae libero non, faucibus egestas risus. Sed molestie aliquam maximus. Sed tristique, nulla ac fringilla sodales, elit magna iaculis nisi, vel tempus nisi quam vitae tortor. Duis ut elit tempus, convallis lorem vel, dictum mi. Proin cursus aliquam sem, et elementum magna malesuada quis. Cras eget lobortis mi. Duis magna dolor, condimentum sed elementum iaculis, lobortis eu eros.

Cras vitae orci rhoncus, dignissim ipsum non, porta turpis. In at nisi aliquam, iaculis ante quis, euismod lectus. Nullam id rutrum ipsum. Donec consectetur, mauris nec consequat consequat, dolor turpis bibendum mi, id luctus nulla ipsum quis urna. Aliquam viverra nunc ac justo convallis, et interdum arcu pellentesque. Curabitur eleifend a eros eu malesuada. Integer mi erat, viverra eget nisl sit amet, porta efficitur turpis. Proin aliquet quam ut posuere ullamcorper.


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
