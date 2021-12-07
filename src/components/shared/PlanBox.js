import React, { Fragment } from 'react'
import purify from "dompurify";

export default function PlanBox(props) {
    const { list, price, planName, subTitle, content } = props;
    return (
        <Fragment>
            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item" data-items='sweets'>
                <div className="card single-item">
                    <div className="img-container">
                        <h5 id='store-item-name' class='text-center'>{planName}</h5>
                        <h1>{price}</h1>
                        {content !== "" && content !== null && typeof content !== 'undefined' ? <h3 class='text-center'>{content}</h3> : ""}
                        <p className="text-center">{subTitle}</p>
                        <a class='btn btn-lg-primary' onClick={() => props.selectPlan(planName)} href="#contactus">Get Started</a>
                        <p className="list-data">
                            <strong >
                                Resume professionally written by a Certified Resume Writer
                            </strong>
                        </p>
                        <ul>
                            {list.map((item) => {
                                return (
                                    <li dangerouslySetInnerHTML={{
                                        __html: purify.sanitize(item)
                                    }}></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
