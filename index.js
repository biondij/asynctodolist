
load()
const loading = document.getElementById('loading')
const lista = document.querySelector('ul')

function load() {
    setTimeout(async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const data = await response.json()
            lista.className = 'list-group mt-3'
            data.forEach((todo) => {
                const elementoLista = document.createElement('li')
                elementoLista.className = 'list-group-item d-flex align-items-center justify-content-between'
                elementoLista.innerHTML = `<div>${todo.id} - ${todo.title}</div>`

                const badge = document.createElement('span')
                badge.className = 'badge ms-2'

                if (todo.completed === true) {
                    badge.classList.add('text-bg-success');
                    badge.innerHTML = 'completed'
                } else {
                    badge.classList.add('text-bg-warning');
                    badge.innerHTML = 'not completed'
                }
                elementoLista.append(badge)
                lista.append(elementoLista)
            });
        } catch (error) {
            alert('Erro na requisição')
        }
        finally {
            loading.style.display = 'none'
        }
    }, 2000)
}

const btnReload = document.getElementById('reload')
btnReload.addEventListener('click', () => {
    loading.style.display = 'block'
    lista.innerHTML = ''
    load()
})