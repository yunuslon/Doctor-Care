module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@asset': './src/assets',
          '@component': './src/components',
          '@helper': './src/helpers',
          '@nav': './src/navigation',
          '@screen': './src/screens',
          '@recoil': './src/recoil',
        },
      },
    ],
  ],
};
