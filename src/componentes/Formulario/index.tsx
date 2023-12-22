import { useEffect, useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { ColaboradorProps } from '../../types'

interface FormProps {
    newAddUserInfo: (colaborador: ColaboradorProps) => void,
    times: string[]
}

const Formulario = ({newAddUserInfo, times}: FormProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [dateCreate, setDateCreate] = useState('')

    const dateCreated = () => {
        const data = new Date()

        const fullDate = data.toLocaleDateString()

        setDateCreate(fullDate)
    }

    useEffect(() => {
        dateCreated()
    }, [])
    
    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        newAddUserInfo({
            nome,
            cargo,
            imagem,
            time,
            dateCreate
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section> 
    )
}

export default Formulario