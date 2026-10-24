// app/(dashboards)/company-admin/layout.tsx
import Sidebar from "../../../src/components/dashboards/CompanyAdmin/SideBar";

export default function CompanyAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#060D16]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}