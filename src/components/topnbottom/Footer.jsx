export default function Footer() {
    return (
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">
                Department of Computer Science<br />
                Stienmez Hall<br />
                807 Union St<br />
                Schenectadyt, New York 12308
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/research" className="text-muted-foreground hover:text-foreground">
                    Research Areas
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-muted-foreground hover:text-foreground">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-muted-foreground hover:text-foreground">
                    Team Members
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-2">
                Email: contact@1123123.edu
              </p>
              <p className="text-muted-foreground">
                Phone: (123) 123-1233
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} HCI Research Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }