import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    data-uniq-id="6497d7d8-90b9-4e87-bf16-947940d3c814"
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    data-uniq-id="5562dd52-c115-4ad6-9bfa-177ee7105ebe"
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    data-uniq-id="a1d1bc48-2520-4e9d-b440-6cd64eea5420"
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    data-uniq-id="2aa4c379-8e1e-4ec5-94df-119c9f6baa43"
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    data-uniq-id="2b81fe31-b194-480d-96ed-0ede3363a2bc"
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    data-uniq-id="bac5bdfd-9118-4ea3-94b1-092f3175904c"
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


export const SampleDefault = () => {
  return (
    <div data-uniq-id="b35be186-3164-45ea-a41a-7ec725dcead6" className="max-w-md">
      <Card data-uniq-id="fbbb56ec-d106-4b81-8a29-58e8b2354326">
        <CardHeader data-uniq-id="71c7fe6d-6265-48df-a05e-9f4d0a70c74d">
          <CardTitle data-uniq-id="7861ce06-25de-4619-a561-d7fbd2eb1a88">Project Overview</CardTitle>
          <CardDescription data-uniq-id="80131cd3-129d-4be7-8fbb-9eb07e119230">
            Track your project progress and recent activity
          </CardDescription>
        </CardHeader>
        <CardContent data-uniq-id="fc11a51b-c8ee-4fc2-9da7-b731503d5c99">
          <div data-uniq-id="b28155f3-eebc-4f5f-98f7-9d0030d2bd5e" className="space-y-3">
            <div
              data-uniq-id="c70409bc-d220-4afa-a1dc-2cdec6fe785d"
              className="flex justify-between text-sm">
              <span data-uniq-id="d8f076ef-a458-4e46-8a5e-9a2075cf7450">Completion Rate</span>
              <span
                data-uniq-id="71d167b7-b448-431d-aaad-c17cb49e8531"
                className="font-medium text-emerald-600">78%</span>
            </div>
            <div
              data-uniq-id="c2503b65-bd17-4ad9-822e-42256a3df1db"
              className="flex justify-between text-sm">
              <span data-uniq-id="fec5f9db-e919-4ebc-aa88-950ea8713448">Active Tasks</span>
              <span
                data-uniq-id="067efd59-7348-48c2-8ca3-4e7e27734e51"
                className="font-medium">24</span>
            </div>
            <div
              data-uniq-id="cbb83e15-3c5b-489d-9754-8df553aa0e9a"
              className="flex justify-between text-sm">
              <span data-uniq-id="f7ee0995-1be1-4ebe-921b-ff3751aea57f">Team Members</span>
              <span
                data-uniq-id="1e1a6490-5473-41f7-9bde-d1d891056880"
                className="font-medium">8</span>
            </div>
          </div>
        </CardContent>
        <CardFooter data-uniq-id="57caa524-abcf-4280-9ac7-cd03462d11ee">
          <button
            data-uniq-id="03444cf2-6b42-4a3b-9c31-fecf6863ea87"
            className="text-sm text-primary hover:underline">
            View all details →
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};
