import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Sākums",
    "href": "#hero"
  },
  {
    "name": "Par Mums",
    "href": "#about"
  },
  {
    "name": "Kursi",
    "href": "#features"
  },
  {
    "name": "Cenas",
    "href": "#pricing"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Testimonial",
    "href": "#testimonial"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Key"
      ctaButton={{
        text: "Pieteikties",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Key AI"
      columns={[
        {
          title: "Pakalpojumi",
          items: [
            {
              label: "Prezentācijas",
              href: "#pricing",
            },
            {
              label: "Face time",
              href: "#pricing",
            },
            {
              label: "Tikšanās",
              href: "#pricing",
            },
          ],
        },
      ]}
      copyright="© 2024 Key AI Kursi. Visas tiesības aizsargātas."
      links={[
        {
          label: "Privātuma politika",
          href: "#",
        },
        {
          label: "Noteikumi",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
