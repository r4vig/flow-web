// data/contact.ts

export const contactIntro = {
  eyebrow: "F",
  title: "Contact",
  subtitle: "Get in touch with our team",
  body:
    "Tell us about your needs and timelines. We’ll propose a tailored mix of services and a clear next step to start delivering value quickly.",
};

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  icon?: string;
};

export const contactMethods: ContactMethod[] = [
  { id: "email", label: "Email", value: "flowidg@proton.me", icon: "mail" },
  { id: "phone", label: "Phone", value: "+1 (555) 123-4567", icon: "phone" },
  { id: "location", label: "Location", value: "Remote / US time zones", icon: "map" },
];
