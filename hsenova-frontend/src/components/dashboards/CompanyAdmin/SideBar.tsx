"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutGrid,
  Users,
  ShieldCheck,
  Network,
  MapPin,
  Building2,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

const workspaceLinks = [
  { label: "Users", href: "/company-admin/users", icon: Users },
  { label: "Roles & permissions", href: "/company-admin/roles", icon: ShieldCheck },
  { label: "Departments", href: "/company-admin/departments", icon: Network },
  { label: "Sites / Locations", href: "/company-admin/sites", icon: MapPin },
];

const organizationLinks = [
  { label: "Company", href: "/company-admin/company", icon: Building2 },
  { label: "Settings", href: "/company-admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <aside className="flex h-screen w-[280px] shrink-0 flex-col border-r border-[#1E2A38] bg-[#0B1420] px-4 py-6">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-">
          <img src="/logo.svg" alt="HSENOVA Logo" className="h-48 w-48" />
        </div>
        <div>
          <p className="font-primary text-sm font-bold text-white">HSENova</p>
          <p className="font-secondary text-xs text-grey">Company Admin</p>
        </div>
      </div>

      {/* Dashboard */}
      <Link
        href="/company-admin"
        className={`mb-6 flex h-10 items-center gap-3 rounded-md px-3 font-secondary text-sm font-medium transition-colors ${
          isActive("/company-admin")
            ? "bg-primary text-white"
            : "text-white hover:bg-[#1E2A38]"
        }`}
      >
        <LayoutGrid size={18} />
        Dashboard
      </Link>

      {/* Workspace section */}
      <nav className="flex flex-col gap-1">
        <p className="mb-2 px-3 font-secondary text-xs font-semibold tracking-wide text-grey">
          WORKSPACE
        </p>
        {workspaceLinks.map(({ label, href, icon: Icon }) => (
          <SidebarLink key={href} label={label} href={href} icon={Icon} active={isActive(href)} />
        ))}
      </nav>

      <nav className="mt-6 flex flex-col gap-1">
        <p className="mb-2 px-3 font-secondary text-xs font-semibold tracking-wide text-grey">
          ORGANIZATION
        </p>
        {organizationLinks.map(({ label, href, icon: Icon }) => (
          <SidebarLink key={href} label={label} href={href} icon={Icon} active={isActive(href)} />
        ))}
      </nav>

      {/* Spacer pushes footer down */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="flex flex-col gap-1 border-t border-[#1E2A38] pt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex h-10 items-center gap-3 rounded-md px-3 font-secondary text-sm text-white hover:bg-[#1E2A38]"
        >
          <LogOut size={18} />
          Log out
        </button>
        <Link
          href="/help"
          className="flex h-10 items-center gap-3 rounded-md px-3 font-secondary text-sm text-white hover:bg-[#1E2A38]"
        >
          <HelpCircle size={18} />
          Help
        </Link>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  label: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
}

function SidebarLink({ label, href, icon: Icon, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex h-10 items-center gap-3 rounded-md px-3 font-secondary text-sm transition-colors ${
        active ? "bg-primary text-white" : "text-white hover:bg-[#1E2A38]"
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}