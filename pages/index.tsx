import CatCard from "../components/cards/cat/CatCard"
import { mockCatCardProps } from "../components/cards/cat/CatCard.mocks"
import GoogleSearchBar from "../components/GoogleSearchBar/GoogleSearchBar"
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout"
import { NextPageWithLayout } from "./page"

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
      <GoogleSearchBar />
    </section>
  )
}

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
