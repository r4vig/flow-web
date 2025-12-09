import Container from "@/components/Container";

export default function TermsOfServicePage() {
  return (
    <main className="py-28 bg-white">
      <Container className="space-y-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Terms of Service</h1>
        <p className="text-sm text-brand-navy/70">Last update: 2025</p>

        <p>
          These Terms of Service (“Terms”) govern your use of the Flow LLC (“Flow”)
          website and our professional services. By accessing our site or contacting
          us, you agree to these Terms.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Scope of services</h2>
        <p>
          Flow provides logistics support, operational optimization, customer 
          service outsourcing, and nearshore business solutions for U.S. companies 
          operating in North America and Latin America.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Client responsibility</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and updated business information.</li>
          <li>Comply with all applicable regulations for logistics operations.</li>
          <li>Maintain confidentiality of any shared credentials or systems.</li>
        </ul>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Confidentiality</h2>
        <p>
          Flow maintains strict confidentiality over all sensitive business data.
          Information will never be shared without explicit authorization from
          the client.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Limitation of liability</h2>
        <p>
          Flow will not be liable for indirect, incidental, or special damages
          resulting from misuse of services or errors outside operational control,
          including third-party logistics providers and carriers.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Contact</h2>
        <p>
          For any questions regarding these Terms, contact us at{" "}
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
