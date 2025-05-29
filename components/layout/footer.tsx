export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} eStore Central. All rights reserved.</p>
        <p className="mt-1">Your one-stop shop for ebooks and groceries.</p>
      </div>
    </footer>
  );
}
