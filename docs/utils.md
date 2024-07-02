## hideVisually

`import { hideVisually } from '@comicrelief/component-library';`

How to use in your styled component
`export const Component = styled.span'${hideVisually};';`

## allowListed

`import { allowListed } from '@comicrelief/component-library';`

`allowListed(url)`

Check if a url is allowListed. Used to check links and change link target.

## zIndex

`import { zIndex } from '@comicrelief/component-library';`

How to use in your styled component
`export const Component = styled.span'${zIndex('high')};';`

## spacing

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

How to use in your styled component

`export const Component = styled.span'`
`padding: ${spacing('md)'} ${spacing('l)'};';`

## allBreakpoints, and { breakpointValues } within allBreakpoints

| S    | M     | L      | Nav   | XL     |
|:----:|------:| ------:| -----:| ------:|
| 0    | 740   | 1024   | 1150  | 1440   |

### Usage within Component Library itself
#### media queries (no need to import):
`@media ${({ theme }) => theme.allBreakpoints('M')} {`

#### screen sizes:
`import { breakpointValues } from '../../../theme/shared/allBreakpoints';`

`...`

`max-width: ${breakpointValues.M}px;`


### Usage within Component Library
`import { breakpointValues } from '@comicrelief/component-library/src/theme/shared/allBreakpoints';`

`...`

`max-width: ${breakpointValues.M}px);`



## containers from containers.js
| small   | medium  | large  |
|:-------:|--------:| ------:|
| 800px   | 1200px  | 1440px |

### Note: These are used in a max-width context:
`max-width: ${containers.small}`
