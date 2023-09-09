import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon's Town Country Club",
  description:
    "Simon's Town Country Club, overlooking False Bay, offers a links style golf course, squash facilities, and friendly bar and restaurant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
