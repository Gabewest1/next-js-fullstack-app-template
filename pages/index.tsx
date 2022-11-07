import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import GoogleSearchBar from "../components/GoogleSearchBar/GoogleSearchBar"
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout"
import { NextPageWithLayout } from "./page"

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter()

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <GoogleSearchBar />
      <p>
        Google offered in:{" "}
        <Link
          href="/"
          locale={locale === "en" ? "fr" : "en"}
          className="underline text-blue-600"
        >
          {" "}
          Francias{" "}
        </Link>
      </p>
    </section>
  )
}

Home.getLayout = (page) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>
}

export default Home
