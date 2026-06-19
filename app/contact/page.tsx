import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, Navigation, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechForge Systems for custom PC builds, technical support, or enterprise hardware. Visit our Precision Labs or send us a message.",
  alternates: { canonical: "/contact" },
};

/* ── Page data ── */

// Quick-contact cards (email + phone).
const contactMethods = [
  {
    icon: Mail,
    label: "Support Email",
    value: "forge.support@techforge.local",
  },
  {
    icon: Phone,
    label: "Phone Support",
    value: "+1 (888) FORGE-TC",
  },
];

// Store opening hours.
const storeHours = [
  { day: "Monday - Friday", hours: "09:00 - 20:00" },
  { day: "Saturday", hours: "10:00 - 18:00" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <main className="pt-[72px]">
      {/* ════════════════ CONTACT HERO ════════════════ */}
      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-16 md:px-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* ── Left: headline, info cards, hours ── */}
          <div className="flex flex-col justify-center gap-8 md:col-span-5">
            <div>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-primary">extraordinary</span>.
              </h1>
              <p className="max-w-md text-lg text-on-surface-variant">
                Whether you need a custom-built workstation, technical support, or
                enterprise-grade hardware, our specialists are ready to assist.
              </p>
            </div>

            {/* Contact method cards */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all glass glow-hover"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary-container text-primary">
                    <method.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-xs uppercase tracking-wider text-primary">
                      {method.label}
                    </p>
                    <p className="font-semibold">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Store hours */}
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-6">
              <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold">
                <Clock className="size-6 text-primary" />
                Store Hours
              </h2>
              <ul className="space-y-2 text-on-surface-variant">
                {storeHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between">
                    <span>{entry.day}</span>
                    <span className="font-medium text-on-surface">
                      {entry.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: the interactive contact form ── */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ════════════════ MAP / LOCATION ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 pb-24 md:px-16">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-primary">
                HQ Presence
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                Visit our Precision Labs
              </h2>
            </div>
            <div className="text-right">
              <p className="text-on-surface">1200 Tech Forge Way, Suite 400</p>
              <p className="text-on-surface-variant">Silicon Valley, CA 94025</p>
            </div>
          </div>

          {/* Map image with a floating info card overlay */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-outline-variant/30 shadow-2xl">
            <Image
              src="/images/map-city.jpg"
              alt="A dark, cinematic topographic map of a futuristic city district with glowing cyan streets marking the TechForge HQ."
              fill
              sizes="100vw"
              className="object-cover opacity-60 grayscale"
            />
            <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl p-6 glass">
              <h3 className="mb-2 font-display text-2xl font-semibold text-primary">
                Main Storefront
              </h3>
              <p className="mb-4 text-on-surface-variant">
                Located in the heart of the tech district. Free parking available
                for custom build consultations.
              </p>
              <button className="flex items-center gap-2 font-display text-sm font-medium text-primary hover:underline">
                <Navigation className="size-4" />
                Get Directions
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
