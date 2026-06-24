import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Phone, MessageCircle, MapPin, Mail, Calendar, Star, ShieldCheck,
  HeartPulse, Activity, Sparkles, Leaf, Stethoscope,
  Wind, ChevronRight, Quote,
  Menu, X, ChevronDown, Instagram, Facebook, Linkedin, MapPinned, Clock,
  Building2, Users, Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import logoAsset from "@/assets/neurotherapy-logo.png.asset.json";
import backpainAsset from "@/assets/backpain-support.png.asset.json";
import ibsAsset from "@/assets/backpain-support-new.png.asset.json";
import neurotherapyAsset from "@/assets/neurotherapy-consultation.png.asset.json";
import neckpainAsset from "@/assets/neckpain-support.png.asset.json";
import sciaticaAsset from "@/assets/sciatica-support.png.asset.json";
import migraineAsset from "@/assets/migraine-support.png.asset.json";
import arthritisAsset from "@/assets/arthritis-support.png.asset.json";
import arthritisNewAsset from "@/assets/arthritis-support-new.png.asset.json";
import kneePainAsset from "@/assets/knee-pain-support.png.asset.json";
import stressManagementAsset from "@/assets/stress-management.png.asset.json";
import generalWellnessAsset from "@/assets/general-wellness.png.asset.json";
import lifestyleGuidanceAsset from "@/assets/lifestyle-guidance.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neurotherapy Dr. Mahindra | Natural Healing Clinic in Bengaluru" },
      { name: "description", content: "Trusted Neurotherapy and Natural Healing Clinic in Banashankari, Bengaluru. Supporting wellness through Neurotherapy and holistic care. Call +91 76193 35553." },
      { property: "og:title", content: "Neurotherapy Dr. Mahindra | Natural Healing Clinic in Bengaluru" },
      { property: "og:description", content: "Drug-free wellness through Neurotherapy. 10,000+ patients served." },
    { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Neurotherapy Dr. Mahindra",
        description: "Natural Healing and Neurotherapy Clinic in Banashankari, Bengaluru.",
        telephone: "+917619335553",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd Block, Phase 1, Sourabha Complex, 5th Cross Road, Banashankari 1st Stage",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560050",
          addressCountry: "IN",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "41" },
      }),
    }],
  }),
  component: Index,
});

const PHONE = "076193 35553";
const PHONE_TEL = "+917619335553";
const WHATSAPP = "https://wa.me/919035511488";
const WHATSAPP_DISPLAY = "+91 90355 11488";
const INSTAGRAM = "https://www.instagram.com/neurotherapy_dr.mahindra/";
const FACEBOOK = "https://www.facebook.com/NeurotherapyDrMahindra";
const LINKEDIN = "https://www.linkedin.com/in/neurotherapy-dr-mahindra";
const ADDRESS = "2nd Block, Phase 1, Sourabha Complex, 5th Cross Road, Banashankari 1st Stage, Bengaluru, Karnataka 560050";
const MAPS_EMBED = "https://www.google.com/maps?q=Banashankari+1st+Stage+Bengaluru&output=embed";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Sourabha+Complex+Banashankari+1st+Stage+Bengaluru";

const services = [
  { title: "Neurotherapy Consultation", desc: "Personalized assessment and natural therapy planning.", image: neurotherapyAsset.url },
  { title: "Back Pain Support", desc: "Targeted pressure-point therapy for chronic back discomfort.", image: backpainAsset.url },
  { title: "Neck Pain Support", desc: "Gentle techniques to ease stiffness and tension.", image: neckpainAsset.url },
  { title: "Sciatica Support", desc: "Holistic care for nerve pain and mobility issues.", image: sciaticaAsset.url },
  { title: "Migraine Support", desc: "Drug-free approach to recurring headaches.", image: migraineAsset.url },
  { title: "Frozen Shoulder Care", desc: "Improve range of motion through natural methods.", image: arthritisAsset.url },
  { title: "Arthritis Support", desc: "Comfort and mobility care for joint health.", image: arthritisNewAsset.url },
  { title: "Knee Pain Support", desc: "Restore function and reduce strain naturally.", image: kneePainAsset.url },
  { title: "Stress Management", desc: "Calm the nervous system through guided therapy.", image: stressManagementAsset.url },
  { title: "IBS Support", desc: "Holistic care for digestive comfort.", image: ibsAsset.url },
  { title: "Digestive Health", desc: "Strengthen gut wellness with natural approaches." },
  { title: "Lifestyle Guidance", desc: "Daily habits for sustainable well-being.", image: lifestyleGuidanceAsset.url },
  { title: "General Wellness", desc: "Whole-body care for long-term vitality.", image: generalWellnessAsset.url },
];

