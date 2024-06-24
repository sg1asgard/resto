import type { MetaFunction } from '@remix-run/node'
import Menu from 'public/components/MenuComponent'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <>
      <Menu />
      <h1 className="text-3xl font-bold">Restaurant Menu</h1>
    </>
  )
}
