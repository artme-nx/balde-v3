import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1664403421901-1ef422325c7a",
  duskPalms: "https://images.unsplash.com/photo-1542995096-1cd03abc8ac3",
  cliffBar: "https://images.unsplash.com/photo-1580740420282-f4a447af3cb0",
  grillFlames: "https://images.unsplash.com/photo-1774074645502-93eacc3ab819",
  fries: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
  dancing: "https://images.unsplash.com/photo-1758523981262-6b4fe624875f",
  quinoaBowl: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf",
  market: "https://images.unsplash.com/photo-1774618329767-f3acdc022a02",
  peppers: "https://images.unsplash.com/photo-1769181463790-0c5a2a8fea69",
  burger: "https://images.unsplash.com/photo-1560130803-aaadb4bc913e",
  tomahawk: "https://images.unsplash.com/photo-1690618513975-324617013892",
  veganBowl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  figDessert: "https://images.unsplash.com/photo-1774980033884-144c63053258",
  spritz: "https://images.unsplash.com/photo-1782201591364-39945c7f39d2",
  sour: "https://images.unsplash.com/photo-1749314374163-185677265d63",
  mint: "https://images.unsplash.com/photo-1695605302321-ddd35a9ac9f3",
  rose: "https://images.unsplash.com/photo-1763132638690-41311d7dd7ae",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za dijeljenje",
    image: IMG.peppers,
    dishes: [
      { name: "Daska Balde", desc: "Domaći pršut, ovčji sir, masline i humus, uz topli kruh iz naše peći." },
      { name: "Hrskave lignje", desc: "Pohane lignje, aioli s limunom i prženi peršin." },
      { name: "Bruschette iz vrta", desc: "Pečeni kruh, rajčice i bosiljak, ubrano istog jutra u našem vrtu." },
      { name: "Tuna tartar", desc: "Svježa tuna, avokado, sezam i prepečenac." },
    ],
  },
  {
    cat: "Burgeri",
    image: IMG.burger,
    dishes: [
      { name: "Balde Classic", desc: "Domaća pljeskavica, cheddar, karamelizirani luk i naš umak." },
      { name: "Crispy Chicken", desc: "Hrskava piletina, kupus salata, ukiseljeni krastavci, chipotle majoneza." },
      { name: "Veggie Garden", desc: "Pljeskavica od slanutka i povrća iz vrta, grillani halloumi, pesto." },
    ],
  },
  {
    cat: "Sa žara",
    image: IMG.tomahawk,
    dishes: [
      { name: "Tomahawk za dijeljenje", desc: "Zreli odrezak s kosti, sol iz Nina, ružmarin — pečeno na otvorenom plamenu." },
      { name: "Riba dana s roštilja", desc: "Ovisno o ulovu, uz blitvu i naš maslinovo ulje." },
      { name: "Rebarca u BBQ glazuri", desc: "Sporo pečena svinjska rebarca, coleslaw i domaći kruh." },
    ],
  },
  {
    cat: "Zeleno & vegan",
    image: IMG.veganBowl,
    dishes: [
      { name: "Bowl iz vrta", desc: "Sezonsko povrće iz vlastitog vrta, slanutak, avokado i tahini preljev." },
      { name: "Falafel tortilja", desc: "Domaći falafel, hummus, ukiseljeno povrće i mentin jogurt (veganski)." },
      { name: "Quinoa salata", desc: "Quinoa, rajčica, edamame i limun-đumbir vinaigrette." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.figDessert,
    dishes: [
      { name: "Sladoled od smokve", desc: "Kućni sladoled od smokava iz susjednog vrta, s pistacijama." },
      { name: "Smokve s medom", desc: "Pečene smokve, domaći med, mascarpone i pistacije." },
      { name: "Čokoladni brownie", desc: "Topli brownie, sladoled od vanilije i slani karamel." },
    ],
  },
];

const COCKTAILS = [
  { name: "Balde Spritz", tag: "Signature", desc: "Aperol, pjenušac, prstohvat naranče i grančica ružmarina s naše terase.", image: IMG.spritz },
  { name: "Soline Sour", tag: "Klasik", desc: "Bourbon, limun i bjelanjak, s korom naranče — hladan i okrepljujuć.", image: IMG.sour },
  { name: "Vrtna Menta", tag: "Osvježenje", desc: "Rum, menta iz vrta, limeta i smeđi šećer, dobro istučeno s ledom.", image: IMG.mint },
  { name: "Rose od Ružmarina", tag: "Veganski", desc: "Gin, ružičasti grejp i cvijet hibiskusa — lagan i cvjetan.", image: IMG.rose },
];

const GALLERY = [
  { src: IMG.duskPalms, alt: "Terasa Balde u sumrak, palme obasjane svjetlima", tall: true },
  { src: IMG.cliffBar, alt: "Pogled na more i terasu bara", wide: true },
  { src: IMG.grillFlames, alt: "Meso na plamenu roštilja" },
  { src: IMG.fries, alt: "Hrskavi krumpirići u košarici" },
  { src: IMG.dancing, alt: "Društvo uz more u sumrak", wide: true },
  { src: IMG.quinoaBowl, alt: "Zdjela s quinoom i svježim povrćem" },
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
            src={img(IMG.hero, 1900)}
            alt="Terasa Balde food&bar na plaži Soline u zalasku sunca"
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
            Beach bar na plaži Soline — burgeri, riba i povrće iz vlastitog vrta, uz koktele koji traju do kasno u noć.
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
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#9</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 67 restorana u gradu</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="manifest" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--coral)" }}>Zašto Balde</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Ime smo posudili od starih ribarskih kabala — rad rukama, bez pretenzija.{" "}
            <em className="not-italic" style={{ color: "var(--coral)" }}>Povrće iz vlastitog vrta, hrana koju sami pripremamo i pijesak pod nogama.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--coral)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold" style={{ color: "var(--foreground)" }}>
              Domaće, <em className="not-italic" style={{ color: "var(--coral)" }}>sa žara</em> i iz vrta
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
              Naš bar radi do kasno. Klasici, potpisani koktELI i cijela veganska ponuda pića — uvijek dobro rashlađeno.
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
            <img src={img(IMG.market, 1000)} alt="Svježe povrće iz vlastitog vrta Balde" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold mb-6" style={{ color: "var(--foreground)" }}>
              Vrt, more i <em className="not-italic" style={{ color: "var(--coral)" }}>obiteljska ruka</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Balde je obiteljski beach bar na plaži Soline, korak od mora. Ime nosi duh starih dalmatinskih ribarskih kabala — jednostavnost, rad rukama, ništa naglašeno.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Povrće uzgajamo u vlastitom vrtu, meso biramo provjerenog podrijetla, a na jelovniku je i cijela veganska stranica — jer dobra hrana nema iznimke. Danju plaža i osvježenje, navečer roštilj, koktel i druženje koje traje.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--coral)" }}>
              — obitelj Balde, plaža Soline
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
              <p style={{ color: "var(--muted-foreground)" }}>Plaža Soline, Biograd na Moru</p>
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
                <span>Svaki dan</span><span>08:00 – 24:00</span>
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
              src="https://maps.google.com/maps?q=Balde+food+bar+Pla%C5%BEa+Soline+Biograd+na+Moru&output=embed"
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
                Beach bar na plaži Soline, Biograd na Moru. Domaći burgeri, roštilj, povrće iz vlastitog vrta i koktELI do kasno u noć.
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
                <p>Plaža Soline, Biograd na Moru</p>
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
