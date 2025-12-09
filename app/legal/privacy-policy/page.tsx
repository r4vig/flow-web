import Container from "@/components/Container";

export default function PrivacyPolicyPage() {
  return (
    <main className="py-28 bg-white">
      <Container className="space-y-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Privacy Policy</h1>
        <p className="text-sm text-brand-navy/70">Last update: 2025</p>

        <p>
          At Flow LLC (“Flow”), we respect your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard the data you provide when interacting
          with our website and services.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Information we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name, email, phone number, company information.</li>
          <li>Service preferences and project requirements.</li>
          <li>Technical information such as IP, browser, and usage analytics.</li>
        </ul>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">How we use your data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To contact you and respond to your inquiries.</li>
          <li>To analyze logistics and service requests.</li>
          <li>To improve our user experience and website performance.</li>
        </ul>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Third-party services</h2>
        <p>
          We may partner with secure providers for: hosting, analytics, and email
          communication. We never sell your information.
        </p>

        <h2 className="text-xl font-semibold text-brand-navy mt-6">Data Rights</h2>
        <p>
          You may request access, correction, or deletion of your data at any time
          by contacting us at{" "}
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
