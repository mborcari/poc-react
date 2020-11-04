import React from 'react'
import noticias from '../data/noticias.js'

// Recupera o oobjeto noticias e realiza uma interação, criando quantos objetos tiver
export default function ElementsSection () {

    function getNoticias() {
        return noticias.map( function (noticia) {
                return (
                    <div class="row justifica-conteudo-centro mt-4">
                        <div class="col-md-8 col-md-offset-4">
                            <h3 class='text-flowerblue'>{noticia.title}</h3>
                            <p>{noticia.description}</p>
                        </div>
                    </div>)
                }
        )
    }
    return (
        <div class="block-content justifica-conteudo-centro my-mt-3">
            <div class="row justifica-conteudo-centro mt-4">
                <div class="col-md-8 col-md-offset-4">
                    <h1>Últimas notícias do blog</h1>
                </div>
            </div>
            {getNoticias()}
        </div>
    )
}