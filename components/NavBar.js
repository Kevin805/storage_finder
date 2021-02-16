import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'

function NavBar() {
    const router = useRouter()
    const{ state, dispatch } = useContext(DataContext)
    const { auth } = state


    const isActive = (r) => {
    if(r === router.pathname){
        return " active"
    } else {
        return ""
    }
  }
  const handleLogout = () => {
    Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
    return router.push('/')
}

const loggedRouter = () => {
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={auth.user.avatar} alt={auth.user.avatar} 
                style={{
                    borderRadius: '50%', width: '30px', height: '30px',
                    transform: 'translateY(-3px)', marginRight: '3px'
                }} /> {auth.user.name}
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link href="/profile">
                    <a className="dropdown-item">Profile</a>
                </Link>
                <Link href="/create">
                <a className="dropdown-item">Add a Storage Space</a>
                </Link>
                
                <div className="dropdown-divider"></div>
                
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
            
        </li>
    )
  }

    return (
        <nav className="navbar navbar-expand-lg text-info ">
            
            <Link href="/">
            <a className="navbar-brand "> Store my Stuff </a> 
            </Link>
            <img src="van4.png" alt=""></img>
            
           
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        

        <div className="collapse navbar-collapse justify-content-end"  id="navbarNavDropdown">
        <div className="filter">
        </div>
        
           <ul className="navbar-nav">
        {
           Object.keys(auth).length === 0 
            ? <li className="nav-item">
              <Link href="/signin">
                 <a className={"nav-link" + isActive('/signin')}>
                     <i className="far fa-user" ></i> Sign in
                 </a>
              </Link>
            </li>
            
            : loggedRouter()
           }
           
       </ul>
     </div>
   </nav>
  )
}

export default NavBar
