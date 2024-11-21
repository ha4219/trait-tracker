import { useChampions } from '@/hooks/use-champions';
import { ChampionContainer } from './champion/champion-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { EmblemContainer } from './emblem/emblem-container';
import { AugmentContainer } from './augment/augment-container';

export const FilterTabs = () => {
  const { champions, others } = useChampions();
  return (
    <Tabs defaultValue="champions">
      <TabsList>
        <TabsTrigger value="champions">champions</TabsTrigger>
        <TabsTrigger value="emblem">emblem</TabsTrigger>
        <TabsTrigger value="augment">augment</TabsTrigger>
      </TabsList>
      <TabsContent value="champions">
        <ChampionContainer
          canClick
          champions={~champions}
          className="rounded-md grid grid-cols-10 gap-4 "
        />
      </TabsContent>
      <TabsContent value="emblem">
        <EmblemContainer others={~others} canClick isDefault />
      </TabsContent>
      <TabsContent value="augment">
        <AugmentContainer others={~others} canClick isDefault />
      </TabsContent>
    </Tabs>
  );
};
