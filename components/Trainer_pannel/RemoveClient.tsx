"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { removeTrainerClient } from "@/lib/actions/trainer.action";
import { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const RemoveClient = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveClient = async (clientId: string) => {
    try {
      setIsLoading(true);

      const { success, error } = await removeTrainerClient({
        clientId,
      });

      if (success) {
        toast.success("Client Removed successfully");
        router.refresh();
      } else {
        toast.error(error?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <GrSubtractCircle/>
          Remove Client
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-color">
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Client?</AlertDialogTitle>
          <AlertDialogDescription>
            This user will be assigned to you as a client and Will be removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            className="bg-red-600 text-white"
            onClick={() => handleRemoveClient(userId)}
          >
            {isLoading ? "Removing..." : "Remove"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveClient;
