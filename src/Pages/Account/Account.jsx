import React from 'react'
import AccountHeader from './AccountHeader'
import AccountHero from './AccountHero'
import AccountSubHeader from './AccountSubHeader'
import AccountRecommended from './AccountRecommended'

const Account = () => {
  return (
    <div>
        <AccountHeader />
        <AccountHero />
        <AccountSubHeader />
        <AccountRecommended />
    </div>
  )
}

export default Account