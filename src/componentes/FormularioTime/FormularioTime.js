import "./FormularioTime.css"
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import { v4 as uuidv4 } from 'uuid';

export const FormularioTime = ({aoIncluir}) => {

    const [nomeTime, setNomeTime] = useState('')

    const aoSubmeterTime = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nomeTime )
        aoIncluir({
            id: uuidv4(),
            nome: nomeTime,
            cor: '#5C615D'
        })
        setNomeTime('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeterTime}>
                <h2>Informe o nome do Novo Time.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome Time'
                    placeholder='Digite nome do time '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Botao texto='Criar Time' />
            </form>
        </section>
    )
}