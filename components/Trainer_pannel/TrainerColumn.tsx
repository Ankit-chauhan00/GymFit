import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Client } from "@/types/global";
import { FaUserAlt } from "react-icons/fa";
import { IoFitnessSharp } from "react-icons/io5";
import { SiReactivex } from "react-icons/si";

export const trainerColumns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button variant="ghost">
        {" "}
        <FaUserAlt className="text-red-600" />
        Client Name{" "}
      </Button>
    ),
  },

  {
    accessorKey: "age",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <ArrowUpDown className="ml-2 h-4 w-4 text-red-600 " />
        Age
      </Button>
    ),
  },

  {
    accessorKey: "plan",
    header: ({ column }) => (<Button variant="ghost">
        <IoFitnessSharp className="text-red-600"/>
        Workout Plan
        </Button>),
  },

  {
    accessorKey: "status",
    header: ({ column }) => <Button variant="ghost">
        <SiReactivex className="text-red-600"/>
        Status</Button>,

    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return (
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
