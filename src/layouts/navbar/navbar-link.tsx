import Link from 'next/link'
import tw from 'twin.macro'

export const NavbarLink = ({
  to,
  title = 'Link',
  selected = false,
  ...props
}) => {
  return (
    <Link {...props} href={to}>
      <a
        css={[
          tw`font-semibold tracking-wide text-sm hover:text-primary cursor-pointer`,
          selected && tw`text-primary`,
          !selected && tw`text-fore-primary`,
        ]}
      >
        {title}
      </a>
    </Link>
  )
}
