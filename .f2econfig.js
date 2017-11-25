const { argv } = process
const build = argv[argv.length - 1] === 'build'
const getModuleId = pathname => pathname.replace('src/static/', '')
module.exports = {
    livereload: !build,
    build,
    // useLess: true,
    buildFilter: pathname => !pathname || /^\/?src\/?.*?$/.test(pathname),
    outputFilter: pathname => !pathname || !/^\/?src\/?.*?$/.test(pathname),
    gzip: true,
    getModuleId,
    middlewares: [
        {
            test: /^src\/(index|static\/require)\b/,
            middleware: 'template'
        },
        {
            middleware: 'typescript',
            getModuleId,
            tsconfig: {
                "compilerOptions": {
                    "declaration": true,
                    "module": "amd",
                    "pretty": true,
                    "jsx": "react"
                },
                "include": [
                    "src/*.ts",
                    "src/*.tsx",
                ]
            }
        },
        require('./dist/route/index')
    ],
    buildWatcher(type, pathname, build) {
        if (/^\/?src\/config\.json$/.test(pathname)) {
            build('')
        }
    },
    output: require('path').join(__dirname, './output')
}
