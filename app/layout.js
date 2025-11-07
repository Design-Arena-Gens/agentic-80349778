import './globals.css';

export const metadata = {
  title: 'Agentic 80349778',
  description: 'Minimal Next.js app deployed to Vercel'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
