
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Users from '../pages/Users'
import DetailsUser from '../pages/DetailsUser'

const MainRoutes = () => {
    return (
     
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<DetailsUser/>}/>
    </Routes>
   
    )
}

export default MainRoutes
