function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas. `
}