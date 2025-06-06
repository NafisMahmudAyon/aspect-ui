import ClientPage from "./ClientPage";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;
  return (
    <div className="">
      <ClientPage id={id} />
    </div>
  );
}