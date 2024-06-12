import Colaborador from '../Colaborador'
import './Time.css'

export const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? 
            <section className='time' style={css}>
                <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>
                <time className='colaboradores'>
                    {props.colaboradores.map( 
                        colaborador => <Colaborador 
                            corDeFundo={props.corPrimaria}
                            key={props.name || '/' || colaborador.nome}
                            name={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem} />
                    )}
                </time>
            </section>
        : ''
    )
}