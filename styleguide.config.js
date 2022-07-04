const path = require('path');

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@comicrelief/component-library';`;
  },
  assetsDir: 'src/styleguide/assets/',
  styleguideComponents: {
    LogoRenderer: path.resolve(__dirname, './src/styleguide/CRLogo'),
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper')
  },
  skipComponentsWithoutExample: true,
  ignore: [
    '**/assets/**',
    '**/data/**',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*.style.{js,jsx,ts,tsx}',
    '**/_*.{js,jsx,ts,tsx}' // don't add any underscore-prefixed (partial) components to the styleguide itself
  ],
  // styleguideComponents: {
  //     StyleGuideRenderer: path.join(
  //       __dirname,
  //       'src/styleguide/StyleGuideRenderer'
  //     )
  // },
  theme: {
    color: {
      sidebarBackground: '#29022c',
      link: 'white',
      linkHover: 'grey'
    },
    fontSize: {
      base: 15,
      text: 16,
      small: 13,
      h1: 24,
      h2: 18,
      h3: 16,
      h4: 16,
      h5: 16,
      h6: 16
    },
    fontFamily: {
      base: ['Montserrat']
    },
    maxWidth: '100%'
  },
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction.md'
    },
    {
      name: 'Installation',
      content: './docs/installation.md'
    },
    {
      name: 'Utils',
      content: './docs/utils.md'
    },
    {
      name: 'Theme',
      content: './src/theme/crTheme/Colors.md'
    },
    {
      name: 'Atoms',
      components: 'src/components/Atoms/**/*.js',
      sectionDepth: 2
    },
    {
      name: 'Molecules',
      components: 'src/components/Molecules/**/*.js',
      sectionDepth: 2
    },
    {
      name: 'Organisms',
      components: 'src/components/Organisms/**/*.js',
      sectionDepth: 2
    }
    // {
    //   name: 'Utilities',
    //   components: 'src/components/Utilities/**/*.js'
    // }
  ]
};
