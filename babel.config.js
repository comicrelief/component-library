// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ];
  const plugins = [
    ['babel-plugin-styled-components']
  ];

  return {
    presets,
    plugins
  };
};
