import { useRouter } from "next/router"
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout"
import SearchResult from "../components/SearchResult/SearchResult"
import { NextPageWithLayout } from "./page"

const Results: NextPageWithLayout = () => {
  const { locale } = useRouter()

  return (
    <section className="flex flex-col items-center gap-y-5">
      <div className="flex flex-col space-y-8">
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
        <SearchResult
          url="https://google.com"
          text="take me to google.com please and thank you very much and then i will be very grateful"
          title="Google"
        />
      </div>
    </section>
  )
}

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>
}

export default Results
