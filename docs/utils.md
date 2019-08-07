_Hide Visually_

`import { hideVisually } from '@comicrelief/component-library';`

how to use in your styled component
`export const Component = styled.span'${hideVisually};';`

_whiteListed_

`import { whiteListed } from '@comicrelief/component-library';`

`whiteListed(url)`

Check if a url is whiteListed. Used to check links and change link target.

_Z Index_

`import { zIndex } from '@comicrelief/component-library';`

how to use in your styled component
`export const Component = styled.span'${zIndex('high')};';`

_Spacing_

`import { spacing } from '@comicrelief/component-library';`

Default spacing scale

One spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers.

| Name |  Size   |
| :--- | :-----: |
| none |    0    |
| xsm  | 0.25rem |
| sm   | 0.25rem |
| md   |  1rem   |
| l    |  2rem   |
| xl   |  4rem   |
| xxl  |  8rem   |
| xxxl |  16rem  |

how to use in your styled component

`export const Component = styled.span'`
`padding: ${spacing('md)'} ${spacing('l)'};';`
