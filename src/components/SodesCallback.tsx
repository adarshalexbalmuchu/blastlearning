import { useEffect, useState } from "react";

export default function SodesCallback() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setError("Invalid SODES response. Token missing.");
      return;
    }

    const sendToBackend = async () => {
      try {
        const res = await fetch("/api/redeem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            sodesToken: token
          })
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Payment initiation failed");
        }

        // Redirect to ICICI payment page
        window.location.href = data.paymentUrl;

      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    };

    sendToBackend();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      {!error ? (
        <>
          <h2>Preparing secure payment…</h2>
          <p>Please do not refresh or go back.</p>
          <div className="spinner" />
        </>
      ) : (
        <>
          <h2>Something went wrong</h2>
          <p>{error}</p>
        </>
      )}
    </div>
  );
}