import React from '../react'
export default ({
    title,
    tags,
    theme = 'primary',
    description
}) => <div className="box">
    <article className="media">
        <div className="media-content">
            <div className="content">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="panel-block tags">
                    {tags && tags.map(tag => <a className={`tag is-${theme}  is-outlined`}>{tag}</a>)}
                </div>
            </div>
        </div>
    </article>
</div>
