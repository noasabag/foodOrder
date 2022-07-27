// import React from "react";
// import ReactDOM from "react-dom";
// import classes from "./Modal.module.css";
// const Modal = (props) => {
//   return (
//     <React.Fragment>
//       {ReactDOM.createPortal(
//         <div className={classes.backdrop}></div>,
//         document.getElementById("overlays")
//       )}
//       {ReactDOM.createPortall(
//         <div className={classes.modal}>
//           <div className={classes.content}>{props.children}</div>
//         </div>,
//         document.getElementById("overlays")
//       )}
//     </React.Fragment>
//   );
// };

// export default Modal;

import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.unshown} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop unshown={props.unshown} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
