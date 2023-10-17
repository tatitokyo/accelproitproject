import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../images/logoo1.svg';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';
import { Button } from '../button';
import { MobileMenu } from '../mobile-menu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className='flex items-center'>
        <LogoIcon />
        <nav className='hidden md:flex space-x-6 ml-8 items-center'>
          <NavItem text='Преимущества'>
            <NavMenu items={ FEATURES }/>
          </NavItem>
          <NavItem text='Услуги'>
            <NavMenu items={ COMPANY }/>
          </NavItem>
          <NavItem text='Новости'/>
          <NavItem text='О нас'/>
        </nav>
        <div className="hidden ml-auto md:flex space-x-5">
          <Button> Вход </Button>
          <Button hasBorder={ true }> Регистрация </Button>
          </div>
          <div
            className="flex md:hidden ml-auto cursor-pointer z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
           { isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon /> }
          </div>
          <MobileMenu isOpen={ isMobileMenuOpen } />
    </header>
  )
}
