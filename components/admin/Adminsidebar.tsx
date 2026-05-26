"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboardIcon, ShieldCheck, UserPlus, CreditCard, PackageOpen, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navItems: { label: string; href: string; icon: LucideIcon; accent: string }[] = [
  { label: "Add Admin", href: "/admin/add-admin", icon: ShieldCheck, accent: "text-violet-500 dark:text-violet-400" },
  { label: "Add Trainer", href: "/admin/add-trainer", icon: UserPlus, accent: "text-violet-500 dark:text-violet-400" },
  { label: "Memberships", href: "/admin/memberships", icon: CreditCard, accent: "text-violet-500 dark:text-violet-400" },
  { label: "Products", href: "/admin/products", icon: PackageOpen, accent: "text-violet-500 dark:text-violet-400" },
  { label: "Manage Users", href: "/admin/delete-users", icon: User, accent: "text-violet-500 dark:text-violet-400" }
];

const Adminsidebar = () => {
  const pathname = usePathname() || "/";

  return (
    <nav className="min-h-screen w-1/5 lg:sticky lg:top-28 lg:self-start bg-white/95 border border-slate-200 dark:bg-zinc-950/95 dark:border-zinc-800 rounded-lg shadow-sm">
      <div className=" flex flex-col px-4 py-6 lg:px-6 lg:py-8  gap-8">
        <div className="mb-6 flex items-center gap-3">
          <LayoutDashboardIcon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Management</h2>
        </div>

        <ul className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors ${
                    active
                      ? "border border-slate-200 bg-slate-100 dark:border-zinc-700 dark:bg-zinc-900"
                      : "hover:bg-slate-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ${item.accent} dark:bg-zinc-900 dark:text-slate-100`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Adminsidebar;
