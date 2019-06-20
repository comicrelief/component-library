const path = require('path');

module.exports = {
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.js');
        return `import { ${name} } from '@comic-relief/component-library';`;
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper')
    },
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
        h6: 16,
      },
    },
    styles: {
      Logo: {
        // We're changing the LogoRenderer component
        logo: {
            backgroundImage: "url('https://pattern-lab.services.comicrelief.com/kss-assets/pattern_logo.png')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            height: "50px",
            width: "150px",
            textIndent: "-9999px"
        }
      },
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
        name: 'Atoms',
        components: 'src/components/Atoms/**/*.js',
        sectionDepth: 2
      },
      {
        name: 'Molecules',
        components: 'src/components/Molecules/**/*.js',
        sectionDepth: 2
      },
      // {
      //   name: 'Utilities',
      //   components: 'src/components/Utilities/**/*.js'
      // }
    ]
  }
