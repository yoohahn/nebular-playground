module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['last 1 Chrome versions'],
        },
      },
    ],
    '@babel/preset-react',
  ],
};
