import { useEffect, useState } from "react";

export default function useAboutVisit(initialCount) {
  const [pageVisit, setPageVisit] = useState(
    parseInt(localStorage.getItem("aboutVisit")) !== NaN
      ? parseInt(localStorage.getItem("aboutVisit"))
      : initialCount
  );

  useEffect(() => {
    localStorage.setItem(
      "aboutVisit",
      pageVisit.toString() !== "NaN" ? pageVisit.toString() : initialCount
    );
  }, [pageVisit]);

  return [pageVisit, setPageVisit];
}
