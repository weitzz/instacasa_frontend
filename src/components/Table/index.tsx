import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
//import Users from '../../models/Users'

 interface Users {
   id: number;
   name: string;
   email: string;
 }
const Table = () => {
  const [data, setData] = useState<Users[]>([]);
  useEffect(() => {
    const loadApi = async () => {
      try {
        const response = await api.get("/users/");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadApi();
  }, []);
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><Link to={`/users/${item.id}`} className="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Visualizar</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
