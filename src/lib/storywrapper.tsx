export function StoryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[40rem]">
        {children}
      </div>
    </div>
  );
}