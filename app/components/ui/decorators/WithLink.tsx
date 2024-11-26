import Link from 'next/link'
import { ComponentType } from 'react'

interface WithLinkProps {
  href: string
  className?: string
}

export function withLink<P extends WithLinkProps>(
  WrappedComponent: ComponentType<Omit<P, keyof WithLinkProps>>
) {
  return function WithLinkWrapper(props: P) {
    const { href, ...rest } = props

    return (
      <Link href={href}>
        <WrappedComponent {...(rest as Omit<P, keyof WithLinkProps>)} />
      </Link>
    )
  }
}