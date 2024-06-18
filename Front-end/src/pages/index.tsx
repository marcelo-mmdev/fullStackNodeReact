// import { useState } from 'react'

import "./style.css";
import  Trash  from "../assets/trash.svg";

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' name='nome' type='text'/>
          <input placeholder='Idade' name='idade' type='number'/>
          <input placeholder='E-mail' name='email' type='email'/>
          <button type='button'>Cadastra</button>
        </form>

        <div className='card'>
          <div>
            <p>Nome: <span>Marcelo</span> </p>
            <p>Idade: <span>36</span> </p>
            <p>Email: <span>marcelo@email.com</span> </p>
          </div>
          <button>
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
