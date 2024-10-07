
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="overflow-hidden">
        <div className="w-screen min-h-screen container">{children}</div>
      </main>
    </>
  );
}
