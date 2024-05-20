import React from 'react'
import AccountHeader from './AccountHeader'
import AccountHero from './AccountHero'
import AccountSubHeader from './AccountSubHeader'
import AccountRecommended from './AccountRecommended'
import AccountPopular from './AccountSimilar'
import AccountJobs from './AccountJobs'
import AccountFooter from './AccountFooter'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Account = () => {
  const [ result, setResult ] = useState()
  const [ values, setValuse ] = useState({
    availability:'',
    price: '',
    category: '',
    location:''
  })

  const handleChange = (event) => {
    const name = event.target.name
    const val = event.target.value

    setValuse({...values, [name]:val})
  }
    const fetchData = async () => { 
    await axios.get('https://cleaning-service-0mh2.onrender.com/api/job').then((res) => {
      console.log(res)
      setResult(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  // console.log(values)
  const myData = result?.filter((el)=> el.status != 'complete')

  const filteredData = (data) => {
    let filterBy = data?.filter((el) => !values.category || el.category === values.category)
    if (values.availability) {
      filterBy = filterBy?.filter((el)=> el.status === values.availability)
    }
    if (values.location) {
      filterBy = filterBy?.filter((el)=> el.jobLocation === values.location)
    }
    return filterBy
  }
  // console.log(filteredData(result))
  const newData = filteredData(myData)
  useEffect(() => {
    fetchData()
  },[values])
  return (
    <div>
        <AccountHeader />
        {/* <AccountHero /> */}
      <AccountSubHeader handleChange={ handleChange} />
        {/* <AccountRecommended /> */}
        {/* <AccountPopular /> */}
      <AccountJobs filteredData={newData } />
        <AccountFooter />
    </div>
  )
}

export default Account