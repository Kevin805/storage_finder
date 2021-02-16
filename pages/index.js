import Head from 'next/head'
import {useState} from 'react'
import { getData } from '../utils/fetchData'
import UnitItem from '../components/unit/UnitItem'


const Home = (props) => {
  const[units] = useState(props.units)


  return(
    
    <div className="units"> 
    
      <Head> 
        <title>Home Page</title>
      </Head>
  
     {
      units.length === 0
      ? <h2> No Spaces </h2>

      : units.map(unit => (
        <UnitItem key={unit._id} unit={unit} />
      ))
     }
    </div> 
  )
}

const handleLoadmore = () => {
  setPage(page + 1)
  filterSearch({router, page: page + 1})
}

export async function getServerSideProps() {
   const res = await getData('unit')

   return {
     props: {
       units: res.units,
       result: res.result
     },
   }

}

export default Home