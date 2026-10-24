
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBackground,
  subtitle,
}: StatCardProps) {
  return (
    <div className="flex min-h-[105px] w-[200px] ml-6 flex-col justify-between rounded-2xl border border-[#FF7300]/40 bg-[#09131D] p-3">
      {/* Icon + Title */}
      <div className="flex items-center gap-5">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: iconBackground }}
        >
          <Icon
            size={19}
            strokeWidth={2.5}
            style={{ color: iconColor }}
          />
        </div>

        <h3 className="text-[13px] font-medium leading-tight text-white">
          {title}
        </h3>
      </div>

      {/* Value */}
      <div className="mt-2">
        <p className="text-[16px] font-semibold leading-none text-white">
          {value.toLocaleString()}
        </p>

        <p className="mt-2 text-[11px] leading-tight text-[#D1D5DB]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
