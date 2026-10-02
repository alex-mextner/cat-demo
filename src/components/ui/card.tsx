import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    data-uniq-id="6497d7d8-90b9-4e87-bf16-947940d3c814"
    ref={ref}
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      data-uniq-id="5562dd52-c115-4ad6-9bfa-177ee7105ebe"
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      data-uniq-id="a1d1bc48-2520-4e9d-b440-6cd64eea5420"
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      data-uniq-id="2aa4c379-8e1e-4ec5-94df-119c9f6baa43"
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      data-uniq-id="2b81fe31-b194-480d-96ed-0ede3363a2bc"
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      data-uniq-id="bac5bdfd-9118-4ea3-94b1-092f3175904c"
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export const SampleDefault = () => {
  return (
    <div data-uniq-id="a18aa3e9-bcc2-4c32-a325-7f2960be3bc8" className="max-w-md">
      <Card data-uniq-id="52a25a99-afbb-4e9d-83af-8f6b016286e4">
        <CardHeader data-uniq-id="0c145bcc-ee82-4f02-a3ba-98688bd53fc7">
          <CardTitle data-uniq-id="5192d912-b96a-4e81-9fc0-7a0ea9dfdfa4">Project Overview</CardTitle>
          <CardDescription data-uniq-id="0befcc9d-fde9-4d28-9fd6-f9415a7ec508">
            Track your project progress and recent activity
          </CardDescription>
        </CardHeader>
        <CardContent data-uniq-id="b71b324e-8a2f-4939-8187-027cff77a45d">
          <div data-uniq-id="74610187-1c2f-4d5a-afef-74d152cad7db" className="space-y-3">
            <div data-uniq-id="4d2fb0a3-9629-447f-ab28-f0300d63e2e7" className="flex justify-between text-sm">
              <span data-uniq-id="e23560f5-8401-4415-bd6e-5820cdc1d75c">Completion Rate</span>
              <span data-uniq-id="3484f6f3-58bc-4ba9-a23f-60e93209e2dc" className="font-medium text-emerald-600">
                78%
              </span>
            </div>
            <div data-uniq-id="7c5992b1-3420-4f08-a4f5-17427cd1d908" className="flex justify-between text-sm">
              <span data-uniq-id="fdcb794c-528a-411e-ad3d-e08e330ef976">Active Tasks</span>
              <span data-uniq-id="1a8d1809-c63c-425b-95c2-5fef26866e99" className="font-medium">
                24
              </span>
            </div>
            <div data-uniq-id="3786b347-0410-477b-a18d-e1d4775ac289" className="flex justify-between text-sm">
              <span data-uniq-id="4b964e9e-b16f-4229-a169-e0df46eec5be">Team Members</span>
              <span data-uniq-id="65df46c6-41be-47e0-b0c4-44013cf884ea" className="font-medium">
                8
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter data-uniq-id="3fd6082a-cf89-4b69-9c65-ef6800916711">
          <button data-uniq-id="8df7aca5-6db6-4111-b812-463484e4b695" className="text-sm text-primary hover:underline">
            View all details →
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};
