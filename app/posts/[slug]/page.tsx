const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params)?.slug;

  return <div>Page asddas, {slug}</div>;
};

export default Page;
