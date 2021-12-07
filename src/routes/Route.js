import React, { Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../pages/Home";
import { HOME_URL } from "../constants/url";
import ScrollToTop from "../components/shared/ScrollToTop";
import NotFound from "../components/shared/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RouterList() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter location={history.location} navigator={history}>
      <Suspense fallback={""}>
        <ScrollToTop>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path={HOME_URL} element={<Home />} />
          </Routes>
        </ScrollToTop>
        {/* <GoToTop /> */}
      </Suspense>
    </BrowserRouter>
  );
}
