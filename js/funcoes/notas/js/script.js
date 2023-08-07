let nome = document.getElementById('nome')
let serie = document.getElementById('serie')
let materia = document.getElementById('materia')
let bin1 = document.getElementById('nota1')
let bin2 = document.getElementById('nota2')
let bin3 = document.getElementById('nota3')
let bin4 = document.getElementById('nota4')
let media = document.getElementById('media')
let tbody = document.getElementById('bodytr')


function calcularMedia(){
    Event.preventdefault()
    media.value = (parseFloat(bin1.value)+parseFloat(bin2.value)+parseFloat(bin3.value)+parseFloat(bin4.value))/4
    tbody.innerHTML = `<tr>
    <td class="center">${nome.value}</td>
    <td class="center">${serie.value}</td>
    <td class="center">${materia.value}</td>
    <td class="center">${bin1.value}</td>
    <td class="center">${bin2.value}</td>
    <td class="center">${bin3.value}</td>
    <td class="center">${bin4.value}</td>
    <td class="center">${media.value}</td>
    `
}