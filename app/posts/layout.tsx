const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pt-20 px-4 max-w-5xl mx-auto">{children}</div>;
};

export default Page;
