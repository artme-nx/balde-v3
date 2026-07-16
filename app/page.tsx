import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

// Stvarne fotke lokala (GBP, vlasničke). Prefiks basePath jer je stranica na /balde-v3/.
const B = "/balde-v3/img";
const IMG = {
  heroTerrace: `${B}/balde-terasa-suncobrani.webp`,
  terraceTables: `${B}/balde-terasa-stolovi.webp`,
  tuna: `${B}/balde-odrezak-tune.webp`,
  platter: `${B}/balde-riblja-plata.webp`,
  board: `${B}/balde-daska-dijeljenje.webp`,
  meatLepinje: `${B}/balde-meso-lepinje.webp`,
  vege: `${B}/balde-vege-daska.webp`,
};

function img(url: string, _w?: number, _q?: number) {
  return url;
}

// Jelovnik prema fotografiranom jelovniku lokala (GBP). Cijene izostavljene (na jelovniku u kunama).
const MENU = [
  {
    cat: "Pržena riba",
    image: IMG.platter,
    dishes: [
      { name: "Pržene lignje", desc: "Panirane i pržene." },
      { name: "Panirana tuna", desc: "File tune u prezlama." },
      { name: "Panirani račići", desc: "Panirani i pohani." },
      { name: "Pržena riba", desc: "Girice ili papaline, po ponudi." },
      { name: "Panirani oslić", desc: "File oslića u prezlama." },
    ],
  },
  {
    cat: "Riba s gradela",
    image: IMG.tuna,
    dishes: [
      { name: "Odrezak tune by chef", desc: "Svježa tuna s gradela." },
      { name: "Odrezak sabljarke", desc: "Sabljarka s gradela." },
      { name: "Odrezak morskog psa", desc: "S gradela." },
      { name: "Pečene lignje", desc: "Cijele lignje s gradela." },
    ],
  },
  {
    cat: "Meso s gradela",
    image: IMG.meatLepinje,
    dishes: [
      { name: "Steak by chef „Balde”", desc: "Potpisni odrezak kuće (250 g)." },
      { name: "Pljeskavice", desc: "Domaća pljeskavica s gradela." },
      { name: "Pileći ražnjići na ružmarinu", desc: "Piletina na grančici ružmarina." },
      { name: "Kotlet i kobasice", desc: "S gradela, uz prilog." },
    ],
  },
  {
    cat: "Vegan",
    image: IMG.vege,
    dishes: [
      { name: "Cijela veganska stranica", desc: "Zasebna veganska stranica jelovnika — predjela, glavna jela, deserti i pića. Gosti je posebno hvale u recenzijama." },
    ],
  },
];

// Bar postoji i ima veganska pića (potvrđeno recenzijama); bez fabriciranih naziva/recepata koktela.
const COCKTAILS = [
  { name: "Kokteli", tag: "Bar", desc: "Miješani kokteli i klasici — pitajte za dnevnu ponudu.", image: IMG.terraceTables },
  { name: "Veganska pića", tag: "Bez iznimke", desc: "Cijela veganska ponuda pića — potvrđena i u gostinskim recenzijama.", image: IMG.vege },
  { name: "Vino i pjenušac", tag: "Uz jelo", desc: "Uz roštilj ili u zalazak nad plažom.", image: IMG.heroTerrace },
  { name: "Osvježenje", tag: "Ljeto", desc: "Bezalkoholna pića i osvježenje na plaži.", image: IMG.board },
];

