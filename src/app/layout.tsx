import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const play = Play({ subsets: ["cyrillic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cinema",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles = classNames(play.className, "bg-main-black h-screen relative ");

  return (
    <html lang="en">
      <body className={styles}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
