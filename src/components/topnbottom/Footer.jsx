import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"> 
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">HCI Lab</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                807 Union St
                <br />Schenectady, NY 12308
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                (222) 222-2222
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                email will be here
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

       
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary transition-colors">
                  Union College Link
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary transition-colors">
                  CS Department Link
                </Link>
              </li>
             
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Union HCI Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;