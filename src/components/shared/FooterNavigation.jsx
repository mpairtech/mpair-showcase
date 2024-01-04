import { Link } from "react-router-dom";

const FooterNavigation = () => {

  const navigation = [
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Blog", href: "/blog" },
        { title: "Careers", href: "/careers" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Product",
      links: [
        { title: "Features", href: "/features" },
        { title: "Pricing", href: "/pricing" },
        { title: "Documentation", href: "/documentation" },
        { title: "Guides", href: "/guides" },
      ],
    },
    {
      title: "Connect",
      links: [
        { title: "Email", href: "/email" },
        { title: "Twitter", href: "/twitter" },
        { title: "LinkedIn", href: "/linkedin" },
        { title: "Facebook", href: "/facebook" },
      ],
    },
  ];

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
