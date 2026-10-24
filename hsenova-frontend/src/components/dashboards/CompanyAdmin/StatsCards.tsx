
import {
  Users,
  Mail,
  Shield,
  Network,
  MapPin,
} from "lucide-react";

import StatCard from "./../StatCard";

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  pendingInvitations: number;
  activeRoles: number;
  totalDepartments: number;
  totalSites: number;
}

interface StatsCardsProps {
  stats: DashboardStats;
}

export default function StatsCards({
  stats,
}: StatsCardsProps) {
  const cards = [
    {
      title: "Total users",
      value: stats.totalUsers,
      icon: Users,
      iconColor: "#FF7300",
      iconBackground: "#47250F",
      subtitle: "Users in your company",
    },
    {
      title: "Pending invitation",
      value: stats.pendingInvitations,
      icon: Mail,
      iconColor: "#FFD600",
      iconBackground: "#3E3710",
      subtitle: "Waiting for acceptance",
    },
    {
      title: "Active roles",
      value: stats.activeRoles,
      icon: Shield,
      iconColor: "#FF7300",
      iconBackground: "#47250F",
      subtitle: "Configured",
    },
    {
      title: "Departments",
      value: stats.totalDepartments,
      icon: Network,
      iconColor: "#FF7300",
      iconBackground: "#47250F",
      subtitle: "Configured",
    },
    {
      title: "Sites / Locations",
      value: stats.totalSites,
      icon: MapPin,
      iconColor: "#1CEB34",
      iconBackground: "#103D32",
      subtitle: "Active",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          {...card}
        />
      ))}
    </section>
  );
}
