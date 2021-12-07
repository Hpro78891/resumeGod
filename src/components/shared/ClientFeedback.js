import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { CLIENT_REVIEW } from '../../constants/constants'
import ClientReview from './ClientReview'
import Title from './Title'

export default function ClientFeedback() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
    };
    return (
        <Fragment>
            <section id='feedback' className="py-5 mb-5 home-clients">
                <div className="container">
                    <Title title="Clients Feedback" />
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <Slider {...settings}>
                                {CLIENT_REVIEW.map(({ text, client }) => {
                                    return (
                                        <ClientReview text={text} client={client} />
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
