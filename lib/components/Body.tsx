import React from '../react'
import Navbar from './Navbar'
import Footer from './Footer'
import Tags from './Tags'

export default ({ theme, menus, menuEnd, tags }) => <div>
    <Navbar theme={theme} menus={menus} menuEnd={menuEnd}/>
    <div className="columns section container">
        <div className="column content is-four-fifths">{'{{body}}'}</div>
        <Tags className="column" tags={tags}/>
    </div>
    <Footer/>
</div>