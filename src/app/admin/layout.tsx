/**
 * Admin layout — deliberately excludes the public TopBar, Navbar, and Footer
 * so the admin panel gets its own full-bleed shell.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
