import { ColaboradorProps } from '../../types'
import './Colaborador.css'

interface CorProp extends ColaboradorProps {
    corDeFundo: string
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, dateCreate }: CorProp) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>Usuário criado em: <br /> 
                <span style={{fontSize: '15px', fontWeight: "normal"}}>
                    {dateCreate}
                </span>
            </h5>
        </div>
    </div>)
}

export default Colaborador