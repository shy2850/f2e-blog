import React from '../react'

export default ({ tags }) => <div className="panel">
    <p className="panel-heading">
        所有标签
    </p>
    <div className="panel-block tags">
        {tags && tags.map(tag => <a className="tag is-primary">{tag}</a>)}
    </div>
</div>
