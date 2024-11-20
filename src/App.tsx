import { ChampionCard } from './components/champion-card';
import { useChampions } from './hooks/use-champions';
import { champions as C } from '@/data';
import { getAll } from './lib/bit';
import { TraitContainer } from '@/components/trait/trait-container';

function App() {
  const { champions } = useChampions();
  return (
    <main className="container mx-auto">
      <div className="flex justify-center">
        <img src="/logo-t.png" />
      </div>
      <div className="p-10 border rounded-md min-h-48">
        <TraitContainer />
      </div>
      <div className="p-10 border rounded-md grid grid-cols-10 gap-4  min-h-56">
        {getAll(champions).map((x) => (
          <ChampionCard key={x} {...C[x]} />
        ))}
      </div>
      <div className="p-10 border rounded-md grid grid-cols-10 gap-4">
        {getAll(~champions).map((x) => (
          <ChampionCard key={x} {...C[x]} />
        ))}
      </div>
    </main>
  );
}

export default App;
