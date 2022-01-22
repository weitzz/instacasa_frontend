import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {Link} from 'react-router-dom'
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const DetailsUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User[]>([]);
  console.log(user);
  useEffect(() => {
    const loadApi = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadApi();
  }, [id]);

 return(
  <>
  <div>
    <h2>Teste</h2>
    <Link to="/users">Voltar</Link>
  </div>
  </>

 )
}
export default DetailsUser;
