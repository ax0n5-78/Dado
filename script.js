function mix(){
    banana = document.getElementById('banana').value
    smoothie = document.getElementById('smoothie')
    smoothie.innerHTML = ''

    dado = banana.split('d')
    batataFrita = 0

    for(i=0; i<3; i++){
        strogonoff = Math.floor(Math.random() * dado[1]+1)
        batataFrita += strogonoff
        smoothie.innerHTML += '['+strogonoff+'] '
    }
    smoothie.innerHTML += '<br> sua comida é: '+batataFrita
}