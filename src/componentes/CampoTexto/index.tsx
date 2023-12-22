import './CampoTexto.css'

interface TextFieldProps {
    aoAlterado: (valor: string) => void,
    label: string,
    obrigatorio?: boolean,
    placeholder: string,
    valor: string
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: TextFieldProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (e : React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto