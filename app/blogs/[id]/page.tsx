import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if(id === "4") {
    notFound()
  }

  return (
    <h3 className="text-yellow-500 font-bold mt-6">This blog id is: {id}</h3>
  );
}
