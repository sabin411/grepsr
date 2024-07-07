import Link from "next/link"

export default function Home() {
  return (
    <div>
      home page
      <Link href={"/dataset"}> Amazon product price </Link>
    </div>
  )
}
