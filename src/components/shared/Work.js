import React, { Fragment } from 'react'
import Title from './Title';
import Box from './Box';
import How1 from '../../assets/how-1.svg';
import How2 from '../../assets/how-2.svg';
import How3 from '../../assets/how-3.svg';
import How4 from '../../assets/how-4.svg';
import How5 from '../../assets/how-5.svg';

export default function Work() {
    return (
        <Fragment>
            <section id="works" className="services py-5 how-it-works">
                <div className="container">
                    <Title title="How It's Works" />
                    <div className="row count-section-panel">
                        <Box number="1" image={How1} title="Place Order" />
                        <Box number="2" image={How2} title="Complete Survey" />
                        <Box number="3" image={How3} title="Matched with Writer" />
                        <Box number="4" image={How4} title="Receive Draft" />
                        <Box number="5" image={How5} title="Review & Refine" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