const whyChoose = [
  { icon: HeartPulse, title: "10,000+ Happy Patients", desc: "A community that trusts our natural approach." },
  { icon: Star, title: "4.9★ Google Rating", desc: "Consistently rated by real patients." },
  { icon: Sparkles, title: "Personalized Care", desc: "Every plan tailored to your body and lifestyle." },
  { icon: Leaf, title: "Natural Wellness", desc: "Drug-free, non-invasive therapies." },
  { icon: Stethoscope, title: "Experienced Guidance", desc: "Years of dedicated practice in neurotherapy." },
  { icon: ShieldCheck, title: "Affordable Services", desc: "Transparent pricing, no hidden costs." },
  { icon: MapPinned, title: "Banashankari Location", desc: "Convenient, accessible Bengaluru clinic." },
];

const testimonials = [
  { name: "Sunita Jain", text: "I am really thankful to Dr. Mahindra for his excellent Neurotherapy treatment. He listens patiently and treats the root cause. I feel much better now. Highly recommended.", rating: 5 },
  { name: "Sree Latha", text: "I experienced a sudden CVA affecting the right side of my body. Dr. Mahindra diagnosed my condition during a home visit and treated me without medication. I recovered significantly and am grateful for his care.", rating: 5 },
  { name: "Sujju Sujju", text: "Trusted place for health. I had a ligament tear and it improved without surgery. Dr. Mahindra is knowledgeable and genuinely cares about diagnosing and treating patients through Neurotherapy.", rating: 5 },
  { name: "Max God", text: "I never expected such improvement in my back and neck pain. Thank you Dr. Mahindra and the Neurotherapy team.", rating: 5 },
  { name: "Anokhi Jain", text: "Dr. Mahindra is a real hero in my husband's life. His therapy has been excellent and we highly recommend visiting for pain relief.", rating: 5 },
  { name: "Anju Mehta", text: "Good treatment experience for knee pain and L4-L5 disc-related issues.", rating: 5 },
  { name: "Jayashree Jay", text: "I had weakness, cervical spondylitis, lumbar spondylitis, vertigo and fear-related issues. After treatment from Dr. Mahindra I experienced remarkable improvement.", rating: 5 },
  { name: "Kishore Chhabria", text: "Excellent support for back pain, osteoarthritis, sciatica and spinal issues. I felt significantly better after treatment.", rating: 5 },
];

