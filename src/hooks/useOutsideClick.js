import { useEffect, useRef } from "react";

export function useOutsideClick(callback, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      }
      document.addEventListener("click", handleClick, {
        capture: listenCapturing,
      });
      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [callback, listenCapturing],
  );

  return ref;
}
