import React from 'react';

const wrap = { padding: '1rem', maxWidth: '800px', lineHeight: '1.6' };
const code = { background: '#f4f4f4', padding: '0.2em 0.4em', borderRadius: '3px', fontFamily: 'monospace', fontSize: '0.9em' };
const table = { borderCollapse: 'collapse', marginBottom: '1rem' };
const th = { border: '1px solid #ddd', padding: '0.4rem 0.8rem', background: '#f4f4f4', textAlign: 'left' };
const td = { border: '1px solid #ddd', padding: '0.4rem 0.8rem' };

export default function UtilsDoc() {
  return (
    <div style={wrap}>

      <h2>hideVisually</h2>
      <p><code style={code}>{'import { hideVisually } from \'@comicrelief/component-library\';'}</code></p>
      <p>How to use in your styled component</p>
      <p><code style={code}>{"export const Component = styled.span`${hideVisually};`;"}</code></p>

      <h2>allowListed</h2>
      <p><code style={code}>{'import { allowListed } from \'@comicrelief/component-library\';'}</code></p>
      <p><code style={code}>allowListed(url)</code></p>
      <p>Check if a url is allowListed. Used to check links and change link target.</p>

      <h2>zIndex</h2>
      <p><code style={code}>{'import { zIndex } from \'@comicrelief/component-library\';'}</code></p>
      <p>How to use in your styled component</p>
      <p><code style={code}>{"export const Component = styled.span`${zIndex('high')};`;"}</code></p>

      <h2>spacing</h2>
      <p><code style={code}>{'import { spacing } from \'@comicrelief/component-library\';'}</code></p>
      <p>Default spacing scale</p>
      <table style={table}>
        <thead>
          <tr><th style={th}>Name</th><th style={th}>Size</th></tr>
        </thead>
        <tbody>
          {[['none','0'],['xsm','0.25rem'],['sm','0.25rem'],['md','1rem'],['l','2rem'],['xl','4rem'],['xxl','8rem'],['xxxl','16rem']].map(([name, size]) => (
            <tr key={name}><td style={td}>{name}</td><td style={td}>{size}</td></tr>
          ))}
        </tbody>
      </table>
      <p>How to use in your styled component:</p>
      <p><code style={code}>{"padding: ${spacing('md')} ${spacing('l')};"}</code></p>

      <h2>allBreakpoints, and {'{ breakpointValues }'} within allBreakpoints</h2>
      <table style={table}>
        <thead>
          <tr>{['S','M','L','Nav','XL'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          <tr>{['0','740','1024','1150','1440'].map(v => <td key={v} style={td}>{v}</td>)}</tr>
        </tbody>
      </table>

      <h4>Media queries (no need to import):</h4>
      <p><code style={code}>{"@media ${({ theme }) => theme.allBreakpoints('M')} {"}</code></p>

      <h4>Screen sizes:</h4>
      <p><code style={code}>{"import { breakpointValues } from '../../../theme/shared/allBreakpoints';"}</code></p>
      <p><code style={code}>{'max-width: ${breakpointValues.M}px;'}</code></p>

      <h4>Usage within Component Library:</h4>
      <p><code style={code}>{"import { breakpointValues } from '@comicrelief/component-library/src/theme/shared/allBreakpoints';"}</code></p>
      <p><code style={code}>{'max-width: ${breakpointValues.M}px;'}</code></p>

      <h2>containers from containers.js</h2>
      <table style={table}>
        <thead>
          <tr>{['small','medium','large'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          <tr>{['800px','1200px','1440px'].map(v => <td key={v} style={td}>{v}</td>)}</tr>
        </tbody>
      </table>
      <p>Note: These are used in a max-width context:</p>
      <p><code style={code}>{'max-width: ${containers.small}'}</code></p>

    </div>
  );
}
