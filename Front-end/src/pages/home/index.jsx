// import { useState } from 'react'

import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersApi = await api.get("/usuarios");
    setUsers(usersApi.data);
    console.log(users);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome" name="name" type="text" ref={inputName} />
          <input placeholder="Idade" name="idade" type="text" ref={inputAge} />
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            ref={inputEmail}
          />
          <button type="button" onClick={createUsers}>
            Cadastra
          </button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>{" "}
              </p>
              <p>
                Idade: <span>{user.age}</span>{" "}
              </p>
              <p>
                Email: <span>{user.email}</span>{" "}
              </p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