const GALLERY = [
  { src: IMG.heroTerrace, alt: "Terasa Balde sa slamnatim suncobranima na plaži", tall: true },
  { src: IMG.platter, alt: "Riblja plata za dijeljenje", wide: true },
  { src: IMG.tuna, alt: "Odrezak tune s gradela" },
  { src: IMG.meatLepinje, alt: "Meso s gradela uz lepinje" },
  { src: IMG.board, alt: "Daska za dijeljenje — meso, riba i povrće", wide: true },
  { src: IMG.vege, alt: "Vegansko jelo s gradela" },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.heroTerrace, 1900)}
            alt="Terasa Balde food&bar sa slamnatim suncobranima na plaži Soline"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>
            Beach bar · Plaža Soline, Biograd na Moru
          </span>
          <h1
            className="font-display font-semibold reveal max-w-[16ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Stopala u pijesku, <em className="not-italic" style={{ color: "var(--coral)" }}>čaša</em> u ruci.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "var(--bone-300, #E7D8C4)" }}>
            Beach bar na plaži Soline — riba i meso s gradela, cijela veganska stranica i piće do kasno u noć.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+385955987321"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--coral)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.6" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.6
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ TripAdvisor ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="95" data-suffix="+" style={{ color: "var(--foreground)" }}>
              95+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="manifest" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--coral)" }}>Zašto Balde</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Food&bar na plaži, bez pretenzija.{" "}
            <em className="not-italic" style={{ color: "var(--coral)" }}>Riba i meso s gradela, cijela veganska stranica i pijesak pod nogama.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--coral)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold" style={{ color: "var(--foreground)" }}>
              Riba i meso <em className="not-italic" style={{ color: "var(--coral)" }}>s gradela</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--coral)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl font-semibold" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAR / COCKTAILS */}
      <section id="bar" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--teal)" }}>Bar</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold" style={{ color: "var(--foreground)" }}>
              Koktel u <em className="not-italic" style={{ color: "var(--teal)" }}>zalazak</em>
            </h2>
            <p className="mt-5 max-w-[52ch] mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Bar radi do kasno. Kokteli, vino i cijela veganska ponuda pića — uvijek dobro rashlađeno.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COCKTAILS.map((c) => (
              <div key={c.name} className="reveal overflow-hidden rounded-2xl" style={{ background: "var(--background)" }}>
                <div className="h-[220px] overflow-hidden">
                  <img src={img(c.image, 600)} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-label mb-2" style={{ color: "var(--teal)" }}>{c.tag}</div>
                  <div className="font-display text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>{c.name}</div>
                  <div className="text-[0.9rem]" style={{ color: "var(--muted-foreground)" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.terraceTables, 1000)} alt="Terasa Balde food&bar na plaži Soline" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold mb-6" style={{ color: "var(--foreground)" }}>
              Na plaži, <em className="not-italic" style={{ color: "var(--coral)" }}>uz more</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Balde je food&bar na plaži Soline u Biogradu na Moru, korak od mora — pogled ide na otok Vrgadu i ulaz u Kornate.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Na jelovniku su riba i meso s gradela i pržena riba, a uz to i cijela veganska stranica koju gosti posebno hvale u recenzijama. Danju plaža i osvježenje, navečer roštilj, piće i druženje koje traje do kasno.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--coral)" }}>
              — Balde food&bar, plaža Soline
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--coral)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold" style={{ color: "var(--foreground)" }}>
              Trenuci na <em className="not-italic" style={{ color: "var(--coral)" }}>plaži</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--card)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold mb-8" style={{ color: "var(--foreground)" }}>
              Nađemo se na <em className="not-italic" style={{ color: "var(--coral)" }}>plaži</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Šetalište Dražice (plaža Soline), Biograd na Moru</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom ili mailom.</p>
              <a href="tel:+385955987321" className="font-display text-2xl font-semibold mt-1 inline-block" style={{ color: "var(--coral)" }}>
                +385 95 598 7321
              </a>
              <p className="mt-1">
                <a href="mailto:baldefoodandbar@gmail.com" className="hover:text-[var(--coral)]" style={{ color: "var(--muted-foreground)" }}>
                  baldefoodandbar@gmail.com
                </a>
              </p>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>otvoreno do 00:00</span>
              </div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Bar</span><span>do kasno u noć</span>
              </div>
            </div>

            <a
              href="tel:+385955987321"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--coral)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Food%26bar+Balde+%C5%A0etali%C5%A1te+Dra%C5%BEice+Biograd+na+Moru&output=embed"
              loading="lazy"
              title="Balde food&bar — plaža Soline, Biograd na Moru"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink-900, #1C1620)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                Balde <span style={{ color: "var(--coral)" }}>food&amp;bar</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Food&bar na plaži Soline, Biograd na Moru. Riba i meso s gradela, cijela veganska stranica i piće do kasno u noć.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--coral)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--coral)]">Jelovnik</a>
                <a href="#bar" className="hover:text-[var(--coral)]">Bar</a>
                <a href="#prica" className="hover:text-[var(--coral)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--coral)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--coral)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--coral)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+385955987321" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 95 598 7321</a>
                <a href="mailto:baldefoodandbar@gmail.com" className="hover:text-[var(--coral)]">baldefoodandbar@gmail.com</a>
                <p>Šetalište Dražice (plaža Soline), Biograd na Moru</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Balde food&amp;bar · Biograd na Moru</span>
            <span>4.6 ★ TripAdvisor · 95+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
