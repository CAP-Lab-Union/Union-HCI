import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">


          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.union.edu/" legacyBehavior>
                  <a className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    Union College Link
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://cs.union.edu/" legacyBehavior>
                  <a className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    CS Department Link
                  </a>
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