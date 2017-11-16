import React from '../react'
export const Tags = ({ tags, className = '', theme = 'primary' }) => <div className={`${className} tags`}>
    {tags && tags.map(tag => <a className={`tag is-${theme}`}>{tag}</a>)}
</div>

export default ({ tags, className, theme = 'primary' }) => <div className={`${className} panel`}>
    <p className="panel-heading">
        所有标签
    </p>
    <Tags tags={tags} className="panel-block" theme={theme}/>
</div>

