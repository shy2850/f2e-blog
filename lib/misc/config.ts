import * as path from 'path'
import marked from './marked'
import { readFileSync, writeFileSync } from 'fs'
import { createElement } from '../react'
import Body from '../components/Body'

export const source_path = 'src'

const CFG_PATH = path.join(__dirname, `../../${source_path}/config.json`)

let config = require(CFG_PATH)

export const Layout = readFileSync(path.join(__dirname, `../../${source_path}/layout.htm`))
    .toString()
    .replace(/\{\{(\w+)\}\}/g, (mat, k) => config[mat] || mat)

export const setConfig = (obj) => {
    Object.assign(config, obj)
    writeFileSync(CFG_PATH, JSON.stringify(config, null, 4))
}
export const getConfig = (k?:string) => {
    if (k) {
        return config[k]
    } else {
        return config
    }
}
export const renderHTML = html => Layout
    .replace(/\{\{(\w+)\}\}/g, (mat, k) => config[k] || mat)
    .replace('{{body}}', createElement(Body, config).toString())
    .replace('{{body}}', html)
export const renderMD = md => renderHTML(marked(md))
