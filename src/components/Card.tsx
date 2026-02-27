interface Props {
  children: React.ReactNode;
  key?: number;
}

export default function Card({ children, key }: Props) {
  return (
    <div
      key={key}
      className="flex flex-col items-start gap-2 bg-olive-200 dark:bg-olive-800 rounded-lg p-4"
    >
      {children}
    </div>
  );
}
