import Link from 'next/link'

const UnitItem = ({unit}) => {

    const userLink = () => {
        return(
            <>
                <Link href={`unit/${unit._id}`}>
                    <a className=" btn btn-info "
                    style={{marginRight: '5px', marginBottom: '15px', flex: 3}}>Details</a>
                </Link>
                <Link href={"/email"}>
                    <a className="btn btn-dark"
                style={{marginLeft: '5px', marginBottom: '15px',flex: 2}}>Contact</a>
                </Link>

            </>
        )
    }




   return(
       <div className="card" style={{ width: '18rem' }}>
           <img className="card-img-top" src={unit.images[0].url} alt={unit.images[0].url} />
           <div className="card-body">
              <h5 className="card-title text-capitalize" title={unit.title}>
                  {unit.title}
              </h5>
              <div className="row justify-content-between mx-0">
                  <h6 className="text-secondary" > ${unit.price} / month </h6>
                  
              </div>


              <p className="card-text" title={unit.description}>
                  {unit.description}
              </p>

              <div className="row justify-content-between mx-0">
                  {userLink()}
              </div>
          </div>
     </div>
  )
}

export default UnitItem