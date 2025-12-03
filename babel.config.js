// eslint-disable-next-line func-names
module.exports = function (api) {
    api.cache(true);

    const presets = [ ["react-app", { "absoluteRuntime": false }] ];
    const plugins = [
        ["babel-plugin-styled-components"],
        ["import", { "libraryName": "lodash", "libraryDirectory": "", "camel2DashComponentName": false }]
    ];

    return {
        presets,
        plugins
    };
}