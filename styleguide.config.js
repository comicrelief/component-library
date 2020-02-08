const path = require('path');

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@comic-relief/component-library';`;
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
    '**/*.style.{js,jsx,ts,tsx}'
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
    maxWidth: '100%',
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
      name: 'Atoms',
      components: 'src/components/Atoms/**/*.js',
      sectionDepth: 2
    },
    {
      name: 'Molecules',
      components: 'src/components/Molecules/**/*.js',
      sectionDepth: 2
    }
    // {
    //   name: 'Utilities',
    //   components: 'src/components/Utilities/**/*.js'
    // }
  ]
};
