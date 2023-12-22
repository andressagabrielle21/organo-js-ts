import { ColaboradorProps } from '../../types'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    nome: string,
    corSecundaria: string,
    corPrimaria: string,
    colaboradores: ColaboradorProps[]
}

const Time = ({corSecundaria, colaboradores, corPrimaria, nome}: TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        dateCreate={colaborador.dateCreate}
                        /> 
                    )}
            </div>
        </section>
    )
}

export default Time