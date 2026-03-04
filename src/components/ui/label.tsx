import * as React from "react"
import { cn } from "@/lib/utils"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        data-uniq-id="7230aa72-69d9-4576-bd28-ca85775fc17a"
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        ref={ref}
        {...props} />
    );
  }
)
Label.displayName = "Label"

export { Label }


export const SampleDefault = () => {
  return (
    <div data-uniq-id="52195994-4c61-4792-945a-1ec06bedf460" className="space-y-4">
      <div
        data-uniq-id="4b76f5bd-e4c2-43fc-beca-2f2742cbdf6f"
        className="flex items-center gap-2">
        <Label data-uniq-id="9a3cfe2f-48d2-4a49-94d4-fd1548be7442" htmlFor="email">Email Address</Label>
        <input
          data-uniq-id="69298414-c442-47af-98d2-29d2b4331ca1"
          id="email"
          type="email"
          className="rounded border px-3 py-2"
          defaultValue="user@example.com" />
      </div>
      <div
        data-uniq-id="ed376592-eba2-4ed8-aa04-6e065bcfb20d"
        className="flex items-center gap-2">
        <input
          data-uniq-id="044dc9cc-e089-4fb2-bbec-de0f2a05a080"
          id="notifications"
          type="checkbox"
          className="h-4 w-4"
          defaultChecked />
        <Label
          data-uniq-id="17b9b7d1-10eb-4fb2-8af7-b0bd4b227dea"
          htmlFor="notifications">Enable email notifications</Label>
      </div>
      <div data-uniq-id="b1140430-5862-467e-bd65-7d8ce3dd1c96" className="space-y-2">
        <Label data-uniq-id="2c2e8aaf-0deb-4479-9a0d-8c017dcdaf53" htmlFor="notes">Additional Notes</Label>
        <textarea
          data-uniq-id="d67fb418-9d1e-413e-8d74-cb4190173c6c"
          id="notes"
          className="w-full rounded border px-3 py-2"
          rows={3}
          defaultValue="Enter your message here..." />
      </div>
    </div>
  );
};
