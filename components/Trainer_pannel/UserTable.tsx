import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import AddClient from "./AddClient";
import { SafeTrainerUser } from "@/types/action";

interface TrainerAvailableUser {
  users: SafeTrainerUser[];
}

const UserTable = ({ users }: TrainerAvailableUser) => {


  return (
    <>
      <Table className="overflow-hidden rounded-xl">
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-muted/40 transition-colors">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-semibold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-medium">{user.name}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-muted-foreground">{user.email}</TableCell>

              <TableCell>{format(new Date(user.createdAt), "dd MMM yyyy")}</TableCell>

              <TableCell className="text-right">
                <AddClient userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
