const React = require('react')
const { GlobalStyles } = require('./src/styles/GlobalStyles')
const Layout = require('./src/components/Layout').default

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>
      {element}
    </Layout>
  </>
)
