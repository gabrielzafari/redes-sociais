const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais(){
const res = await fetch (url)
const dados = await res . json()
const paragrafo = document . createElementn ('p')
paragrafo . classList. add('graficos-container_texto')
paragrafo. innerHTML = `Você sabia que o mundo tem ${dados . total_pessoas_mundo} de pessoas e que aproximadamente ${dados . total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados . tempo_médio} horas conectadas.`

const container = document . getElementByld('graficos-container')
container . appendChild(paragrafo)
}

vizualizarinformacoesGlobais()