import React, { Fragment } from 'react'

export default function Title(props) {
 const { title } = props;
 return (
  <Fragment>
   <div className="row">
    <div className="col-10 mx-auto col-sm-6 text-center">
     <h1 className="text-capitalize">{title}</h1>
    </div>
   </div>
  </Fragment>
 )
}
