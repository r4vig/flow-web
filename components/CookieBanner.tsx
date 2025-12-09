"use client";

import { useLayoutEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    // Solo ejecutar en cliente
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setVisible(true);
}

  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 bg-brand-navy text-white p-5 rounded-xl shadow-xl flex justify-between items-center">
      <p className="text-sm">
        We use cookies to enhance your experience. Accept to continue browsing.
      </p>
      <button
        onClick={acceptCookies}
        className="ml-4 px-4 py-2 bg-brand-orange rounded-lg font-semibold"
      >
        Accept
      </button>
    </div>
  );
}
