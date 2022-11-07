import { GetServerSideProps } from "next"
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout"
import SearchResult from "../components/SearchResult/SearchResult"
import { ISearchData } from "../lib/search/types"
import { IApiSearchResponseData } from "./api/search"
import { NextPageWithLayout } from "./page"

export interface IResults {
  searchResults: ISearchData[]
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = []
  const searchTerm = query.search

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch("http://localhost:3000/api/search", {
      body: JSON.stringify({ searchTerm }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    searchResults = await response.json()
  }

  return {
    props: {
      searchResults,
    },
  }
}

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  return (
    <section className="flex flex-col items-center gap-y-5">
      <div className="flex flex-col space-y-8">
        {searchResults.map((result, id) => {
          return (
            <SearchResult
              key={id}
              url={result.url}
              text={result.text}
              title={result.title}
            />
          )
        })}
      </div>
    </section>
  )
}

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>
}

export default Results
