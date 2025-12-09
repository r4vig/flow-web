import Container from "@/components/Container";

export default function CookiesPolicyPage() {
  return (
    <main className="py-28 bg-white">
      <Container className="space-y-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Cookies Policy</h1>
        <p className="text-sm text-brand-navy/70">Last update: 2025</p>

        <p>
          Flow LLC (“Flow”) uses cookies and similar technologies to enhance your
          browsing experience and analyze website performance.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">What are cookies?</h2>
        <p>
          Cookies are small text files stored in your browser that allow websites
          to remember user actions and preferences.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Types of cookies we use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential cookies:</strong> Required for site functionality.</li>
          <li><strong>Analytics cookies:</strong> Help us understand usage and improve UX.</li>
          <li><strong>Performance cookies:</strong> Enhance speed and loading experience.</li>
        </ul>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Managing cookies</h2>
        <p>
          You can disable cookies anytime in your browser settings. However, some
          features may not function properly without them.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Contact</h2>
        <p>
          For any questions regarding cookie usage, contact us at{" "}
          <a href="mailto:flowidg@hotmail.com" className="text-brand-orange font-semibold">
            flowidg@hotmail.com
          </a>.
        </p>

        <p className="text-brand-navy/70 mt-10">
          © {new Date().getFullYear()} Flow LLC — All rights reserved.
        </p>
      </Container>
    </main>
  );
}
