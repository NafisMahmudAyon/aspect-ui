import examples from "@/data/examples"; // Contains your mapping


export default function ExamplePage({ params }: { params: { category: string, example: string } }) {
  const { category, example } = params;
  
  const Component = examples[category as keyof typeof examples]?.[example as keyof (typeof examples)[keyof typeof examples]];

  if (!Component) return <div>Example not found</div>;

  return <Component />;
}
