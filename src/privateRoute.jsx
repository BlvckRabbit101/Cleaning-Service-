import { Navigate } from "react-router-dom";

const privateRoute = ({children}) => {
    const user = JSON.parse(
        localStorage.getItem('usertoken')
    )
    return(
        <div>
            {user.isAdmin === true?   <Navigate to='/Admin' /> : children}
            
        </div>
    )
}

export default privateRoute