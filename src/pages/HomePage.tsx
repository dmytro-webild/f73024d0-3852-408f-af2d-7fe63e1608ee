import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TeamGlassCards from '@/components/sections/team/TeamGlassCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Key AI Kursi"
      title="Apgūstiet Mākslīgo Intelekta Nākotni"
      description="Vienkāršas un saprotamas mācības ikvienam interesentam, izmantojot jaunākās AI tehnoloģijas."
      primaryButton={{
        text: "Uzzināt Vairāk",
        href: "#about",
      }}
      secondaryButton={{
        text: "Cenu Saraksts",
        href: "#pricing",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-background-with-floating-cyber-particles_1048-14513.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169854.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-cybersecurity-concept-design_23-2151841659.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-key-computer-circuit-board_93675-129578.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-modern-background-with-cyber-particles_1048-12380.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-interior-mall_23-2151591484.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Mūsu Misija"
      descriptions={[
        "Mēs palīdzam cilvēkiem apgūt tehnoloģijas vienkāršā un saprotamā veidā. Key ir izveidots tā, lai pat vislielākie tehnoloģiju iesācēji justos pārliecināti.",
        "Mūsu kursi ir piemēroti ikvienam, kurš vēlas saprast, kā mākslīgais intelekts var uzlabot ikdienas dzīvi un produktivitāti.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesComparison
      tag="Mūsu Kursu Priekšrocības"
      title="Kāpēc izvēlēties Key?"
      description="Mēs piedāvājam ērtu pieeju, kas pielāgota jūsu vajadzībām un tempam."
      negativeItems={[
        "Nav garlaicīgas teorijas",
        "Nav nepieciešamas priekšzināšanas",
        "Nav sarežģītu terminu",
      ]}
      positiveItems={[
        "Praktiska pieredze",
        "Individuāla pieeja",
        "Vienkāršas pamācības",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Mūsu Cenas"
      title="Izvēlieties sev ērtāko veidu"
      description="Skaidri un caurspīdīgi maksājumi par izglītību."
      plans={[
        {
          tag: "Iesācējiem",
          price: "5 €",
          description: "Prezentācija par pamatiem",
          features: [
            "Vienkāršs skaidrojums",
            "Jautājumu sesija",
            "PDF rokasgrāmata",
          ],
          primaryButton: {
            text: "Pieteikties",
            href: "#contact",
          },
        },
        {
          tag: "Populārākais",
          price: "15 €",
          description: "Individuāla Face time sesija",
          features: [
            "Personalizēta palīdzība",
            "Praktiskie uzdevumi",
            "Jautājumu sesija",
          ],
          highlight: "Ieteicams",
          primaryButton: {
            text: "Pieteikties",
            href: "#contact",
          },
        },
        {
          tag: "Profesionāļiem",
          price: "20 €",
          description: "Pilna individuāla tikšanās",
          features: [
            "Padziļināta apmācība",
            "Praktiskais darbs",
            "Materiāli visam gadam",
          ],
          primaryButton: {
            text: "Pieteikties",
            href: "#contact",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamGlassCards
      tag="Mūsu Komanda"
      title="Mācieties no ekspertiem"
      description="Mēs esam šeit, lai palīdzētu jums iepazīt tehnoloģiju pasauli."
      members={[
        {
          name: "Jānis Bērziņš",
          role: "AI Pasniedzējs",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-with-food-take-away-boxes_1303-26789.jpg",
        },
        {
          name: "Anna Kalniņa",
          role: "Tehnoloģiju Speciāliste",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-businessman-suit-pointing-fingers-up-smiling-pleased_176420-31711.jpg",
        },
        {
          name: "Pēteris Ozols",
          role: "Konsultants",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-senior-businessman-with-flipchart_1262-1744.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialMarqueeOverlayCards
      tag="Atsauksmes"
      title="Ko saka mūsu studenti"
      description="Vairāk nekā 100 apmierināti klienti Latvijā."
      testimonials={[
        {
          name: "Marija",
          role: "Pensionāre",
          company: "Key AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-1367.jpg",
        },
        {
          name: "Jānis",
          role: "Iedzīvotājs",
          company: "Key AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/go-this-way-cheerful-friendly-looking-male-pensioner-stylish-clothes-pointing-fore-finger-showing-how-get-museum-attractive-senior-man-indicating-wall-with-copyspace-your-text_343059-2700.jpg",
        },
        {
          name: "Dace",
          role: "Mājsaimniece",
          company: "Key AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-home_23-2150062545.jpg",
        },
        {
          name: "Viktors",
          role: "Pensionārs",
          company: "Key AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-happy-retired-woman-wearing-cozy-sweater-short-hairdo_343059-1198.jpg",
        },
        {
          name: "Līga",
          role: "Pensionāre",
          company: "Key AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-happy-bearded-mature-man-points-index-finger-shows-blank-space_273609-52472.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Biežāk Uzdotie Jautājumi"
      title="Jums ir jautājumi?"
      description="Mēs esam gatavi atbildēt uz visiem jūsu neskaidrajiem jautājumiem."
      categories={[
        {
          name: "Par kursiem",
          items: [
            {
              question: "Vai ir vajadzīgas priekšzināšanas?",
              answer: "Nē, mēs visu izskaidrosim no paša sākuma.",
            },
            {
              question: "Kā notiek apmaksa?",
              answer: "Apmaksa notiek ar pārskaitījumu pēc tikšanās.",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Sazinieties ar mums"
      text="Esat gatavs sākt? Piesakieties savai pirmajai nodarbībai jau šodien!"
      primaryButton={{
        text: "Pieteikties nodarbībai",
        href: "mailto:info@keyai.lv",
      }}
      secondaryButton={{
        text: "Zvanīt mums",
        href: "tel:+37120000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
