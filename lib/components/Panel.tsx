import React from '../react'

export default ({ header, children}) => <div className="panel">
    <p className="panel-heading">
        {header}
    </p>
    <div className="panel-block">
        {children}
    </div>
</div>
