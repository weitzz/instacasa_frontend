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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadApi = async () => {
      try {
        const response = await api.get("/users/");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    loadApi();
  }, []);
  if (loading) {
    return (
      <div className="relative flex items-center justify-center h-screen">
        <h2 className="text-2xl text-[#212121]">Carregando...</h2>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        <table className=" w-full mt-10 ">
          <thead className=" border-b-2 border-[#212121]">
            <tr>
              <th className="p-3 font-bold uppercase  text-[#212121]   lg:table-cell">
                Nome
              </th>
              <th className="p-3 font-bold uppercase  text-[#212121]  lg:table-cell">
                Email
              </th>
              <th className="p-3 font-bold uppercase text-[#212121]  lg:table-cell">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#212121]">
            {data?.map((item) => (
              <tr key={item.id}>
                <td className=" p-2 text-center  ">{item.name}</td>
                <td className="p-2 text-center">{item.email}</td>
                <td className="p-2 text-center ">
                  <Link
                    to={`/users/${item.id}`}
                    className="inline-block px-6 py-2.5 bg-[#fcc700] text-[#212121] font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#FF8A00] hover:shadow-lg focus:bg-[#FF8A00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#fcc700] active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visualizar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
