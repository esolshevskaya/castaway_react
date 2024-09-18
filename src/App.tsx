import { Footer, Header, PageBlock } from "./components"
import { Episodes, Subscription, HostDetails, Reviews, HeroMain } from "./sections"

export const App = () => {
  return (
    <div className="app-wrapper">
      <PageBlock className="site-header" tagName="header">
        <Header/>
      </PageBlock>

      <main>
        <HeroMain />

        <Episodes />

        <HostDetails />

        <Subscription />

        <Reviews />

      </main>

      <Footer />
    </div>
  )
}