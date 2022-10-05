

import Layout from '../component/Layout'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '../www/style//esta.scss'
import '../www/style/initial.scss'
import '../component/Layout/layout.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../www/ui/Loader/loadere.scss'
import Section from '../component/layout/Section'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Section>
        <Component {...pageProps} />
      </Section>
    </Layout>
  ) 
}

export default MyApp
