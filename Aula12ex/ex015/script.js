function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'smiley-sunglasses.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'desenho-com-barba.png')
            } else {
                img.setAttribute('src', 'bird.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'historia_perro.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jolyne-myers.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'personagem1.png')
            } else {
                img.setAttribute('src', 'fnaf-gif-goofy.gif')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>detectamos ${genero} com ${idade} anos</p>`
    res.appendChild(img)
}