

import Layout from '../component/Layout'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/esta.scss'
import '../styles/initial.scss'
import '../styles/layout.scss'
import '../styles/loadere.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
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
