interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col gap-2 bg-neutral-100 dark:bg-black/30 rounded-xl p-4">
      {children}
    </div>
  );
}
