import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

type UserParams = {
  id: string;
};


const DetailsUser = () => {
  const { id } = useParams<UserParams>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.get(`/users/${id}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, [id]);

  return (
    <>
      <div className="flex flex-col mt-10 items-center h-screen">
        <h2 className="text-2xl text-[#212121]">Detalhes do Usuário</h2>
        <div className=" p-6 rounded-lg shadow-lg bg-white max-w-xl">
          <form>
            <div>
              <img
                src="https://via.placeholder.com/150/535353"
                className="rounded-full w-20 shadow-lg"
                alt="Avatar"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="form-group mb-6">
                <Input type="text" name="Nome completo" value={user?.name} />
              </div>
              <div className="form-group mb-6">
                <Input type="text" name="Username" value={user?.username} />
              </div>
            </div>

            <div className="form-group mb-6">
              <Input type="email" name="Email" value={user?.email} />
            </div>
            <div className="form-group mb-6">
              <Input
                type="text"
                name="Telefone"
                value={user?.phone
                  .replace(/\D/g, "")
                  .replace(/^(\d{2})(\d)/g, "($1)$2")
                  .replace(/(\d)(\d{4})$/, "$1-$2")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <Link
                to="/users"
                className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs text-center leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Voltar
              </Link>
              <Button title="Salvar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default DetailsUser;
