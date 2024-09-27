import createCards from './createCards.js'

export default function initFetchCep() {
  const searchInput = document.querySelector('.input-pesquisar')
  const searchButton = document.querySelector('.buttonSearch')

  async function handleClickToFetchCEP() {
    try {
      const cep = searchInput.value
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const json = await response.json()

      createCards(json)
    } catch (error) {
      console.log('Um erro ocorreu.', error)
    }
  }

  searchButton.addEventListener('click', handleClickToFetchCEP)
}
