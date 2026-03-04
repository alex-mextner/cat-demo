import * as React from "react"
import { cn } from "@/lib/utils"
import { IconX } from "@tabler/icons-react"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null

  return (
    <div
      data-uniq-id="bab17118-c9f4-443b-ac13-166c9dfb0bc4"
      className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        data-uniq-id="28ea0c4a-b25c-4390-8c1f-226e965bbe7d"
        className="fixed inset-0 bg-black/80"
        onClick={() => onOpenChange?.(false)} />
      <div
        data-uniq-id="4834702c-944d-442e-9ac0-43a9ea9e2afb"
        className="relative z-50">
        {children}
      </div>
    </div>
  );
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      data-uniq-id="53696b5d-5bd0-41b2-ad8b-4f7080946eb7"
      ref={ref}
      className={cn(
        "relative grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
        className
      )}
      {...props}>
      {children}
    </div>
  )
)
DialogContent.displayName = "DialogContent"

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-uniq-id="853976b6-b063-49e0-8611-7f82169acbd6"
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props} />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-uniq-id="b1f67aae-c4a9-4215-81f3-ce8393e35c4e"
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props} />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-uniq-id="4fc5812b-256d-4a9d-8a1b-ebec303d56be"
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />
  );
}


import { useState } from "react"

export const SampleDefault = () => {
  const [open, setOpen] = useState(true)

  return (
    <div data-uniq-id="8e9da6f0-2b13-4710-a14b-8b2885cdb786" className="p-8">
      <button
        data-uniq-id="bd1114bc-51f8-432f-a457-dbb06953a04c"
        onClick={() => setOpen(true)}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
        Open Dialog
      </button>
      <Dialog
        data-uniq-id="f66e077a-4f4f-49ed-b131-077d9442d1aa"
        open={open}
        onOpenChange={setOpen}>
        <DialogContent data-uniq-id="35bcda40-5ebe-4d86-b85a-de3972099ed7">
          <DialogHeader data-uniq-id="a7b28893-900e-4d7d-b0e8-7de698d445da">
            <DialogTitle data-uniq-id="e83d1ad9-4657-439e-b492-bfb80f9a1ad5">Edit Profile</DialogTitle>
            <DialogDescription data-uniq-id="2626622a-a286-4cf7-9015-ced847880e40">
              Make changes to your profile information. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div
            data-uniq-id="6964a1cc-98ec-4474-abbf-35784e041a46"
            className="grid gap-4 py-4">
            <div
              data-uniq-id="e70144f7-72aa-403a-a564-54eeece6fac2"
              className="grid grid-cols-4 items-center gap-4">
              <label
                data-uniq-id="7ad5f378-01e0-49c7-8755-c702f4e15e03"
                className="text-right text-sm font-medium">Name</label>
              <input
                data-uniq-id="32d52fb8-7448-43dd-b627-f87653f782da"
                type="text"
                defaultValue="Sarah Mitchell"
                className="col-span-3 rounded-md border bg-background px-3 py-2 text-sm" />
            </div>
            <div
              data-uniq-id="06ee9f41-3492-4899-b5cc-1feb0b0fddbb"
              className="grid grid-cols-4 items-center gap-4">
              <label
                data-uniq-id="e6bda828-de7e-46c4-9c7e-9851c9932405"
                className="text-right text-sm font-medium">Email</label>
              <input
                data-uniq-id="e0cfd75f-af1b-4d4b-b3a1-63eb94287d80"
                type="email"
                defaultValue="sarah.mitchell@company.com"
                className="col-span-3 rounded-md border bg-background px-3 py-2 text-sm" />
            </div>
          </div>
          <div
            data-uniq-id="284fd3bd-d9bb-449c-be41-1407a556bc58"
            className="flex justify-end gap-2">
            <button
              data-uniq-id="284a254a-2f7a-4e0f-9aa0-f587d003c883"
              onClick={() => setOpen(false)}
              className="rounded-md border px-4 py-2 text-sm font-medium">
              Cancel
            </button>
            <button
              data-uniq-id="063ea8a0-099c-4e71-9c25-e512532703f2"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
