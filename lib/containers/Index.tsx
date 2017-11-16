import React from '../react'
import Body from '../components/Body'
import ArticleList from '../components/ArticleList'

import { getConfig } from '../misc/config'

const Index = () => {
    const config: Config = getConfig()
    const {
        title,
        keywords,
        description,
        articles
    } = config

    const body = <ArticleList articles/>
}