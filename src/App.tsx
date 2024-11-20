import { ChampionCard } from './components/champion/champion-card';
import { useChampions } from './hooks/use-champions';
import { champions as C } from '@/data';
import { getAll } from '@/lib/bit';
import { TraitContainer } from '@/components/trait/trait-container';
import { ResultContainer } from '@/components/result/result-container';
import { TestInput } from './components/test/test-input';
import { ChampionContainer } from './components/champion/champion-container';

function App() {
  const { champions } = useChampions();
  return (
    <main className="container mx-auto px-4 gap-y-1 grid grid-flow-row">
      <div className="flex justify-center">
        <img src="/logo-t.png" />
      </div>
      <div className="p-10">
        <TestInput />
      </div>
      <div className="p-10 border rounded-md min-h-48">
        <TraitContainer champions={champions} />
      </div>
      <div className="border p-10 min-h-56">
        <ChampionContainer champions={champions} />
      </div>
      <div className="p-10 border rounded-md grid grid-cols-10 gap-4">
        {getAll(~champions).map((x) => (
          <ChampionCard key={x} {...C[x]} />
        ))}
      </div>
      <div className="p-10 border rounded-md">
        <ResultContainer />
      </div>
    </main>
  );
}

export default App;
