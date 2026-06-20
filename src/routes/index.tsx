import { createFileRoute } from "@tanstack/react-router";
import { Droplets, GraduationCap, HeartPulse, Utensils, MapPin, Phone, Mail, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/ttg-logo.asset.json";
import heroWater from "@/assets/hero-water.jpg";
import classroom from "@/assets/classroom.jpg";
import impactMalawi from "@/assets/impact-malawi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Time To Give Foundation — Giving to the needy in Africa" },
      { name: "description", content: "Amsterdam-based humanitarian foundation delivering food, education, healthcare and clean water directly to vulnerable communities in Kenya, Malawi and Uganda." },
      { property: "og:title", content: "Time To Give Foundation" },
      { property: "og:description", content: "Direct humanitarian aid from Amsterdam to vulnerable communities across Africa." },
      { property: "og:image", content: heroWater },
      { name: "twitter:image", content: heroWater },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Utensils, title: "Food Security", body: "Warm meal projects in orphanages and food parcels distributed during Ramadan and times of crisis." },
  { icon: GraduationCap, title: "Education", body: "School supplies, books and tuition sponsorship for children from low-income families." },
  { icon: HeartPulse, title: "Healthcare", body: "Direct coverage of medical costs and essential medication for families in need." },
  { icon: Droplets, title: "Clean Water", body: "Boreholes and wells drilled in remote areas, bringing safe drinking water to entire villages." },
];

