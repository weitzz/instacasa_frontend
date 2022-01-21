
import {Link} from 'react-router-dom'
 const Home = ()=> {
  return (
    <>
    <div>
      <h1>Seja bem vindo !!</h1>
      <Link className="bg-blue-500 shadow-lg shadow-blue-500/50 ..." to={'/users'}>Entrar</Link>
    </div>
    </>
  )
}

export default Home;