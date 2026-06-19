import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarDays, Factory, MapPin, Wrench } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TechForge Systems is a local team of veteran hardware architects and certified technicians crafting high-performance PCs and surgical-level repairs.",
  alternates: { canonical: "/about" },
};

/* ── Page data ── */

// Three "value" cards in the mission bento grid.
const missionValues = [
  {
    icon: MapPin,
    title: "Local Roots",
    blurb:
      "Founded in the heart of the city, we started with a single soldering iron and a vision for better local tech support.",
  },
  {
    icon: Wrench,
    title: "Expert Repair",
    blurb:
      "Beyond sales, we offer surgical-level hardware repairs that big-box retailers simply can't match.",
  },
  {
    icon: BadgeCheck,
    title: "Lifetime Support",
    blurb:
      "Every system we build comes with our personal guarantee and locally-based lifetime technical support.",
  },
];

// The team members shown in the "Meet the Experts" section.
const teamMembers = [
  {
    name: "Marcus Thorne",
    role: "Founder & Lead Architect",
    image:
      "/images/team-1.jpg",
    alt: "Portrait of Marcus Thorne, founder and lead architect, in a dark high-tech workshop.",
  },
  {
    name: "Elena Rodriguez",
    role: "Master Technician",
    image:
      "/images/team-2.jpg",
    alt: "Portrait of Elena Rodriguez, master technician, holding a precision screwdriver in a glass-walled lab.",
  },
  {
    name: "David Chen",
    role: "Systems Analyst",
    image:
      "/images/team-3.jpg",
    alt: "Portrait of David Chen, systems analyst, surrounded by high-performance workstations.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden md:h-[614px]">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-16">
          <div className="max-w-3xl">
            <span className="mb-4 block font-display text-sm font-medium uppercase tracking-widest text-primary">
              Engineered Locally
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Precision Performance,
              <br />
              <span className="text-primary-container">Rooted in Community.</span>
            </h1>
            <p className="max-w-xl text-lg text-on-surface-variant">
              At TechForge Systems, we don&apos;t just assemble computers; we
              craft high-performance tools for the builders, creators, and
              enthusiasts in our neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ MISSION (Bento grid) ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
          <div className="grid grid-cols-12 gap-6">
            {/* Mission statement with a faint workshop photo behind it */}
            <div className="relative col-span-12 flex min-h-[400px] flex-col justify-end overflow-hidden rounded-xl p-12 glass md:col-span-8">
              <Image
                src="/images/about-workshop.jpg"
                alt="A pristine high-tech computer repair workshop with technicians under cool blue lighting."
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-20"
              />
              <div className="relative z-10">
                <h2 className="mb-4 font-display text-3xl font-semibold">
                  Our Mission
                </h2>
                <p className="max-w-2xl text-lg text-on-surface-variant">
                  To empower local talent by providing world-class engineering
                  solutions and specialized repair services that keep our
                  community at the cutting edge of the digital frontier. We
                  believe performance shouldn&apos;t come from a faceless factory,
                  but from hands you can trust.
                </p>
              </div>
            </div>

            {/* Headline stat */}
            <div className="col-span-12 flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary-container/10 p-8 text-center md:col-span-4">
              <Factory className="mb-4 size-14 text-primary" />
              <h3 className="mb-2 font-display text-2xl font-semibold">12,000+</h3>
              <p className="font-display text-sm uppercase tracking-tight text-on-surface-variant">
                Hours of Precision Assembly
              </p>
            </div>

            {/* Three value cards */}
            {missionValues.map((value) => (
              <div
                key={value.title}
                className="col-span-12 rounded-xl p-8 transition-transform glass hover:scale-[1.01] md:col-span-4"
              >
                <value.icon className="mb-4 size-6 text-primary" />
                <h3 className="mb-2 font-display text-2xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant">{value.blurb}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ════════════════ MEET THE EXPERTS ════════════════ */}
      <Reveal>
        <section className="bg-surface-container-low px-4 py-24 md:px-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="mb-4 font-display text-3xl font-semibold">
                  Meet the Experts
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Our team consists of veteran hardware architects and certified
                  technicians dedicated to the craft of system building.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Join our Team</Link>
              </Button>
            </div>

            {/* Team cards — photo desaturates to color on hover */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="scale-105 object-cover grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6">
                      <p className="font-display text-xs uppercase tracking-widest text-primary">
                        {member.role}
                      </p>
                      <h3 className="font-display text-2xl font-semibold">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════ LOCAL REPAIR CTA ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
          <div className="flex flex-col items-center gap-12 overflow-hidden rounded-2xl p-12 glass md:flex-row">
            <div className="flex-1">
              <h2 className="mb-6 font-display text-3xl font-semibold">
                Need a Local Repair?
              </h2>
              <p className="mb-8 text-lg text-on-surface-variant">
                Don&apos;t ship your precious hardware across the country. Visit
                our downtown forge for diagnostic services, component upgrades,
                and professional cleaning. Most repairs are completed within 48
                hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="glow-hover">
                  <Link href="/contact">
                    <CalendarDays className="size-4" />
                    Book a Repair
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Decorative location panel */}
            <div className="flex aspect-square w-full items-center justify-center rounded-xl border border-outline-variant/30 bg-surface-container-high md:w-1/3">
              <div className="flex flex-col items-center gap-3 text-center text-on-surface-variant">
                <MapPin className="size-12 text-primary" />
                <p className="font-display text-sm uppercase tracking-widest">
                  Downtown Forge
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
