import { useChampions } from '@/hooks/use-champions';

export const TestInput = () => {
  const { setChampions } = useChampions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('champions') as string;
    setChampions(BigInt(value));
  };
  return (
    <form onSubmit={handleSubmit} className="w-full bg-black">
      <input
        name="champions"
        type="text"
        className="w-full bg-black text-white"
      />
    </form>
  );
};
