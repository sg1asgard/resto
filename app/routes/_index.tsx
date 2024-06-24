import type { MetaFunction } from '@remix-run/node'
import { createClient } from '@supabase/supabase-js'
import Menu from '~/components/MenuComponent'

// Create a single supabase client for interacting with your database
// const supabase = createClient(`${process.env.SUPA_PROJECT_URL}`, `${process.env.SUPA_API_KEY}`)

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <>
      <Menu />
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </>
  )
}
