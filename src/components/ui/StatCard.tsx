
import { Stat } from "@/types/stats";

type StatCardProps = {
  stat: Stat;
};

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="text-white p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
      <h3 className="text-2xl md:text-4xl font-bold mb-2">{stat.number}</h3>
      <p className="text-xs md:text-sm text-white/90">{stat.label}</p>
    </div>
  );
};
