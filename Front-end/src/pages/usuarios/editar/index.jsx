import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../services/api";
import { useEffect, useState } from "react";

function Usuarios() {
  const [users, setUsers] = useState([]);


  async function getUsers() {
    const usersApi = await api.get("/usuarios");
    setUsers(usersApi.data);
    console.log(users);
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers()
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
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
            <button onClick={() => deleteUsers(user.id)} >
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Usuarios;
