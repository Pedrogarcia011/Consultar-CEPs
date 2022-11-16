
const inputText = document.querySelector('input')
const buttonEl = document.querySelector('button')
const result = document.querySelector('#dados')
const textError = document.querySelector('p')


buttonEl.addEventListener('click', handleClick)

async function handleClick() {
    const cep = inputText.value

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()

        result.innerHTML = JSON.stringify(data)
        console.log(data);
        return data
    }catch (error) {
      textError.innerHTML = `Erro: ${error.message} CEP inválido`
    }
}
