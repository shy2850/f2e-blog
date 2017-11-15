const { argv } = process
const build = argv[argv.length - 1] === 'build'
module.exports = {
    livereload: !build,
    build,
    buildFilter: pathname => !pathname || /^src\/?/.test(pathname),
    outputFilter: pathname => !pathname || !/^src\/?/.test(pathname),
    gzip: true,
    // app: 'static',
    middlewares: [
        require('./dist/route/index')
    ],
    output: require('path').join(__dirname, './output')
}
