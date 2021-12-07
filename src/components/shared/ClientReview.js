import React, { Fragment } from 'react'

export default function ClientReview(props) {
 const { text, client } = props
 return (
  <Fragment>
   <blockquote>
    <div class="inner">
     <p ><i class="fa fa-quote-left" aria-hidden="true"></i> <em>{text}</em>  <i class="fa fa-quote-right" aria-hidden="true"></i> </p>
    </div>
    <footer>
     <cite>{client}</cite>
     <span></span>
    </footer>
   </blockquote>
  </Fragment>
 )
}
