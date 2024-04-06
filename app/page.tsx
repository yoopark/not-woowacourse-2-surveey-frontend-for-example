import { cn } from '@/lib/utils';

const RootPage = () => {
  return (
    <main
      className={cn(
        'h-screen w-screen',
        'flex flex-col items-center justify-center',
        'bg-neutral-50',
      )}
    >
      <button
        className={cn(
          'flex flex-col items-center justify-center gap-10',
          'hover:scale-110',
          'active:scale-100',
          'transition-transform',
        )}
      >
        <p className="text-8xl">👋</p>
        <p className="text-4xl font-bold">Hello World</p>
      </button>
    </main>
  );
};

export default RootPage;
