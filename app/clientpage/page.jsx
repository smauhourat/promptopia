'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '@components/UserCard'

const ClientPage = () => {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/clientpage')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Client"} />
        </section>
    )
}

export default ClientPage
