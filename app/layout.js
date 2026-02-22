import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dreamwell — Your Baby Sleep Expert",
  description: "AI-powered sleep training with Luna, your personal sleep consultant. Peaceful nights are possible.",
  openGraph: {
    title: "Dreamwell — Your Baby Sleep Expert",
    description: "AI-powered sleep training with Luna, your personal sleep consultant. Peaceful nights are possible.",
    url: "https://dreamwell.live",
    siteName: "Dreamwell",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamwell — Your Baby Sleep Expert",
    description: "AI-powered sleep training with Luna. Peaceful nights are possible.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
