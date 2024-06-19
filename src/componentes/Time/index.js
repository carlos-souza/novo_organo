import Colaborador from '../Colaborador'
import './time.css'
import { AiFillCloseCircle } from 'react-icons/ai';

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length===3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.5)';
    }
    //throw new Error('Bad Hex');
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoRemover }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgbA(time.cor) }}>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoRemover(time)} 
            />
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>

    )
}

export default Time