import React from 'react'
import logo from '../assets/images/logo.webp'
import shopByLogo from '../assets/images/icon-shop-by-color.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoOutUser } from '../features/Auth/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import '../Css/Navbar.Css'


const Navbar = () => {
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handlelogout = () => {
        dispatch(logoOutUser())
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} ><img className='ATlogo' src={logo} alt="" /></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <img id='shopByLogo' src={shopByLogo} alt="" />
                    <ul className="navbar-nav">
                        <li className="nav-item d">
                            <Link to={'/luggage'} className="nav-link active luggage-bag" aria-current="page" href="#">Luggage</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/backpacks'} className="nav-link active" aria-current="page" href="#">BackPacks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/duffles'} className="nav-link active" aria-current="page" href="#">Duffles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/browsemore'}  className="nav-link active" aria-current="page" href="#">Browse More</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to={'/discoverlist'} className="nav-link active" aria-current="page" href="#">Discover</Link>
                        </li>

                    </ul>

                </div>
                <div className='icons'>
                    <a  ><LocationOnIcon id='icon-one' /></a>
                    {

                        user ? (

                            <>
                                <a  ><FavoriteBorderIcon id='icon-one' /></a>
                                <a onClick={handlelogout} ><LogoutIcon id='icon-one' /></a></>

                        ) : (
                            <Link to={"/register"}><PermIdentityIcon id='icon-one' /></Link>
                        )
                    }
                    <a  ><SearchIcon id='icon-one' className='search-icon' /></a>
                    <a  ><ShoppingCartIcon id='icon-one' /></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav >









    )
}

export default Navbar
