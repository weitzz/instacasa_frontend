import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
//import Users from '../../models/Users'

interface Users {
  id: number;
  name: string;
  email: string;
}

const DetailsUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<Users[]>([]);
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
    
  </>

 )
}
export default DetailsUser;
