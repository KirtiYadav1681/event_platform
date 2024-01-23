import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt='logo' height={38} width={128} />
        </Link>
        <p>2024 Evently. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer