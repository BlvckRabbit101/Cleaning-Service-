import React from 'react'
import AccountHeader from './AccountHeader'
import AccountHero from './AccountHero'
import AccountSubHeader from './AccountSubHeader'
import AccountRecommended from './AccountRecommended'
import AccountPopular from './AccountPopular'
import Footer from '../Footer/Footer'
import AccountJobs from './AccountJobs'

const Account = () => {
  return (
    <div>
        <AccountHeader />
        <AccountHero />
        <AccountSubHeader />
        <AccountRecommended />
        <AccountPopular />
        <AccountJobs />
        {/* <Footer /> */}
    </div>
  )
}

export default Account