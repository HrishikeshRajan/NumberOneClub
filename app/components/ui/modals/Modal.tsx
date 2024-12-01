
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type DialogProps = {
  dialogTitle: string;
  dialogDescription?: string;
  open?: boolean;
  setOpen: (state:boolean) => void;
  children?: React.ReactNode;
  className?:string;
};

export function CustomDialog({
  dialogTitle,
  dialogDescription,
  open,
  setOpen,
  className,
  children,
}: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={cn('max-w-sm xl:max-w-lg flex justify-center items-center bg-transparent shadow-none rounded-3xl outline-none focus-visible:outline-none ring-0 border-0 p-0 mx-auto gap-0', className)}>
        <DialogHeader>
        <VisuallyHidden.Root>
          <DialogTitle>{dialogTitle}</DialogTitle>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
