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

_Width_

`import { media, container } from '@comicrelief/component-library';`

 Breakpoint and container sizes

| Name   |      small      |  medium | large |
|----------|:-------------:|------:| ------:|
| screen   | 740px           | 1024px  |1440px    |
| container |   800px        | 1200px  |1440px    |

How to use in your styled component

`const BreakPoint = styled.div'${media('small')}{ font-size: 16px}'`

`const Container = styled.div'max-width: ${container.small}'`

