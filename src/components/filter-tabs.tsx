import { useChampions } from '@/hooks/use-champions';
import { ChampionContainer } from './champion/champion-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from 'react-i18next';

export const FilterTabs = () => {
  const { champions } = useChampions();
  const { t } = useTranslation();
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        {t('description.filter')}
      </h2>
      <Tabs defaultValue="champions" className="p-10 border rounded-md">
        <TabsList>
          <TabsTrigger value="champions">champions</TabsTrigger>
          {/* <TabsTrigger value="emblem">emblem</TabsTrigger> */}
          {/* <TabsTrigger value="augment">augment</TabsTrigger> */}
        </TabsList>
        <TabsContent value="champions">
          <ChampionContainer
            canClick
            champions={~champions}
            className="rounded-md grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10"
          />
        </TabsContent>
        {/* <TabsContent value="emblem">
        <EmblemContainer others={~others} canClick isDefault />
      </TabsContent> */}
        {/* <TabsContent value="augment">
        <AugmentContainer others={~others} canClick isDefault />
      </TabsContent> */}
      </Tabs>
    </div>
  );
};
