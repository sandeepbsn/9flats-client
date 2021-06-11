import React from "react";
import './Footer.css'


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
        
          <div className="col-md-6 col-lg-4 mb-5">
            <h6 className="mb-3 font-weight-bold">Company info</h6>
            <ul className="list-group mb-5">
              <li className="list-group-item list-group-item-light">
                <a href="http://about.9flats.com/what-is-9flats">About 9flats</a>
              </li>
              <li className="list-group-item list-group-item-light">
                <a href="http://about.9flats.com/jobs/open-positions">Jobs</a>
              </li>
              <li className="list-group-item">
                <a href="http://blog.9flats.com/?lang=en">Blog</a>
              </li>
              <li className="list-group-item">
                <a href="http://about.9flats.com/legal-info">Legal info</a>
              </li>
              <li className="list-group-item">
                <a data-title="Terms of service &amp; Data protection policy" href="/terms">Terms and privacy</a>
              </li>
            </ul>
            </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <h6 className="mb-3 font-weight-bold">Any questions?</h6>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="/faq">Help &amp; FAQs</a>
              </li>
              <li className="list-group-item">
                <a href="http://about.9flats.com/press.html">Press</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <h6 className="mb-3 font-weight-bold">Follow us</h6>
            <a className="mr-2"title="Blog" href="http://blog.9flats.com/?lang=en">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="37" height="37"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixmixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M132.92788,1.65385c-3.92788,-0.02584 -7.77824,1.36959 -10.75,4.34135l-6.61538,6.82212l43.62019,43.82692l6.61538,-6.82212c5.96935,-5.96935 6.02103,-15.65985 0,-21.70673l-21.91346,-21.91346c-3.02344,-3.02344 -7.02885,-4.52224 -10.95673,-4.54808zM108.12019,18.8125l-10.33654,9.92308l45.48077,45.48077l10.54327,-9.71635zM91.16827,35.97115l-71.52885,70.90865c-1.65385,0.85276 -2.84254,2.35156 -3.30769,4.13462l-15.29808,51.88942c-0.69772,2.27404 -0.07753,4.78065 1.60217,6.46034c1.67969,1.67969 4.18629,2.29988 6.46033,1.60216l51.88942,-15.29808c2.40324,-0.36178 4.39303,-2.04147 5.16827,-4.34135l70.49519,-69.875l-17.57212,-17.57212h-0.20673l-11.78365,-11.99038zM27.49519,118.66346l3.51442,3.51442l17.15865,1.44712l0.82692,16.74519l4.34135,4.34135l-27.90865,8.0625l-6.20192,-6.20192z"></path></g></g></svg>
            </a>
            <a  className="mr-2" title="Facebook" href="https://www.facebook.com/9flats">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}>
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
                  <path d="M0,172v-172h172v172z" fill="none">
                  </path>
                  <g>
                    <path d="M150.5,132.58333c0,9.89717 -8.0195,17.91667 -17.91667,17.91667h-93.16667c-9.89358,0 -17.91667,-8.0195 -17.91667,-17.91667v-93.16667c0,-9.89717 8.02308,-17.91667 17.91667,-17.91667h93.16667c9.89717,0 17.91667,8.0195 17.91667,17.91667z" fill="#3498db">
                    </path>
                    <path d="M123.152,89.58333h-12.06867v46.58333h-17.91667v-46.58333h-10.75v-14.33333h10.75v-8.63583c0.00717,-12.57033 5.22808,-20.03083 20.038,-20.03083h12.212v14.33333h-8.19508c-5.76558,0 -6.13825,2.15 -6.13825,6.17408v8.15925h14.33333z" fill="#ffffff">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a className="mr-2" title="Twitter" href="https://twitter.com/9flats">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}>
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
                  <path d="M0,172v-172h172v172z" fill="none">
                  </path>
                  <g>
                    <path d="M150.5,132.58333c0,9.89717 -8.02308,17.91667 -17.91667,17.91667h-93.16667c-9.89717,0 -17.91667,-8.0195 -17.91667,-17.91667v-93.16667c0,-9.89717 8.0195,-17.91667 17.91667,-17.91667h93.16667c9.89358,0 17.91667,8.0195 17.91667,17.91667z" fill="#3498db">
                    </path>
                    <path d="M129,61.34667c-3.1605,1.40108 -7.16308,2.71617 -10.75,3.15333c3.64783,-2.16433 9.43492,-6.67217 10.75,-10.75c-3.40775,2.00308 -9.57108,4.14233 -13.59158,4.91633c-3.21067,-3.40417 -7.79017,-4.91633 -12.86417,-4.91633c-9.74667,0 -16.54425,8.25958 -16.54425,17.91667v7.16667c-14.33333,0 -28.30833,-10.91842 -37.00508,-21.5c-1.53008,2.58358 -2.39008,5.60792 -2.39008,8.80425c0,6.51808 5.98775,13.13292 10.7285,16.27908c-2.89175,-0.08958 -8.36708,-2.29692 -10.75,-3.58333c0,0.05733 0,0.129 0,0.20425c0,8.48175 5.95192,14.24017 14.018,15.8455c-1.47275,0.40492 -3.268,1.86692 -10.17667,1.86692c2.24317,6.93375 13.51992,10.5995 21.242,10.75c-6.0415,4.68342 -16.813,7.16667 -25.08333,7.16667c-1.42975,0 -2.20375,0.07883 -3.58333,-0.08242c7.8045,4.945 18.705,7.24908 28.66667,7.24908c32.45425,0 50.16667,-24.7895 50.16667,-47.90917c0,-0.75967 -0.02508,-3.30383 -0.0645,-4.04917c3.46867,-2.44383 4.87333,-5.00233 7.23117,-8.52833" fill="#ffffff">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a className="mr-3" title="Instagram" href="https://www.instagram.com/9flats/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="42" height="42"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}>
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixmixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M55.04,10.32c-24.65626,0 -44.72,20.06374 -44.72,44.72v61.92c0,24.65626 20.06374,44.72 44.72,44.72h61.92c24.65626,0 44.72,-20.06374 44.72,-44.72v-61.92c0,-24.65626 -20.06374,-44.72 -44.72,-44.72zM55.04,17.2h61.92c20.9375,0 37.84,16.9025 37.84,37.84v61.92c0,20.9375 -16.9025,37.84 -37.84,37.84h-61.92c-20.9375,0 -37.84,-16.9025 -37.84,-37.84v-61.92c0,-20.9375 16.9025,-37.84 37.84,-37.84zM127.28,37.84c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88zM86,48.16c-20.85771,0 -37.84,16.98229 -37.84,37.84c0,20.85771 16.98229,37.84 37.84,37.84c20.85771,0 37.84,-16.98229 37.84,-37.84c0,-20.85771 -16.98229,-37.84 -37.84,-37.84zM86,55.04c17.13948,0 30.96,13.82052 30.96,30.96c0,17.13948 -13.82052,30.96 -30.96,30.96c-17.13948,0 -30.96,-13.82052 -30.96,-30.96c0,-17.13948 13.82052,-30.96 30.96,-30.96z"></path></g></g></svg>
            </a>
            <a title="Pinterest" href="https://www.pinterest.com/9flats/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="36" height="36"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}><g transform="">
                  <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBmixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M44.72,172c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-82.56c0,-24.69817 20.02183,-44.72 44.72,-44.72h82.56c24.69817,0 44.72,20.02183 44.72,44.72v82.56c0,24.69817 -20.02183,44.72 -44.72,44.72zM92.88,137.6c24.69817,0 44.72,-20.02183 44.72,-44.72v-13.76c0,-24.69817 -20.02183,-44.72 -44.72,-44.72h-13.76c-24.69817,0 -44.72,20.02183 -44.72,44.72v13.76c0,24.69817 20.02183,44.72 44.72,44.72z" fill="#3498db"></path><g fill="#3498db"><path d="M86,30.96c-30.39584,0 -55.04,24.64416 -55.04,55.04c0,23.31861 14.50763,43.23392 34.98251,51.25141c-0.4816,-4.35275 -0.91733,-11.03552 0.19264,-15.78731c0.99989,-4.29312 6.45344,-27.35947 6.45344,-27.35947c0,0 -1.64661,-3.29781 -1.64661,-8.16885c0,-7.65515 4.43531,-13.36555 9.95765,-13.36555c4.69675,0 6.96256,3.52715 6.96256,7.75147c0,4.72427 -3.00427,11.78315 -4.55915,18.32373c-1.29803,5.48107 2.74741,9.94848 8.15051,9.94848c9.78336,0 17.30091,-10.31541 17.30091,-25.20373c0,-13.17749 -9.46688,-22.39211 -22.98837,-22.39211c-15.65888,0 -24.85056,11.74645 -24.85056,23.88736c0,4.72885 1.82091,9.80171 4.09589,12.56288c0.44949,0.54581 0.51371,1.02283 0.38069,1.57781c-0.41739,1.73835 -1.34389,5.47648 -1.52736,6.24245c-0.23851,1.00907 -0.79808,1.22005 -1.83925,0.73387c-6.87541,-3.20149 -11.17312,-13.25088 -11.17312,-21.32341c0,-17.36053 12.61333,-33.30837 36.36768,-33.30837c19.09429,0 33.93216,13.60405 33.93216,31.79019c0,18.97045 -11.96203,34.23488 -28.56117,34.23488c-5.57739,0 -10.81995,-2.89877 -12.61333,-6.32043c0,0 -2.76117,10.50805 -3.43083,13.08576c-1.24299,4.77931 -4.59584,10.77408 -6.84331,14.42965c5.15083,1.58699 10.62272,2.44928 16.29643,2.44928c30.39584,0 55.04,-24.64416 55.04,-55.04c0,-30.39584 -24.64416,-55.04 -55.04,-55.04z"></path></g><path d="" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M55.04,137.6c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-61.92c0,-11.39916 9.24084,-20.64 20.64,-20.64h61.92c11.39916,0 20.64,9.24084 20.64,20.64v61.92c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M55.04,137.6c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-61.92c0,-11.39916 9.24084,-20.64 20.64,-20.64h61.92c11.39916,0 20.64,9.24084 20.64,20.64v61.92c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M51.6,141.04c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-68.8c0,-11.39916 9.24084,-20.64 20.64,-20.64h68.8c11.39916,0 20.64,9.24084 20.64,20.64v68.8c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M48.16,144.48c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-75.68c0,-11.39916 9.24084,-20.64 20.64,-20.64h75.68c11.39916,0 20.64,9.24084 20.64,20.64v75.68c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M44.72,147.92c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-82.56c0,-11.39916 9.24084,-20.64 20.64,-20.64h82.56c11.39916,0 20.64,9.24084 20.64,20.64v82.56c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M41.28,151.36c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-89.44c0,-11.39916 9.24084,-20.64 20.64,-20.64h89.44c11.39916,0 20.64,9.24084 20.64,20.64v89.44c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M37.84,154.8c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-96.32c0,-11.39916 9.24084,-20.64 20.64,-20.64h96.32c11.39916,0 20.64,9.24084 20.64,20.64v96.32c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M41.28,151.36c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-89.44c0,-11.39916 9.24084,-20.64 20.64,-20.64h89.44c11.39916,0 20.64,9.24084 20.64,20.64v89.44c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M44.72,147.92c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-82.56c0,-11.39916 9.24084,-20.64 20.64,-20.64h82.56c11.39916,0 20.64,9.24084 20.64,20.64v82.56c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M48.16,144.48c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-75.68c0,-11.39916 9.24084,-20.64 20.64,-20.64h75.68c11.39916,0 20.64,9.24084 20.64,20.64v75.68c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M20.64,172c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-130.72c0,-11.39916 9.24084,-20.64 20.64,-20.64h130.72c11.39916,0 20.64,9.24084 20.64,20.64v130.72c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M55.04,137.6c-11.39916,0 -20.64,-9.24084 -20.64,-20.64v-61.92c0,-11.39916 9.24084,-20.64 20.64,-20.64h61.92c11.39916,0 20.64,9.24084 20.64,20.64v61.92c0,11.39916 -9.24084,20.64 -20.64,20.64z" fill="none"></path><path d="M24.94,172c-13.77398,0 -24.94,-11.16602 -24.94,-24.94v-122.12c0,-13.77398 11.16602,-24.94 24.94,-24.94h122.12c13.77398,0 24.94,11.16602 24.94,24.94v122.12c0,13.77398 -11.16602,24.94 -24.94,24.94z" fill="none"></path><path d="M59.34,137.6c-13.77398,0 -24.94,-11.16602 -24.94,-24.94v-53.32c0,-13.77398 11.16602,-24.94 24.94,-24.94h53.32c13.77398,0 24.94,11.16602 24.94,24.94v53.32c0,13.77398 -11.16602,24.94 -24.94,24.94z" fill="none"></path><path d="M33.54,172c-18.52363,0 -33.54,-15.01637 -33.54,-33.54v-104.92c0,-18.52363 15.01637,-33.54 33.54,-33.54h104.92c18.52363,0 33.54,15.01637 33.54,33.54v104.92c0,18.52363 -15.01637,33.54 -33.54,33.54z" fill="none"></path><path d="M67.94,137.6c-18.52363,0 -33.54,-15.01637 -33.54,-33.54v-36.12c0,-18.52363 15.01637,-33.54 33.54,-33.54h36.12c18.52363,0 33.54,15.01637 33.54,33.54v36.12c0,18.52363 -15.01637,33.54 -33.54,33.54z" fill="none"></path><path d="M38.7,172c-21.37342,0 -38.7,-17.32658 -38.7,-38.7v-94.6c0,-21.37342 17.32658,-38.7 38.7,-38.7h94.6c21.37342,0 38.7,17.32658 38.7,38.7v94.6c0,21.37342 -17.32658,38.7 -38.7,38.7z" fill="none"></path><path d="M73.1,137.6c-21.37342,0 -38.7,-17.32658 -38.7,-38.7v-25.8c0,-21.37342 17.32658,-38.7 38.7,-38.7h25.8c21.37342,0 38.7,17.32658 38.7,38.7v25.8c0,21.37342 -17.32658,38.7 -38.7,38.7z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="none"></path><path d="M77.4,137.6c-23.74824,0 -43,-19.25176 -43,-43v-17.2c0,-23.74824 19.25176,-43 43,-43h17.2c23.74824,0 43,19.25176 43,43v17.2c0,23.74824 -19.25176,43 -43,43z" fill="none"></path><path d="M44.72,172c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-82.56c0,-24.69817 20.02183,-44.72 44.72,-44.72h82.56c24.69817,0 44.72,20.02183 44.72,44.72v82.56c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M79.12,137.6c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-13.76c0,-24.69817 20.02183,-44.72 44.72,-44.72h13.76c24.69817,0 44.72,20.02183 44.72,44.72v13.76c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M49.02,172c-27.073,0 -49.02,-21.947 -49.02,-49.02v-73.96c0,-27.073 21.947,-49.02 49.02,-49.02h73.96c27.073,0 49.02,21.947 49.02,49.02v73.96c0,27.073 -21.947,49.02 -49.02,49.02z" fill="none"></path><path d="M83.42,137.6c-27.073,0 -49.02,-21.947 -49.02,-49.02v-5.16c0,-27.073 21.947,-49.02 49.02,-49.02h5.16c27.073,0 49.02,21.947 49.02,49.02v5.16c0,27.073 -21.947,49.02 -49.02,49.02z" fill="none"></path><path d="M53.32,172c-29.44782,0 -53.32,-23.87218 -53.32,-53.32v-65.36c0,-29.44782 23.87218,-53.32 53.32,-53.32h65.36c29.44782,0 53.32,23.87218 53.32,53.32v65.36c0,29.44782 -23.87218,53.32 -53.32,53.32z" fill="none"></path><path d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z" fill="none">
                  </path>
                    <path d="M54.18,172c-29.92279,0 -54.18,-24.25721 -54.18,-54.18v-63.64c0,-29.92279 24.25721,-54.18 54.18,-54.18h63.64c29.92279,0 54.18,24.25721 54.18,54.18v63.64c0,29.92279 -24.25721,54.18 -54.18,54.18z" fill="none"></path><path d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z" fill="none"></path><path d="M52.46,172c-28.97286,0 -52.46,-23.48714 -52.46,-52.46v-67.08c0,-28.97286 23.48714,-52.46 52.46,-52.46h67.08c28.97286,0 52.46,23.48714 52.46,52.46v67.08c0,28.97286 -23.48714,52.46 -52.46,52.46z" fill="none"></path><path d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z" fill="none"></path><path d="M51.6,172c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v-68.8c0,-28.49789 23.10211,-51.6 51.6,-51.6h68.8c28.49789,0 51.6,23.10211 51.6,51.6v68.8c0,28.49789 -23.10211,51.6 -51.6,51.6z" fill="none"></path><path d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z" fill="none"></path><path d="M50.74,172c-28.02293,0 -50.74,-22.71707 -50.74,-50.74v-70.52c0,-28.02293 22.71707,-50.74 50.74,-50.74h70.52c28.02293,0 50.74,22.71707 50.74,50.74v70.52c0,28.02293 -22.71707,50.74 -50.74,50.74z" fill="none"></path><path d="M85.14,137.6c-28.02293,0 -50.74,-22.71707 -50.74,-50.74v-1.72c0,-28.02293 22.71707,-50.74 50.74,-50.74h1.72c28.02293,0 50.74,22.71707 50.74,50.74v1.72c0,28.02293 -22.71707,50.74 -50.74,50.74z" fill="none"></path><path d="M48.16,172c-26.59803,0 -48.16,-21.56197 -48.16,-48.16v-75.68c0,-26.59803 21.56197,-48.16 48.16,-48.16h75.68c26.59803,0 48.16,21.56197 48.16,48.16v75.68c0,26.59803 -21.56197,48.16 -48.16,48.16z" fill="none"></path><path d="M82.56,137.6c-26.59803,0 -48.16,-21.56197 -48.16,-48.16v-6.88c0,-26.59803 21.56197,-48.16 48.16,-48.16h6.88c26.59803,0 48.16,21.56197 48.16,48.16v6.88c0,26.59803 -21.56197,48.16 -48.16,48.16z" fill="none"></path><path d="M47.3,172c-26.12307,0 -47.3,-21.17693 -47.3,-47.3v-77.4c0,-26.12307 21.17693,-47.3 47.3,-47.3h77.4c26.12307,0 47.3,21.17693 47.3,47.3v77.4c0,26.12307 -21.17693,47.3 -47.3,47.3z" fill="none"></path><path d="M81.7,137.6c-26.12307,0 -47.3,-21.17693 -47.3,-47.3v-8.6c0,-26.12307 21.17693,-47.3 47.3,-47.3h8.6c26.12307,0 47.3,21.17693 47.3,47.3v8.6c0,26.12307 -21.17693,47.3 -47.3,47.3z" fill="none"></path><path d="M45.58,172c-25.17314,0 -45.58,-20.40686 -45.58,-45.58v-80.84c0,-25.17314 20.40686,-45.58 45.58,-45.58h80.84c25.17314,0 45.58,20.40686 45.58,45.58v80.84c0,25.17314 -20.40686,45.58 -45.58,45.58z" fill="none"></path><path d="M79.98,137.6c-25.17314,0 -45.58,-20.40686 -45.58,-45.58v-12.04c0,-25.17314 20.40686,-45.58 45.58,-45.58h12.04c25.17314,0 45.58,20.40686 45.58,45.58v12.04c0,25.17314 -20.40686,45.58 -45.58,45.58z" fill="none"></path><path d="M43.86,172c-24.22321,0 -43.86,-19.63679 -43.86,-43.86v-84.28c0,-24.22321 19.63679,-43.86 43.86,-43.86h84.28c24.22321,0 43.86,19.63679 43.86,43.86v84.28c0,24.22321 -19.63679,43.86 -43.86,43.86z" fill="none"></path>
                    <path d="M78.26,137.6c-24.22321,0 -43.86,-19.63679 -43.86,-43.86v-15.48c0,-24.22321 19.63679,-43.86 43.86,-43.86h15.48c24.22321,0 43.86,19.63679 43.86,43.86v15.48c0,24.22321 -19.63679,43.86 -43.86,43.86z" fill="none"></path><path d="M42.14,172c-23.27328,0 -42.14,-18.86672 -42.14,-42.14v-87.72c0,-23.27328 18.86672,-42.14 42.14,-42.14h87.72c23.27328,0 42.14,18.86672 42.14,42.14v87.72c0,23.27328 -18.86672,42.14 -42.14,42.14z" fill="none"></path><path d="M76.54,137.6c-23.27328,0 -42.14,-18.86672 -42.14,-42.14v-18.92c0,-23.27328 18.86672,-42.14 42.14,-42.14h18.92c23.27328,0 42.14,18.86672 42.14,42.14v18.92c0,23.27328 -18.86672,42.14 -42.14,42.14z" fill="none"></path><path d="M41.28,172c-22.79831,0 -41.28,-18.48169 -41.28,-41.28v-89.44c0,-22.79831 18.48169,-41.28 41.28,-41.28h89.44c22.79831,0 41.28,18.48169 41.28,41.28v89.44c0,22.79831 -18.48169,41.28 -41.28,41.28z" fill="none">
                    </path>
                    <path d="M75.68,137.6c-22.79831,0 -41.28,-18.48169 -41.28,-41.28v-20.64c0,-22.79831 18.48169,-41.28 41.28,-41.28h20.64c22.79831,0 41.28,18.48169 41.28,41.28v20.64c0,22.79831 -18.48169,41.28 -41.28,41.28z" fill="none"></path><path d="M40.42,172c-22.32335,0 -40.42,-18.09665 -40.42,-40.42v-91.16c0,-22.32335 18.09665,-40.42 40.42,-40.42h91.16c22.32335,0 40.42,18.09665 40.42,40.42v91.16c0,22.32335 -18.09665,40.42 -40.42,40.42z" fill="none"></path>
                    <path d="M74.82,137.6c-22.32335,0 -40.42,-18.09665 -40.42,-40.42v-22.36c0,-22.32335 18.09665,-40.42 40.42,-40.42h22.36c22.32335,0 40.42,18.09665 40.42,40.42v22.36c0,22.32335 -18.09665,40.42 -40.42,40.42z" fill="none"></path><path d="M37.84,172c-20.89845,0 -37.84,-16.94155 -37.84,-37.84v-96.32c0,-20.89845 16.94155,-37.84 37.84,-37.84h96.32c20.89845,0 37.84,16.94155 37.84,37.84v96.32c0,20.89845 -16.94155,37.84 -37.84,37.84z" fill="none"></path><path d="M72.24,137.6c-20.89845,0 -37.84,-16.94155 -37.84,-37.84v-27.52c0,-20.89845 16.94155,-37.84 37.84,-37.84h27.52c20.89845,0 37.84,16.94155 37.84,37.84v27.52c0,20.89845 -16.94155,37.84 -37.84,37.84z" fill="none"></path><path d="M36.98,172c-20.42349,0 -36.98,-16.55651 -36.98,-36.98v-98.04c0,-20.42349 16.55651,-36.98 36.98,-36.98h98.04c20.42349,0 36.98,16.55651 36.98,36.98v98.04c0,20.42349 -16.55651,36.98 -36.98,36.98z" fill="none"></path><path d="M71.38,137.6c-20.42349,0 -36.98,-16.55651 -36.98,-36.98v-29.24c0,-20.42349 16.55651,-36.98 36.98,-36.98h29.24c20.42349,0 36.98,16.55651 36.98,36.98v29.24c0,20.42349 -16.55651,36.98 -36.98,36.98z" fill="none"></path><path d="M36.12,172c-19.94853,0 -36.12,-16.17147 -36.12,-36.12v-99.76c0,-19.94853 16.17147,-36.12 36.12,-36.12h99.76c19.94853,0 36.12,16.17147 36.12,36.12v99.76c0,19.94853 -16.17147,36.12 -36.12,36.12z" fill="none"></path><path d="M70.52,137.6c-19.94853,0 -36.12,-16.17147 -36.12,-36.12v-30.96c0,-19.94853 16.17147,-36.12 36.12,-36.12h30.96c19.94853,0 36.12,16.17147 36.12,36.12v30.96c0,19.94853 -16.17147,36.12 -36.12,36.12z" fill="none"></path><path d="M36.98,172c-20.42349,0 -36.98,-16.55651 -36.98,-36.98v-98.04c0,-20.42349 16.55651,-36.98 36.98,-36.98h98.04c20.42349,0 36.98,16.55651 36.98,36.98v98.04c0,20.42349 -16.55651,36.98 -36.98,36.98z" fill="none"></path><path d="M71.38,137.6c-20.42349,0 -36.98,-16.55651 -36.98,-36.98v-29.24c0,-20.42349 16.55651,-36.98 36.98,-36.98h29.24c20.42349,0 36.98,16.55651 36.98,36.98v29.24c0,20.42349 -16.55651,36.98 -36.98,36.98z" fill="none"></path><path d="M41.28,172c-22.79831,0 -41.28,-18.48169 -41.28,-41.28v-89.44c0,-22.79831 18.48169,-41.28 41.28,-41.28h89.44c22.79831,0 41.28,18.48169 41.28,41.28v89.44c0,22.79831 -18.48169,41.28 -41.28,41.28z" fill="none"></path><path d="M75.68,137.6c-22.79831,0 -41.28,-18.48169 -41.28,-41.28v-20.64c0,-22.79831 18.48169,-41.28 41.28,-41.28h20.64c22.79831,0 41.28,18.48169 41.28,41.28v20.64c0,22.79831 -18.48169,41.28 -41.28,41.28z" fill="none"></path><path d="M43,172c-23.74824,0 -43,-19.25176 -43,-43v-86c0,-23.74824 19.25176,-43 43,-43h86c23.74824,0 43,19.25176 43,43v86c0,23.74824 -19.25176,43 -43,43z" fill="none"></path><path d="M77.4,137.6c-23.74824,0 -43,-19.25176 -43,-43v-17.2c0,-23.74824 19.25176,-43 43,-43h17.2c23.74824,0 43,19.25176 43,43v17.2c0,23.74824 -19.25176,43 -43,43z" fill="none"></path><path d="M44.72,172c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-82.56c0,-24.69817 20.02183,-44.72 44.72,-44.72h82.56c24.69817,0 44.72,20.02183 44.72,44.72v82.56c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M79.12,137.6c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-13.76c0,-24.69817 20.02183,-44.72 44.72,-44.72h13.76c24.69817,0 44.72,20.02183 44.72,44.72v13.76c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M44.72,172c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-82.56c0,-24.69817 20.02183,-44.72 44.72,-44.72h82.56c24.69817,0 44.72,20.02183 44.72,44.72v82.56c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M79.12,137.6c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-13.76c0,-24.69817 20.02183,-44.72 44.72,-44.72h13.76c24.69817,0 44.72,20.02183 44.72,44.72v13.76c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M44.72,172c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-82.56c0,-24.69817 20.02183,-44.72 44.72,-44.72h82.56c24.69817,0 44.72,20.02183 44.72,44.72v82.56c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none"></path><path d="M79.12,137.6c-24.69817,0 -44.72,-20.02183 -44.72,-44.72v-13.76c0,-24.69817 20.02183,-44.72 44.72,-44.72h13.76c24.69817,0 44.72,20.02183 44.72,44.72v13.76c0,24.69817 -20.02183,44.72 -44.72,44.72z" fill="none">
                    </path></g></g></svg>
            </a>
          </div>
        </div>
        <hr className="mb-5 mt-5" />
        <div>&copy;2020 9flats. All rights reserved.</div>
      </div>
    </div>
  );
}
export default Footer;