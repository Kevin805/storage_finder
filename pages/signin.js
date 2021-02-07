import Head from 'next/head'
import Link from 'next/link'

const Signin = () => {
    return(
      <div>
        <Head>
          <title> Sign in Page</title> 
        </Head>

        <form className="mx-auto my-4" style={{maxWidth: '500px '}}>
         <div className="form-group">
           <label htmlFor="exampleInputEmail1">Email address</label>
           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
           <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        
        <button type="submit" className="btn btn-info w-100">Login</button>

        <p className="my-2"> 
          Need an account? <Link href="/register"><a style={{color: 'primary'}}> Click here </a></Link>
        </p>
      </form>
    </div>
    )
  }
  
  export default Signin