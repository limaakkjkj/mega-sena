import trevo from './img/trevo.png';
import './App.css';

function header(){
  const nome = "Julia";
  const sobrenome = "Lima";

  function luckynumber(){
    return Math.floor(Math.random() * 60 + 1)
  }

  return(
    <div>


      <h1 className='header'>
        Olá, {nome} {sobrenome}
        <img src={trevo} alt="trevo" id='trevo'/>
      </h1>

      <h2 className='subtitle'>
        Seus números da sorte são:
      </h2>

      <ul>
        <li>{luckynumber()}</li>
        <li>{luckynumber()}</li>
        <li>{luckynumber()}</li>
        <li>{luckynumber()}</li>
        <li>{luckynumber()}</li>
        <li>{luckynumber()}</li>
      </ul>


    </div>
  )
}


export default header;