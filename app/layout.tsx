import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow "> {children}</div>
        </div>
      </body>
    </html>
  );
}
