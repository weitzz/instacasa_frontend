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
    <div className="relative flex items-center justify-center h-screen w-full bg-[#ccc]">
      <table className=" mt-10 table-auto  bg-red-600">
        <thead className=" border-b-2 border-gray-200">
          <tr>
            <th className="p-3">Nome</th>
            <th className="p-3">Email</th>
            <th className="p-3">Detalhes</th>
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
    </div>
  ); }
  


export default Table;
