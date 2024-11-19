import React from 'react'
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth'
import UserCard from '@components/UserCard'

export default async function ServerPage() {

    const session = await getServerSession(options)
    console.log(session.user)

    if (!session)
        redirect('/api/auth/signin?callbackUrl=/serverpage')

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype="Server" />
        </section>
    )
}


