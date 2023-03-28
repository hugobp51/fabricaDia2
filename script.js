const meunome = "hugo";
function chamarConsole() {
  console.log(meunome);
meunome = 'porto'
console.log(meunome)
}

function pegarelemento(){
    const input = document.getElementById('meuinput').value
    console.log(input)
}

function pegarelementohtml(){

    const meutitulo  = document.getElementById('minhaString').value

    console.log(meutitulo)

    meutitulo.innertext = 'hugo'

    console.log(meutitulo)
}

function pegarelemento(){
    const divFabrica = document.getElementById('fabrica')
    const divFabrica2 = document.getElementById('fabrica2')

    const h1 = document.createElement('h1')
    h1.innerText = 'consegui'
    divFabrica.appendChild(h1)
    
    const h2 = document.createElement('h2')
    h2.innerText = 'consegui'
    divFabrica.appendChild(h2)

}
pegarelemento()

