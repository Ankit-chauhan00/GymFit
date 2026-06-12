"use client";
import { LayoutDashboard, Users, UserPlus, UserMinus, Dumbbell, Library, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const TrainerBaseURL = "/trainer-pannel";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: TrainerBaseURL,
  },
  {
    name: "My Clients",
    icon: Users,
    href: `${TrainerBaseURL}/clients`,
  },
  {
    name: "Add User",
    icon: UserPlus,
    href: `${TrainerBaseURL}/add-user`,
  },
  {
    name: "Remove User",
    icon: UserMinus,
    href: `${TrainerBaseURL}/remove user`,
  },
  {
    name: "Create Exercise",
    icon: Dumbbell,
    href: `${TrainerBaseURL}/create-exercise`,
  },
  {
    name: "Exercise Library",
    icon: Library,
    href: `${TrainerBaseURL}/exercises`,
  },
];

export default function TrainerSideBar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[72px] flex-col border-r border-white/10 bg-[#0B0B0D] transition-all duration-300 md:w-[280px]">
      {/* Menu */}
      <nav className="flex-1 mt-20 px-3 md:px-4">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <button
                  className={`flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 md:justify-start md:px-4 ${
                    isActive
                      ? "border border-red-500/30 bg-red-500/15 text-red-500"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  } `}
                >
                  <Icon size={20} />

                  <span className="hidden font-medium md:block">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Stats Card */}
      <div className="mb-4 hidden px-4 md:block">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="mb-3 text-sm text-gray-400">Quick Stats</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Clients</span>
              <span className="font-bold text-red-500">32</span>
            </div>

            <div className="flex justify-between">
              <span>Exercises</span>
              <span className="font-bold text-red-500">48</span>
            </div>

            <div className="flex justify-between">
              <span>Workouts</span>
              <span className="font-bold text-red-500">76</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-gray-300 transition-all hover:bg-red-500 hover:text-white">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
