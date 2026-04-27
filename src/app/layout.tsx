import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Evidence Reference",
  description: "Interactive legal reference application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We changed the body background to pink-50 and the text to a soft rose */}
      <body className="bg-pink-50 text-rose-900 antialiased selection:bg-pink-200">
        <NavBar />
        {children}
      </body>
    </html>
  );
}