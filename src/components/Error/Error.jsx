import './Error.css'

import { Link, useRouteError } from "react-router-dom/dist";

function Error() {
    const error = useRouteError()
    // console.log(error)
  return (
    <div className='error-container'>
      <h1>Oops ... une erreur est survenue : {error?.message}</h1>
      <pre>{error?.status} : {error?.statusText}</pre>
      <Link to="/" className='btn--retour btn'>
        Retour page principale
      </Link>
    </div>
  );
}

export default Error;
