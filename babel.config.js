// eslint-disable-next-line func-names
module.exports = function (api) {
  const format = process.env.MODULE_FORMAT;

  api.cache.using(() => `${format || 'node'}:${process.env.NODE_ENV || 'development'}`);

  const plugins = [
    ['babel-plugin-styled-components'],
    ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }]
  ];

  const presetEnvOptions = { bugfixes: true };

  if (format === 'esm') {
    presetEnvOptions.modules = false;
  } else {
    presetEnvOptions.modules = 'commonjs';
    if (!format) {
      presetEnvOptions.targets = { node: 'current' };
    }
  }

  const presets = [
    ['@babel/preset-env', presetEnvOptions],
    [
      '@babel/preset-react',
      {
        runtime: 'classic',
        development: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
