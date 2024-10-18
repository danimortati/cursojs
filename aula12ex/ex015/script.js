function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert(' [ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'foto-bebe-m1.png')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m1.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m1.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m1.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src','foto-bebe-f1.png')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src','foto-jovem-f1.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src','foto-adulto-f1.png')
            } else {
                // Idoso
               img.setAttribute('src','foto-idoso-f1.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}