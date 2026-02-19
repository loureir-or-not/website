interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 bg-olive-200 dark:bg-olive-800 rounded-xl p-4">
      {children}
    </div>
  );
}
