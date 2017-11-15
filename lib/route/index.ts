import { renderHTML, renderMD } from '../misc/config'
import { source_path } from '../misc/config'

const replacer = new RegExp(`^${source_path}[\\\\/]`)
module.exports = (conf) => ({
    onRoute(pathname, req, resp) {
        return pathname.replace(/\/$/, '') + '/index.html'
    },
    onSet(pathname, data, store) {
        let outputPath
        if (/\.md$/.test(pathname)) {
            outputPath = pathname.replace(replacer, '').replace(/\.md$/, '/index.html')
            data = renderMD(data)
        } else if (/\.html$/.test(pathname)) {
            outputPath = pathname.replace(replacer, '')
            data = renderHTML(data)
        }
        outputPath && store._set(outputPath, data)
    }
})