const faqs = [
  { q: "What is Neurotherapy?", a: "Neurotherapy is a natural, drug-free wellness approach that uses pressure points and body mechanics to support the nervous system and overall health." },
  { q: "How does Neurotherapy work?", a: "Through controlled pressure on specific points, neurotherapy aims to balance bodily functions and encourage the body's natural healing response." },
  { q: "Is Neurotherapy safe?", a: "Yes. It is non-invasive and drug-free. Sessions are personalized to your condition and comfort." },
  { q: "How many sessions are required?", a: "It varies by individual and condition. Most people notice gradual improvements within a few sessions." },
  { q: "Do I need an appointment?", a: "Yes, prior appointments help us give you focused, unhurried care. Call or WhatsApp us to book." },
  { q: "What conditions can be supported?", a: "Back pain, neck pain, sciatica, migraines, arthritis, stress, digestive issues, and general wellness — among others." },
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120).or(z.literal("")),
  concern: z.string().trim().max(120).optional().default(""),
  date: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(800).optional().default(""),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <CorporateEnquiries />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster richColors position="top-center" />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Neurotherapy Dr. Mahindra">
      <img
        src={logoAsset.url}
        alt="Neurotherapy Dr. Mahindra — Natural Healing, Better Health, Better Life"
        className="h-[60px] w-auto sm:h-[80px]"
      />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Why Us", "#why"],
    ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Corporate", "#corporate"], ["Contact", "#contact"],
  ] as const;
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium hover:bg-secondary">
            <Phone className="h-4 w-4 text-primary" /> {PHONE}
          </a>
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact"><Calendar className="mr-1.5 h-4 w-4" />Book Appointment</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">{l}</a>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="mt-2 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" /> {PHONE}
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground">Book Appointment</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-healing/30 bg-healing/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-healing sm:px-3.5 sm:text-xs">
            <Leaf className="h-3.5 w-3.5 shrink-0" /> <span>Natural Healing • Better Health • Better Life</span>
          </span>
          <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Trusted <span className="text-gradient-brand">Neurotherapy</span> & Natural Healing Clinic in Bengaluru
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
            Helping people improve their health naturally through Neurotherapy and holistic wellness approaches.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 sm:w-auto">
              <a href="#contact"><Calendar className="mr-2 h-4 w-4" />Book Appointment</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full border-border sm:w-auto">
              <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" />Call Now</a>
            </Button>
            <Button asChild size="lg" className="w-full rounded-full bg-whatsapp text-white hover:bg-whatsapp/90 sm:w-auto">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</a>
            </Button>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-5 border-t border-border pt-8 sm:grid-cols-4 sm:gap-6">
            {[
              ["10,000+", "Patients Served"],
              ["4.9★", "Google Rating"],
              ["0", "Side Effects"],
              ["Drug-Free", "Wellness Approach"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xl font-semibold text-foreground sm:text-2xl">{k}</dt>
                <dd className="text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Banashankari, Bengaluru",
    "Drug-Free Therapy",
    "0 Side Effects",
    "Personalized Plans",
    "10,000+ Patients",
    "4.9★ Rated",
    "Natural Healing",
    "Non-Invasive",
  ];
  const loop = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden border-y border-border bg-surface"
      aria-label="Clinic highlights"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-marquee gap-x-10 py-5 pr-10 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground group-hover:[animation-play-state:paused]">
        {loop.map((i, idx) => (
          <span key={`${i}-${idx}`} className="flex shrink-0 items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-healing" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHead eyebrow="About the Clinic" title="A calm space for natural healing" />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Neurotherapy Dr. Mahindra is a trusted Neurotherapy and Natural Healing Clinic dedicated to promoting health and wellness through non-invasive and drug-free approaches. We focus on helping individuals improve their quality of life through personalized wellness guidance and holistic care.
        </p>
        <ul className="mx-auto mt-8 inline-block space-y-3 text-left">
          {["Non-invasive, drug-free therapies", "Personalized plans for every patient", "Whole-body wellness focus"].map((p) => (
            <li key={p} className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-healing" /><span>{p}</span></li>
          ))}
        </ul>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: HeartPulse, k: "10k+", v: "Patients" },
            { icon: Star, k: "4.9★", v: "Rating" },
            { icon: Leaf, k: "100%", v: "Natural" },
            { icon: ShieldCheck, k: "Safe", v: "Non-invasive" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-xl font-semibold">{k}</p>
              <p className="text-xs text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [selected, setSelected] = useState<typeof services[number] | null>(null);
  return (
    <section id="services" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Our Services" title="Holistic care, tailored to you" desc="A range of natural therapies addressing common pain points and long-term wellness goals." />
        <div className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const { title, desc, image } = service;
              return (
              <button
                key={title}
                type="button"
                onClick={() => setSelected(service)}
                className="group flex flex-col rounded-2xl border border-border bg-card text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {image && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Book Now <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            );
            })}
          </div>
        </div>
      </div>
      <ServiceDialog service={selected} onOpenChange={(o) => !o && setSelected(null)} />
    </section>
  );
}

function ServiceDialog({
  service,
  onOpenChange,
}: {
  service: { title: string; desc: string } | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const title = service?.title ?? "";

  function buildWhatsAppText(extra?: { name?: string; phone?: string; date?: string }) {
    const base = `Hi Dr. Mahindra, I am interested in ${title} and would like to book a consultation.`;
    if (!extra) return base;
    const { name, phone, date } = extra;
    const lines = [base];
    if (name) lines.push(`Name: ${name}`);
    if (phone) lines.push(`Mobile: ${phone}`);
    if (date) lines.push(`Preferred date: ${date}`);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const date = String(fd.get("date") ?? "").trim();
    if (name.length < 2) { toast.error("Please enter your name"); return; }
    if (phone.length < 7) { toast.error("Please enter a valid mobile number"); return; }
    setSubmitting(true);
    const text = buildWhatsAppText({ name, phone, date });
    setTimeout(() => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
      toast.success("Opening WhatsApp to confirm your booking");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      onOpenChange(false);
    }, 300);
  }

  return (
    <Dialog open={!!service} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{service?.desc}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div>
            <Label htmlFor="svc-name" className="mb-1.5 inline-block text-sm font-medium">Name<span className="ml-0.5 text-destructive">*</span></Label>
            <Input id="svc-name" name="name" required placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="svc-phone" className="mb-1.5 inline-block text-sm font-medium">Mobile Number<span className="ml-0.5 text-destructive">*</span></Label>
            <Input id="svc-phone" name="phone" type="tel" required placeholder="+91 ..." />
          </div>
          <div>
            <Label htmlFor="svc-date" className="mb-1.5 inline-block text-sm font-medium">Preferred Date</Label>
            <Input id="svc-date" name="date" type="date" />
          </div>
          <div className="flex flex-col gap-2 pt-2 sm:flex-row">
            <Button type="submit" disabled={submitting} className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Calendar className="mr-2 h-4 w-4" />{submitting ? "Sending..." : "Book Appointment"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                window.open(`${WHATSAPP}?text=${encodeURIComponent(buildWhatsAppText())}`, "_blank");
              }}
              className="flex-1 rounded-full bg-whatsapp text-white hover:bg-whatsapp/90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />Chat on WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function WhyChoose() {
  return (
    <section id="why" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Why Choose Us" title="Care you can trust" />
        <div className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-healing/15 text-healing"><Icon className="h-5 w-5" /></div>
                <p className="mt-4 font-semibold">{title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust stats */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: Star, label: "4.9 ★", sub: "Google Rating" },
            { icon: MessageCircle, label: "41+", sub: "Verified Reviews" },
            { icon: Calendar, label: "10+", sub: "Years Experience" },
            { icon: Leaf, label: "Drug-Free", sub: "Natural Therapy" },
            { icon: HeartPulse, label: "Personalized", sub: "Patient Care" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-card">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-xl font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Patient Reviews & Success Stories</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Patients Across Bangalore</h2>
          <p className="mt-4 text-muted-foreground">Real experiences shared by patients who have undergone Neurotherapy treatment.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
              <Star className="h-3 w-3 fill-current" />
            </span>
            4.9/5 Rating — Based on 41+ Google Reviews
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-5 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t) => (
            <ReviewCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-14 lg:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 basis-full sm:basis-1/2">
                  <ReviewCard t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA & disclaimer */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full border-border">
            <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noreferrer">
              Read More Google Reviews <ChevronRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <p className="mx-auto mt-6 max-w-xl text-xs text-muted-foreground">
            Individual results may vary. Testimonials reflect personal experiences of patients.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1 hover:shadow-soft">
      <div className="flex gap-0.5 text-healing">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.text}"</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
          {t.name[0]}
        </span>
        <div className="min-w-0">
          <span className="block truncate text-sm font-medium">{t.name}</span>
          <span className="block truncate text-xs text-muted-foreground">Verified Patient</span>
        </div>
      </figcaption>
    </figure>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="rounded-xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Contact" title="Book your appointment" desc="Tell us how we can help — we usually respond within a few hours." />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold">Visit the clinic</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-muted-foreground">{ADDRESS}</p></div>
                <a href={`tel:${PHONE_TEL}`} className="flex gap-3 hover:text-primary"><Phone className="h-5 w-5 shrink-0 text-primary" /><span>{PHONE}</span></a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-healing"><MessageCircle className="h-5 w-5 shrink-0 text-healing" /><span>{WHATSAPP_DISPLAY}</span></a>
                <div className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-muted-foreground">Mon – Sat • By Appointment</p></div>
              </div>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Get directions <ChevronRight className="h-4 w-4" /></a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe src={MAPS_EMBED} title="Clinic location" loading="lazy" className="h-72 w-full" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { name, phone, concern, date, message } = parsed.data;
    const text = `Hi, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}${concern ? `\nConcern: ${concern}` : ""}${date ? `\nPreferred date: ${date}` : ""}${message ? `\n\n${message}` : ""}`;
    setTimeout(() => {
      window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
      toast.success("Opening WhatsApp to confirm your request");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Phone Number" name="phone" required placeholder="+91 ..." type="tel" />
        <Field label="Email" name="email" placeholder="you@example.com" type="email" />
        <Field label="Condition / Concern" name="concern" placeholder="e.g. Back pain" />
        <Field label="Preferred Date" name="date" type="date" />
        <div className="sm:col-span-1" />
        <div className="sm:col-span-2">
          <Label htmlFor="message" className="mb-1.5 inline-block text-sm font-medium">Message</Label>
          <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your condition or goals" />
        </div>
      </div>
      <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
        <Calendar className="mr-2 h-4 w-4" />{submitting ? "Sending..." : "Request Appointment"}
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">By submitting, you'll be redirected to WhatsApp to confirm your booking.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1.5 inline-block text-sm font-medium">{label}{required && <span className="ml-0.5 text-destructive">*</span>}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center rounded-xl bg-background p-3">
            <img src={logoAsset.url} alt="Neurotherapy Dr. Mahindra" className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm text-background/70">Natural Healing • Better Health • Better Life. A trusted neurotherapy clinic in Banashankari, Bengaluru.</p>
          <div className="mt-5 flex gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-whatsapp"><MessageCircle className="h-4 w-4" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20"><Instagram className="h-4 w-4" /></a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20"><Facebook className="h-4 w-4" /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20"><Linkedin className="h-4 w-4" /></a>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" aria-label="Google Maps" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20"><MapPin className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {[["About", "#about"], ["Services", "#services"], ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-background">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>Banashankari 1st Stage, Bengaluru 560050</span></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><span>care@drmahindra.clinic</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Neurotherapy Dr. Mahindra. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-5 sm:right-5">
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp us"
        className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-soft transition-transform hover:scale-105 sm:h-14 sm:w-14">
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a href={`tel:${PHONE_TEL}`} aria-label="Call now"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105 lg:hidden">
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
