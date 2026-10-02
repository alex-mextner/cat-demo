import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      data-uniq-id="37fba512-ece1-4000-ad88-29f25ed32131"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };

export const SampleDefault = () => {
  return (
    <div data-uniq-id="e89deef2-b44b-480a-81bc-c44ef627d1c4" className="flex flex-wrap items-center gap-4 p-4">
      <Button data-uniq-id="ddfedd97-6597-4f0e-a7dc-2382fc38fe7b">Save Changes</Button>
      <Button data-uniq-id="5f4f4a30-a32e-430b-9c11-f35c5fcb8386" variant="secondary">
        Cancel
      </Button>
      <Button data-uniq-id="3ee4b49c-4779-487d-8ac9-c77b9291a2cc" variant="destructive">
        Delete Account
      </Button>
      <Button data-uniq-id="906bf8d3-f398-486e-85ee-1872656cc5e3" variant="outline">
        Edit Profile
      </Button>
      <Button data-uniq-id="e5006c26-6fd3-456e-b18e-331513be9598" variant="ghost">
        Options
      </Button>
      <Button data-uniq-id="89db9583-13a5-4571-801e-269e854acbc4" variant="link">
        Learn More
      </Button>
      <Button data-uniq-id="dfd0653f-3f80-4138-8488-42f3d7135764" size="sm">
        Small
      </Button>
      <Button data-uniq-id="f4cf0a63-cb50-4676-aba0-decea09f3268" size="lg">
        Large Button
      </Button>
      <Button data-uniq-id="b461243f-d2d0-4197-b231-7a188834bffb" size="icon">
        <svg
          data-uniq-id="9c5431f8-3616-4ff3-b418-5c84fea9ade9"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path data-uniq-id="b86f452a-98ed-4c6e-869e-1712d4ad1caf" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Button>
      <Button data-uniq-id="b2fbbc48-208d-491f-aa5b-19f1d7e5faaa" disabled>
        Disabled
      </Button>
    </div>
  );
};
