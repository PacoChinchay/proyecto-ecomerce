import Link from "next/link"

export default function page404() {
  return (
    <div>
      <h1>404: Not found</h1>
      <Link href="/">Regresar</Link>
    </div>
  )
}