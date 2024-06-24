import type { MetaFunction } from '@remix-run/node'
import menuStyle from '~/components/MenuStyle.css'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="repo-menu">
      <h1 className="text-3xl font-bold">Restaurant Menu</h1>
    </div>
  )
}

export function links() {
  [{ rel: 'stylesheet', href: menuStyle}]
}
