import Link from 'next/link'
import React from 'react'

type AccountCardProps = {
  title: string
  link: string
}

const AccountCard: React.FC<AccountCardProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="flex items-center justify-center w-72 h-32 rounded-lg border border-gray-600 shadow-md">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </Link>
  )
}

export default AccountCard
