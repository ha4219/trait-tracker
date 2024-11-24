import { useChampions } from '@/hooks/use-champions';
import { TraitContainer } from '@/components/trait/trait-container';
import { ResultContainer } from '@/components/result/result-container';
import { TestInput } from '@/components/test/test-input';
import { ChampionContainer } from '@/components/champion/champion-container';
import { FilterTabs } from '@/components/filter-tabs';
import { LangSelect } from './components/lang-select';

function App() {
  const { champions } = useChampions();

  return (
    <main className="container mx-auto px-4 gap-y-1 grid grid-flow-row">
      <div className="flex justify-center">
        <img src="/logo-t.png" />
      </div>
      <LangSelect />
      <div className="p-10">
        <TestInput />
      </div>
      <div className="border p-10 min-h-56">
        <div className="mb-5">
          <TraitContainer champions={champions} />
        </div>
        <ChampionContainer
          canClick
          champions={champions}
          className="rounded-md grid grid-cols-10 gap-4 "
        />
      </div>
      <div className="p-10 border ">
        <FilterTabs />
      </div>
      <div className="border rounded-md">
        <ResultContainer />
      </div>
    </main>
  );
}

export default App;
