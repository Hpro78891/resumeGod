import React, { Fragment } from 'react'

export default function Box(props) {
    const { image, title, number } = props
    return (
        <Fragment>
            <div className="col-md-2 text-center my-3">
                <h4 className="text-center">{number}</h4>
                <img src={image} alt="breadicon" />
                <h6 className='text-uppercase my-3 service-title'>{title}</h6>
            </div>
        </Fragment>
    )
}
