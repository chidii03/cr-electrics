"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4500}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      theme="light"
      progressClassName="toast-progress"
      toastClassName="cr-toast"
    />
  );
}
