import { renderHTML, renderMD } from '../misc/config'
import { source_path } from '../misc/config'

const replacer = new RegExp(`^${source_path}[\\\\/]`)
module.exports = (conf) => ({
    onRoute(pathname, req, resp) {
        if (/(^|\/)[^\\\/\.]*$/.test(pathname)) {
            return pathname.replace(/\/$/, '') + '/index.html'
        }
    },
    onSet(pathname, data, store) {
        let outputPath = pathname.replace(replacer, '')
        if (/\.md$/.test(pathname)) {
            outputPath = outputPath.replace(/\.md$/, '/index.html')
            data = renderMD(data, outputPath.replace(/index\.html$/, ''))
        } else if (/\.html$/.test(pathname)) {
            data = renderHTML(data)
        } else if (/\.tsx?$/.test(pathname)) {
            outputPath = outputPath.replace(/\.tsx?$/, '.js')
            data = store._get(pathname.replace(/\.tsx?$/, '.js'))
        }
        store._set(outputPath, data)
    }
})
