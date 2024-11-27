
import {
    Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


type DialogProps = {
  triggerText: string;
  triggerVariant?: "outline" | "link" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
  dialogTitle: string;
  dialogDescription?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  triggerOn?:React.ReactNode;
};

export function CustomDialog({
  dialogTitle,
  dialogDescription,
  content,
  footer,
  triggerOn
}: DialogProps) {
  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
         {triggerOn}
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="w-full bg-transparent ring-0 border-0">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && <DialogDescription>{dialogDescription}</DialogDescription>}
        </DialogHeader>
        {content}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
