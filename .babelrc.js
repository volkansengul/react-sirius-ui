let config = {
  presets: [
    ['@babel/preset-env', { loose: true, modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-styled-components', { displayName: false }],
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}

if (process.env.NODE_ENV === 'test') {
  config = Object.assign({}, config, {
    plugins: [
      ...config.plugins,
      ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ],
  })
}

module.exports = config
