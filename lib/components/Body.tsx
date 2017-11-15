import React from '../react'
import Navbar from './Navbar'

export default ({theme, menus, menuEnd}) => <div>
    <Navbar theme={theme} menus={menus} menuEnd={menuEnd}/>
    <div className="container">{'{{body}}'}</div>
</div>