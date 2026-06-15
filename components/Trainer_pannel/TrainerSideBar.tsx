"use client";
import { LayoutDashboard, Users, UserPlus, UserMinus, Dumbbell, Library, LogOut } from "lucide-react";
import Link from "next/link";
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
    href: `${TrainerBaseURL}/trainer-clients`,
  },
  {
    name: "Add Client",
    icon: UserPlus,
    href: `${TrainerBaseURL}/add-client`,
  },
  {
    name: "Remove Client",
    icon: UserMinus,
    href: `${TrainerBaseURL}/remove-client`,
  },
  {
    name: "Create Exercise",
    icon: Dumbbell,
    href: `${TrainerBaseURL}/create-exercise`,
  },
  {
    name: "Exercise Library",
    icon: Library,
    href: `${TrainerBaseURL}/trainer-exercises`,
  },
];

export default function TrainerSideBar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[72px] bg-white flex-col border-r border-white/10 dark:bg-[#0B0B0D] transition-all duration-300 md:w-[80px] lg:w-[280px]">
      {/* Menu */}
      <nav className="mt-20 flex-1 px-3 md:px-4 border-r-2">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} >
                <li >
                  <button
                    className={`flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 md:justify-start md:px-4 ${
                      isActive
                        ? "border border-red-500/30 bg-red-500/15 text-red-500"
                        : "text-black dark:text-gray-300 hover:bg-white/5 hover:text-red-600"
                    } `}
                  >
                    <Icon size={20} />

                    <span className="hidden font-medium lg:block">{item.name}</span>
                  </button>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Stats Card */}
      <div className="mb-4 hidden px-4 lg:block">
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

     
    </aside>
  );
}
