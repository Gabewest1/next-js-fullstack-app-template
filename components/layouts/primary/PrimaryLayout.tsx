import Head from "next/head"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify: "items-center" | "items-start"
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  )
}

export default PrimaryLayout
