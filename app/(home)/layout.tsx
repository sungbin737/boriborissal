import Header from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="sticky">
        <Header />
      </div>
      <div className="flex-grow items-center"> {children}</div>
    </div>
  );
}
