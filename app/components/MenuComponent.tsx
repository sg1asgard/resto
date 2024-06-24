import { Link } from '@remix-run/react'

export default function Menu() {
    return (
        <>
            <div className="flex py-5 my-5">
                <Link to="/" className="capitalize">home</Link>
                <Link to="/menu" className="capitalize">menu</Link>
            </div>
        </>
    )
}