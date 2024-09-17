
import { ExampleComponent } from "@/components";


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     {
      [{bg: '#243975', title: 'DIVERSITY QUESTIONS'}, {
        bg: '#9c27b0',
        title: 'STORY TELLING'
      },
      {
        bg: '#1de9b6',
        title: 'UNITY CARDS'
      },
      {bg: '#29b6f6', title: 'CHALENGE CARDS'}
    ].map(({bg, title}, i) => (
        <ExampleComponent key={i} bg={bg} title={title} />
      ))
     }
    </div>

  );
}
