const form = document.querySelector('#form')

form.addEventListener('submit',calculoImc)

function calculoImc(e){
    e.preventDefault()

    const inputAltura = document.getElementById('altura')
    const inputPeso = document.getElementById('peso')
    const resposta = document.getElementById('res')
    
    const altura = Number(inputAltura.value)
    const peso = Number(inputPeso.value)

    resposta.innerHTML = ''
    
    if(!altura){
        window.alert('Digite uma altura valido')
    }
    if(!peso){
        window.alert('Digite um peso valido')
    }

    const imc = peso / altura ** altura

    if(peso < 0 || altura < 0){
        window.alert('Digite valores válidos')
    }

    if(imc < 18.5){
        resposta.innerHTML += `<p> Seu IMC ${imc.toFixed(2)} </p>`
    }
    if (imc >= 18.5 && imc < 24.5){
        resposta.innerHTML += `<p> Seu IMC ${imc.toFixed(2)} </p>` 
    }
    if (imc >= 25 && imc < 29.9){
        resposta.innerHTML += `<p> Seu IMC ${imc.toFixed(2)} </p>`
    }
    if(imc >= 30 && imc < 39.9){
        resposta.innerHTML += `<p> Seu IMC ${imc.toFixed(2)} </p>`
    }
    if(imc > 40){
        resposta.innerHTML += `<p> Seu IMC ${imc.toFixed(2)} </p>`
    }
}