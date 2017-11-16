import React from '../react'
import Navbar from './Navbar'
import Footer from './Footer'
import Tags from './Tags'

export default ({ theme, menus, menuEnd, tags, body = '{{body}}' }) => <div>
    <Navbar theme={theme} menus={menus} menuEnd={menuEnd}/>
    <div className="section container" style={{minHeight: '80vh'}}>
        <div className="columns">
            <div className="column content is-four-fifths">{body}</div>
            <Tags className="column" tags={tags} theme={theme}/>
        </div>
    </div>
    <Footer/>
</div>
