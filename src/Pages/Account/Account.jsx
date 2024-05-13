import React from 'react'
import AccountHeader from './AccountHeader'
import AccountHero from './AccountHero'
import AccountSubHeader from './AccountSubHeader'
import AccountRecommended from './AccountRecommended'
import AccountPopular from './AccountSimilar'
import AccountJobs from './AccountJobs'
import AccountFooter from './AccountFooter'

const Account = () => {
  return (
    <div>
        <AccountHeader />
        {/* <AccountHero /> */}
        <AccountSubHeader />
        {/* <AccountRecommended /> */}
        {/* <AccountPopular /> */}
        <AccountJobs />
        <AccountFooter />
    </div>
  )
}

export default Account