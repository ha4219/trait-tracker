import { useChampions } from '@/hooks/use-champions';
import { TraitContainer } from '@/components/trait/trait-container';
import { ResultContainer } from '@/components/result/result-container';
import { ChampionContainer } from '@/components/champion/champion-container';
import { FilterTabs } from '@/components/filter-tabs';
import { LangSelect } from '@/components/lang-select';
import { useTranslation } from 'react-i18next';

function App() {
  const { champions } = useChampions();
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 gap-y-1 grid grid-flow-row">
      <div className="flex justify-center">
        <img src="logo-t.png" />
      </div>
      <header className="py-10" dir="rtl">
        <LangSelect />
      </header>
      <div className="">
        <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          {t('description.board')}
        </h2>
        <div className="mb-5 border p-10 min-h-80">
          <TraitContainer champions={champions} />
          <div className="mt-5">
            <ChampionContainer
              canClick
              champions={champions}
              className="rounded-md grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10"
            />
          </div>
        </div>
      </div>

      <div className="">
        <FilterTabs />
      </div>
      <div className="">
        <ResultContainer />
      </div>
    </main>
  );
}

export default App;
