import React from 'react'
import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { Shell } from './shell'
import { Input } from '../ui/input'
const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link
              aria-label="Home"
              href="/"
              className="flex items-center space-x-2"
            >
              <Zap className="h-6 w-6" aria-hidden="true" />
              <span className="font-bold">mPair Showcase</span>
            </Link>
          </section>

          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-2 gap-10 xs:grid-cols-2 sm:grid-cols-4"
          >
            {/* <div className="space-y-3">
              <h4 className="text-base font-medium">Categories</h4>
              <ul className="space-y-3">
                {categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`/category/${link.id}`}
                      rel={link?.name ? "noreferrer" : undefined}
                      className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground"
                    >
                      {link.name}
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="space-y-3">
              <h4 className="text-base font-medium">Help</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">About</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Contact</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Team</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Support</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Policies</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Career</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Health</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Privacy</li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">Learn more</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Social</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                  <Link
                    href="https://www.linkedin.com/in/asmraihan/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                  <Link
                    href="https://github.com/asmraihan"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    Github
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                  <Link
                    href="https://discord.com/users/asmraihan"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    Discord
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground cursor-pointer font-semibold transition-colors hover:text-foreground">
                  <Link
                    href="https://www.facebook.com/asmraihanbh/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </section>


          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            {/* <SubscribeToNewsletterForm /> */}
            <div className='flex justify-content-center align-items-center '>
              <Input placeholder="Email" className="rounded-e-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed  h-8" />
              <Button size="icon" className="rounded-s-none  h-8">
                <Send className="h-4 w-4 " aria-hidden="true" />
              </Button>
            </div>
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              aria-label="Asm Raihan"
              href="https://github.com/asmraihan"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Asm Raihan
            </a>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href='https://github.com/asmraihan/next-store'
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })
                )}
              >
                {/* <GitHub className="h-4 w-4" aria-hidden="true" /> */}
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </div>
        </section>
      </Shell>
    </footer>
  )
}

export default Footer