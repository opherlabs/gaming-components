import { ExampleComponent } from "@/components";
import { CompanyValuesComponent } from "@/components/CompanyValuesComponent";
import { Scorebutton } from "@/components/ScoreButton";


export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {
          [{ bg: '#243975', title: 'DIVERSITY QUESTIONS' }, {
            bg: '#9c27b0',
            title: 'STORY TELLING'
          },
          {
            bg: '#1de9b6',
            title: 'UNITY CARDS'
          },
          { bg: '#29b6f6', title: 'CHALENGE CARDS' }].map(({ bg, title }, i) => (
            <ExampleComponent key={i} bg={bg} title={title} />
          ))
        }
        {/* <ExampleComponent bg="#243975" title="DIVERSITY QUESTIONS" /> */}


      </div>
      <div className="flex px-6">
        <CompanyValuesComponent />

        <Scorebutton />
      </div>
    </>
  );
}
