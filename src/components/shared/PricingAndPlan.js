import React, { Fragment } from 'react'
import { BASIC_FEATURE_LIST, DELUXE_FEATURE_LIST, PREMIER_FEATURE_LIST } from '../../constants/constants'
import PlanBox from './PlanBox'
import Title from './Title'

export default function PricingAndPlan(props) {
  return (
    <Fragment>
      <section id='planpricing' className="store">
        <div className="container">
          <Title title="Our Plans" />
          <div className="row store-tems" id='store-items'>
            <PlanBox planName="Basic Plan" content="Resume Only" subTitle="" list={BASIC_FEATURE_LIST} price="$59 - $99" selectPlan={props.selectPlan} />
            <PlanBox planName="Deluxe Plan" content="Resume Only + Cover Letter" subTitle="" list={DELUXE_FEATURE_LIST} price="$79 - $129" selectPlan={props.selectPlan} />
            <PlanBox planName="Premier Plan" content="Resume Only + Cover Letter + LinkedIn" subTitle="" list={PREMIER_FEATURE_LIST} price="$99 - $159" selectPlan={props.selectPlan} />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
