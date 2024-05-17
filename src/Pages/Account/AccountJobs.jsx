import AccountTitle from '../../Components/Account/AccountTitle'
import AccountCard from '../../Components/Account/AccountCard'

import PropTypes from 'prop-types'

const AccountJobs = ({filteredData}) => {
  
  return (
    <div className='flex justify-center items-center w-full bg-white py-[15px]' >
        <div className='flex flex-col justify-start items-start w-[90%]  font-normal text-[16px] '>
            <AccountTitle title="Our Jobs" text="These are our currently available Jobs..."/>
            <div className='grid grid-cols-cardGrid gap-[20px] py-[20px] w-full tablet:grid-cols-mediaGrid'>
          { filteredData?.map((props) => (
            <div key={props._id}><AccountCard price={ props.price } jobTitle={ props.jobTitle } jobDate={ props.jobDate } jobLocation={ props.jobLocation } jobDescription={props.jobDescription} jobID={props.jobID}/></div>
                ))}
                
           </div>
        </div>
    </div>
  )
}

AccountJobs.propTypes = {
  filteredData: PropTypes.array.isRequired,
  jobDate: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  jobLocation: PropTypes.string.isRequired,
  jobID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
export default AccountJobs