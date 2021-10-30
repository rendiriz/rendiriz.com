import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  :root {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
  }

  .light {
    --color-primary: hsla(211, 61%, 43%, var(--tw-text-opacity));
    --color-secondary: hsla(356, 93%, 65%, var(--tw-text-opacity));
    --color-fore-primary: hsla(210, 7%, 12%, var(--tw-text-opacity));
    --color-fore-secondary: hsla(218, 10%, 15%, var(--tw-text-opacity));
    --color-back-primary: hsla(228, 16%, 94%, var(--tw-text-opacity));
    --color-back-secondary: hsla(225, 2%, 53%, var(--tw-text-opacity));
  }

  .dark {
    --color-primary: hsla(356, 93%, 65%, var(--tw-text-opacity));
    --color-secondary: hsla(211, 61%, 43%, var(--tw-text-opacity));
    --color-fore-primary: hsla(228, 16%, 94%, var(--tw-text-opacity));
    --color-fore-secondary: hsla(225, 2%, 53%, var(--tw-text-opacity));
    --color-back-primary: hsla(210, 7%, 12%, var(--tw-text-opacity));
    --color-back-secondary: hsla(218, 10%, 15%, var(--tw-text-opacity));
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-back-primary);
    color: var(--color-fore-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
