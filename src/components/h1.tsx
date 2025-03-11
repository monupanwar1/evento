type H1Props = {
  children: React.ReactNode;
};

export default function H1({ children }: H1Props) {
  return (
    <h1 className="font-bold text-3xl lg:text-6xl tracking-tight">
      {children}
    </h1>
  );
}
