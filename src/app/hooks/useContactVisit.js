import { useEffect, useState } from "react";

export default function useContactVisit(initialCount) {
  const [pageVisit, setPageVisit] = useState(
    parseInt(localStorage.getItem("contactVisit")) !== NaN
      ? parseInt(localStorage.getItem("contactVisit"))
      : initialCount
  );

  useEffect(() => {
    localStorage.setItem(
      "contactVisit",
      pageVisit.toString() !== "NaN" ? pageVisit.toString() : initialCount
    );
  }, [pageVisit]);

  return [pageVisit, setPageVisit];
}
