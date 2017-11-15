import React from '../react'

export const Tag = ({ name }) => <a className="tag is-primary">{name}</a>

export default ({ tags }) => <div className="panel">
    <p className="panel-heading">
        所有标签
    </p>
    <div className="panel-block">
        {tags && tags.map(tag => <Tag name={tag} />)}
    </div>
</div>