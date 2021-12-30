import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Naviation from '../components/Navigation'
import React from 'react'
import Footer from '../components/Footer'
import Cookies from 'js-cookie'
import CookieConsent from "react-cookie-consent"


const Base = styled.div(tw`min-height[94vh] mx-4 big:mx-20`)
function MyApp({ Component, pageProps }: AppProps) {
  const getCookies = Cookies.get('simplecyto')
  return (
    <>
      <Naviation />
      <Base>
        <Component {...pageProps} />
      </Base>
      <Footer />
      {
         !getCookies && (<CookieConsent
            debug={true}
            location={'bottom'}
            style={{ background: "#292b2c", height: "200px", paddingTop: "15px", display: "flex", flexDirection: "row" }}
            cookieName="simplecyto"
            cookieValue={true}
            buttonText="I agree"
            expires={365}
            ariaAcceptLabel={'true'}
            buttonClasses="bg-info text-white px-5 ml-5 mt-sm-1"
            containerClasses="d-flex justify-content-center"
            contentClasses="col-12"
            overlay
            onAccept={()=>Cookies.set('simplecyto','true')}
          >
            <p>Cookies allow us to provide our services. By using our services, you agree to our use of cookies. See our  <a href="/privacy-policy" className="text-warning"> privacy policy </a>for more </p>
          </CookieConsent>)
        }
    </>
  )
}

export default MyApp
