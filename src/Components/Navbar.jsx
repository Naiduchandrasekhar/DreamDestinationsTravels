// import React from "react";
// import DreamDestinationLogo from "../Images/DreamDestinationLogo.png";

// const Navbar = () => {
//   return (
//     <div className="p-3">
//       <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
//         <div class="container-fluid bg191916 text-white borderRadius12">
//           <div className="p-2">
//             <img
//               className="DreamDestinationLogo"
//               src={DreamDestinationLogo}
//               alt="dreamLogo"
//             />
//           </div>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             a   <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="30"
//                 height="30"
//                 fill="white"
//                 class="bi bi-list"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//                 />
//               </svg>
//             </span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav d-flex justify-content-end w-100">
//               <div className="mx-3 my-1">Home</div>
//               <div className="mx-3 my-1">Our Cars</div>
//               <div className="mx-3 my-1">Contact Us</div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import DreamDestinationLogo from "../Images/DreamDestinationLogo.png";

const Navbar = () => {
  return (
    <div className="p-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid bgLinearGradient text-white borderRadius12">
          <div className="p-2">
            <img
              className="DreamDestinationLogo"
              src={DreamDestinationLogo}
              alt="dreamLogo"
            />
          </div>

          {/* Toggle Button for Offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="p-2">
                <img
                  className="DreamDestinationLogo"
                  src={DreamDestinationLogo}
                  alt="dreamLogo"
                />
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-block d-lg-none">
              <hr className="hrLine"/>
            </div>
            <div className="offcanvas-body offcanvas-body-container">
              <div className="navbar-nav justify-content-end flex-grow-1 pe-3 fontSanserif">
                <div className="m-2">Home</div>
                <div className="m-2">Our Cars</div>
                <div className="m-2">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
