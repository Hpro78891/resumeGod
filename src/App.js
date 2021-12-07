import React, { Fragment, useEffect } from 'react'
import Routes from './routes/Route'
import Aos from 'aos';

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);
  return (
    <Fragment>
      <Routes />
    </Fragment>
  )
}
