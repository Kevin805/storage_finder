import Head from 'next/head'
import { useState } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import Link from 'next/link'



const DetailUnit = (props) => {
    const [unit] = useState(props.unit)
    const [tab, setTab] = useState(0)


    const isActive = (index) => {
        if(tab === index) return "active";
        return ""
    }

    return(
        <div className="row detail_page" >
            <Head>
                <title> Detail Unit </title>
            </Head>

            <div className="col-md-6" style={{marginTop: '32px'}}>
                <img src={ unit.images[tab].url } alt={ unit.images[tab].url }
                className="d-block img-thumbnail rounded mt-4 w-100"
                style={{height: '350px'}} />

                <div className="row mx-0" style={{cursor: 'pointer'}} >

                    {unit.images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.url}
                        className={`img-thumbnail rounded ${isActive(index)}`}
                        style={{height: '80px', width: '20%'}}
                        onClick={() => setTab(index)} />
                    ))}

                </div>
            </div>
            <div className="col-md-6 mt-3">
                <h3 className="text-uppercase" style={{marginTop: '40px'}}>{unit.title}</h3>
                <h5 className="text-dark align-left">${unit.price} Monthly Rate</h5>
                <div className="my-2">
                    {unit.content}
                </div>
                <Link href={"/email"}>
                    <a className="btn btn-dark "
                style={{marginLeft: '-1px', marginBottom: '15px', marginTop: '7px', flex: 2}}>Contact</a>
                </Link>
            </div>
        </div>
    )
}

export async function getServerSideProps({params: {id}}) {

    const res = await getData(`unit/${id}`)
    console.log(res)
    return {
        props: { unit: res.unit },
      
    }
}
export default DetailUnit
