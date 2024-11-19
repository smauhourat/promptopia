'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex flex-row gap-4 mb-2'>
            <Link href="/">Home</Link>
            <Link href="/clientpage">Cliente</Link>
            <Link href="/serverpage">Server</Link>
            <Link href="/api/auth/signin">Sign In</Link>
            <Link href="/api/auth/signout?callbackUrl=/">Sign Out</Link>
        </nav >
    )
}

export default Navbar
