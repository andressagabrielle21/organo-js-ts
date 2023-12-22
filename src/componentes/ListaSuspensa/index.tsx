import './ListaSuspensa.css'

interface SuspendedListProps {
    label: string,
    itens: string[]
    aoAlterado: (valor: string) => void,
    required: boolean,
    valor: string
}

const ListaSuspensa = ({label, itens, aoAlterado, required, valor}: SuspendedListProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={e => aoAlterado(e.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa