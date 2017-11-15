import { renderHTML, renderMD } from '../misc/config'
import { source_path } from '../misc/config'

const replacer = new RegExp(`^${source_path}[\\\\/]`)
module.exports = (conf) => ({
    onRoute(pathname) {
        if (!pathname) {
            return '/index.html'
        }
    },
    onSet(pathname, data, store) {
        if (/\.md$/.test(pathname)) {
            data = renderMD(data)
        } else if (/\.html$/.test(pathname)) {
            data = renderHTML(data)
        }
        store._set(pathname.replace(replacer, ''), data)
    }
})