import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Banner from './componentes/Banner/Banner';
import { timesDataList } from './db/data';
import { ColaboradorProps } from './types';

function App() {

  const [colaboradores, setColaboradores] = useState<ColaboradorProps[] | []>([])

  const addedNewUser = (colaborador: ColaboradorProps) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner source="/imagens/banner.png" alt='O banner principal da página do Organo'/>
      
      <Formulario times={timesDataList.map(time => time.nome)} newAddUserInfo={colaborador => addedNewUser(colaborador)}/>

      {timesDataList.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