const stats = [
  { value: "12,500+", label: "Meals served" },
  { value: "42", label: "Water wells" },
  { value: "850", label: "Students sponsored" },
  { value: "3", label: "Countries served" },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Time To Give Foundation logo" className="size-11 rounded-full object-cover ring-1 ring-border" width={44} height={44} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-ink">Time To Give</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Foundation · Amsterdam</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          <a href="#mission" className="hover:text-teal-deep transition-colors">Mission</a>
          <a href="#programs" className="hover:text-teal-deep transition-colors">Programs</a>
          <a href="#impact" className="hover:text-teal-deep transition-colors">Impact</a>
          <a href="#contact" className="hover:text-teal-deep transition-colors">Contact</a>
        </div>
        <a href="#donate" className="inline-flex items-center gap-2 bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-deep transition-colors shadow-sm">
          Donate
          <ArrowRight className="size-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/15 text-teal-deep text-xs font-semibold tracking-[0.18em] uppercase mb-7">
            <span className="size-1.5 rounded-full bg-orange" />
            Amsterdam → Kenya · Malawi · Uganda
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance text-ink">
            Giving to the needy —<br />
            <em className="italic font-medium text-orange-deep">act now by GIVING.</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[55ch] text-pretty leading-relaxed">
            Time To Give Foundation is a registered Dutch humanitarian organisation delivering food, education, healthcare and clean water directly to vulnerable communities across Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#donate" className="inline-flex items-center gap-2 bg-ink text-canvas font-semibold px-7 py-3.5 rounded-full hover:bg-teal-deep transition-colors">
              Donate now <ArrowRight className="size-4" />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 border border-ink/15 text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors">
              See our programs
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <img src={heroWater} alt="Children gathered around a community water well in Africa, smiling as water flows" width={1280} height={1600} className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl ring-1 ring-black/5" />
          <div className="absolute -bottom-6 -left-6 bg-canvas border border-border rounded-2xl shadow-xl p-5 max-w-[240px] hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-orange-deep font-bold mb-2">Active project</p>
            <p className="font-display text-base font-semibold leading-snug text-ink">Borehole drilling in rural Malawi</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <section id="impact" className="border-y border-border bg-canvas">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl md:text-5xl font-semibold text-teal-deep">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-deep font-semibold">Our mission</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.05] text-balance">
            Direct aid from Amsterdam. Felt on the ground in Africa.
          </h2>
          <img src={impactMalawi} alt="A woman drawing clean water from a community borehole" width={1024} height={768} loading="lazy" className="mt-10 w-full aspect-[4/3] object-cover rounded-2xl ring-1 ring-black/5" />
        </div>
        <div className="lg:col-span-7 space-y-12">
          {[
            { h: "Small foundation, immediate action", p: "We are a small-scale, officially registered Dutch foundation operating from Amsterdam Centrum. Without heavy overhead, the gifts we receive translate quickly into real change for orphans, students and families." },
            { h: "Local fundraising, global reach", p: "On Koningsdag and at neighbourhood events in Amsterdam our volunteers raise the funds that drive our projects in Kenya, Malawi and Uganda — from school books to surgery, from food parcels to fresh water." },
            { h: "Dignity over pity", p: "We work alongside the communities we serve. Every project is led by local need: a well where there is none, a school uniform for a child who would otherwise stay home, medicine for a parent who has run out of options." },
          ].map((b, i) => (
            <div key={b.h} className="border-t border-border pt-8">
              <div className="text-xs font-mono text-orange-deep mb-3">0{i + 1}</div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3 italic">{b.h}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[58ch]">{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-accent/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-orange-deep font-semibold">What we do</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ink leading-tight text-balance max-w-2xl">
              Four pillars of direct humanitarian aid.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">From a hot meal in a Nairobi orphanage to a borehole in a Ugandan village — every euro lands where it matters.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <article key={title} className="group bg-card p-8 rounded-2xl border border-border hover:border-teal hover:-translate-y-1 transition-all duration-300">
              <div className="size-12 rounded-xl bg-teal/15 text-teal-deep flex items-center justify-center mb-6 group-hover:bg-orange/15 group-hover:text-orange-deep transition-colors">
                <Icon className="size-6" strokeWidth={1.75} />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground mb-2">0{i + 1}</div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <img src={classroom} alt="Students reading at wooden desks in a sunlit African classroom" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-black/5" />
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-orange-deep font-semibold">A child sponsored</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.05] text-balance">
            "One book, one meal, one well — it changes everything."
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-[52ch]">
            Through partnerships with local orphanages and schools, we sponsor students who would otherwise be unable to attend class. Pencils, notebooks, uniforms and exam fees — small costs in the Netherlands, life-changing in rural East Africa.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { country: "Kenya", focus: "Schools & orphanages" },
              { country: "Malawi", focus: "Water & healthcare" },
              { country: "Uganda", focus: "Food parcels" },
            ].map((c) => (
              <div key={c.country} className="border-t-2 border-teal pt-3">
                <div className="font-display text-lg font-semibold text-ink">{c.country}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="donate" className="px-6 pb-24">
      <div className="max-w-7xl mx-auto rounded-3xl bg-ink text-canvas px-8 md:px-16 py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-orange/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-teal/30 blur-3xl" aria-hidden />
        <div className="relative max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">Act now by GIVING</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            Your gift today becomes a meal, a book, a drop of clean water — tomorrow.
          </h2>
          <p className="mt-6 text-canvas/70 text-lg max-w-[55ch]">
            We are a registered Dutch foundation. Get in touch to donate, sponsor a student, or partner with us on a project.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:timetogivefoundation@gmail.com" className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-full hover:bg-orange-deep transition-colors">
              Donate via email <ArrowRight className="size-4" />
            </a>
            <a href="tel:+31687630687" className="inline-flex items-center gap-2 border border-canvas/20 text-canvas font-semibold px-7 py-3.5 rounded-full hover:bg-canvas/10 transition-colors">
              Call +31 6 87630687
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-canvas border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <img src={logo.url} alt="Time To Give Foundation" className="size-16 rounded-full ring-1 ring-border mb-6" width={64} height={64} />
          <h3 className="font-display text-2xl font-semibold text-ink">Get in touch</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Reach our Amsterdam team for donations, partnerships or volunteering.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <ContactCard icon={MapPin} label="Visit us" value="Resedastraat" sub="Amsterdam Centrum, Netherlands" />
          <ContactCard icon={Phone} label="Call us" value="+31 6 87630687" sub="Mon — Fri, 9:00 – 17:00 CET" href="tel:+31687630687" />
          <ContactCard icon={Mail} label="Email" value="timetogivefoundation@gmail.com" sub="We reply within 48 hours" href="mailto:timetogivefoundation@gmail.com" />
          <ContactCard icon={Facebook} label="Facebook" value="Time To Give Foundation" sub="Amsterdam Centrum" href="https://www.facebook.com/" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, sub, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string; href?: string }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap {...(href ? { href } : {})} className="bg-card border border-border rounded-2xl p-6 hover:border-teal transition-colors block">
      <div className="size-9 rounded-lg bg-teal/15 text-teal-deep flex items-center justify-center mb-4">
        <Icon className="size-4" />
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{label}</div>
      <div className="font-display text-lg font-semibold text-ink mt-1 break-words">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </Wrap>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Time To Give Foundation · Amsterdam, Netherlands</p>
        <p className="uppercase tracking-[0.2em]">
          Powered by <a href="https://vanappiah.com/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-orange-deep transition-colors font-semibold">Van Appiah</a>
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Mission />
      <Programs />
      <Story />
      <Donate />
      <Contact />
      <Footer />
    </main>
  );
}
