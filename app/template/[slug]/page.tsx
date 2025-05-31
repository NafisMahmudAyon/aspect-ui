import ClientPage from "./ClientPage";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  return (
    <div className="">
      <ClientPage slug={slug} />
    </div>
  );
}