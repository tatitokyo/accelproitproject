import React from 'react'
import { COMPANY, FEATURES } from '../header/constants'
import { MenuItem } from '../menu-item'
import { NavItem } from '../nav-item'
import { Button } from '../button'

export const MobileMenu = ({ isOpen = false }) => {
  return (
    <React.Fragment>
        <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
        <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
            <nav className="my-20 mx-5 space-y-5 text-lg w-full">
                <NavItem text='Преимущества'>
                    <div className="flex flex-col space-y-5 p2">
                        { FEATURES.map(({ text, icon}) => <MenuItem text={ text } icon={icon} key={text} />) }
                    </div>
                </NavItem>
                <NavItem text='Услуги'>
                    <div className="flex flex-col space-y-5 p2">
                        { COMPANY.map(({ text, icon}) => <MenuItem text={ text } icon={icon} key={text} />)}
                    </div>
                </NavItem>
                <NavItem text='Новости' />
                <NavItem text='О нас' />
                <div className="flex flex-col space-y-5">
                    <Button>Вход</Button>
                    <Button hasBorder={ true }>Регистрация</Button>
                </div>
            </nav>
        </div>
    </React.Fragment>
  )
}
