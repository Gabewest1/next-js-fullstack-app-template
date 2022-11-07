import Head from "next/head"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  )
}

export default PrimaryLayout
