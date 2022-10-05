import 'styled-components'
import { defaultTheme } from '../themes/defaultTheme'

type ThemeType = typeof defaultTheme

// sobrecrevendo a propriedade DefaultTheme modulo do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
