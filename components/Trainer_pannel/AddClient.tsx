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
import { createTrainerClient } from "@/lib/actions/trainer.action";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "sonner";
import { Button } from "../ui/button";

const AddClient = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClient = async (clientId: string) => {
    try {
      setIsLoading(true);

      const { success, error } = await createTrainerClient({
        clientId,
      });

      if (success) {
        toast.success("Client added successfully");
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
          <IoIosAddCircleOutline />
          Add Client
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-color">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Client?</AlertDialogTitle>
          <AlertDialogDescription>
            This user will be assigned to you as a client and their personal training plan will become active.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            className="bg-red-600 text-white"
            onClick={() => handleClient(userId)}
          >
            {isLoading ? "Adding..." : "Add"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
