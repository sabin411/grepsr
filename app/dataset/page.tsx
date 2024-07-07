import Link from "next/link"

export default function Dataset() {
  return (
    <div>
      <span>home page</span>
      <br />
      <Link href={"/dataset/amazon"}> Amazon product price </Link>
    </div>
  )
}
