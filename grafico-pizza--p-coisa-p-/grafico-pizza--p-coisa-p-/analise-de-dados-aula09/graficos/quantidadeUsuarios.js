import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ["2022", "2021", "2020", "2019", "2018", "2017"]
    const quantidadeDeUsuarios = ["1500", "1000", "1200", "1300", "1700", "1600"]

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: 'black'
            }
        }
    ]

    const layout = {
        plot_bgcolor: 'green',
        paper_bgcolor: 'green',
        title: {
            text: 'Quantas pessoas são contaminadas por ano',
            x: 0.5, // Centralizando o texto
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Anos',
                font: {
                    color: 'white'
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Milhares de pessoas contaminadas',
                font: {
                    color: 'white'
                }
            }
        }
    }

    criarGrafico(data, layout)
}

quantidadeUsuariosPorRede()