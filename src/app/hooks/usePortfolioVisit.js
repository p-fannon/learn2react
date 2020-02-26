import { useEffect, useState } from "react";

export default function usePortfolioVisit(initialCount) {
  const [pageVisit, setPageVisit] = useState(
    parseInt(localStorage.getItem("portfolioVisit")) !== NaN
      ? parseInt(localStorage.getItem("portfolioVisit"))
      : initialCount
  );

  useEffect(() => {
    localStorage.setItem(
      "portfolioVisit",
      pageVisit.toString() !== "NaN" ? pageVisit.toString() : initialCount
    );
  }, [pageVisit]);

  return [pageVisit, setPageVisit];
}
