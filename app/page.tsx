import Link from "next/link"

export default function Home() {
  return (
    <div>
      <span>home page</span>
      <br />
      <Link href={"/dataset"}> Amazon product price </Link>
    </div>
  )
}
