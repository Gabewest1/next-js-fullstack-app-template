import PrimaryLayout from "../components/layouts/primary/PrimaryLayout"
import { NextPageWithLayout } from "./page"

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>About page</h2>
    </section>
  )
}

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default About
