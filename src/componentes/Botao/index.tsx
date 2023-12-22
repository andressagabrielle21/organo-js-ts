import './Botao.css'

interface ButtonProps {
    children: React.ReactNode
}

const Botao = ({children}: ButtonProps) => {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}

export default Botao;