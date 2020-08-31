import React from 'react';
import logo from '../../assets/logo.png'
import './styles.css'
import {FiMessageSquare, FiMenu, FiHeart, FiShoppingBag} from 'react-icons/fi'
import {HiOutlineMenu} from 'react-icons/hi'

function Header() {
  return (
    <div className="contaimer">
      <header className = 'header'>
        <div className = 'logoContainer' >
         <img src = {logo} />
        </div>

        <div className = 'linksContainer' >
          <strong className = 'link'>
            <FiMessageSquare />
            FALE CONOSCO
          </strong>

          <strong className = 'link'>
            <FiMenu />
            MEUS PEDIDOS
          </strong>

          <strong className = 'link'>
            <FiHeart />
            FAVORITOS
          </strong>

          <strong className = 'link'>
            <FiShoppingBag />
            CARRINHO
          </strong>
        </div>

        <HiOutlineMenu className = 'menu' />
      </header>
      
    </div>
  );
}

export default Header;
