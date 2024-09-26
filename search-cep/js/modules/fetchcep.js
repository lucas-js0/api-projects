// export default function initFetchCep() {
//   const searchInput = document.getElementById('search')
//   const searchButton = document.getElementById('searchButton')

//   async function handleClickToFetchCEP() {
//     try {
//       const cep = searchInput.value
//       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       const json = await response.json()

//       addValues(json)
//     } catch (error) {
//       console.log('Um erro ocorreu.')
//     }
//   }

//   function addValues(json) {
//     console.log(json.bairro)
//   }

//   searchButton.addEventListener('click', handleClickToFetchCEP)
// }
