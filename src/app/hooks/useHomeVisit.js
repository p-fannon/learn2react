import { useEffect, useState } from "react";

export default function useHomeVisit(initialCount) {
  const [pageVisit, setPageVisit] = useState(
    parseInt(localStorage.getItem("homeVisit")) !== NaN
      ? parseInt(localStorage.getItem("homeVisit"))
      : initialCount
  );

  useEffect(() => {
    localStorage.setItem(
      "homeVisit",
      pageVisit.toString() !== "NaN" ? pageVisit.toString() : initialCount
    );
  }, [pageVisit]);

  return [pageVisit, setPageVisit];
}
