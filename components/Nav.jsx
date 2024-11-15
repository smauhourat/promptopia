'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, settoggleDropdown] = useState(false);


    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setProviders()
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/logo.svg'
                    width={30}
                    height={30}
                    alt='Promptopia Logo'
                />
                <p className='logo_text'>Promptopia</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='flex gap-40 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Create Prompt
                        </Link>
                        <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
                        <Image
                            src='/assets/images/logo.svg'
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'

                        />
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    SignIn
                                </button>
                            ))
                        }
                    </>
                )}
            </div>
            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (
                    <div className='flex'>
                        <Image
                            src='/assets/images/logo.svg'
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => { settoggleDropdown((prev) => !prev) }}
                        />
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link
                                    href='/profile'
                                    className='dropdown_lo¿ink'
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_lo¿ink'
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button type='button'
                                    className='black_btn w-full mt-5'
                                    onClick={() => {
                                        settoggleDropdown(false)
                                        signOut
                                    }}>
                                    SignOut
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    SignIn
                                </button>
                            ))
                        }
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav
