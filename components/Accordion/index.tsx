"use client";

import cn from "classnames";
import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon } from "@/components/Icon";

export interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  className?: string;
  title: string|ReactNode;
  isOpen: boolean;
  colorMode?: "dark" | "light";
  tight?: boolean;
  onToggle?: () => void;

  children: ReactElement<typeof AccordionContent>;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactElement<typeof AccordionItem>[];
}

/**
 * The main Accordion component that contains child nodes in a AccordionItem type
 * @param param - a set of props as defined in ./types.ts
 *  - className - any additional class names to the parent div
 *  - children - children in the type of AccordionItem component
 *  - children - children in the type of AccordionComponent
 * @returns
 */
export const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-3",
        "text-text-alternate",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Represents an individual item within an Accordion component.
 * The child node is expected to be of an AccordionComponent type.
 *
 * The item is animated based on the isOpen prop. The maxHeight
 * state is adjusted and then supplied to the content's height
 * in order to perform a smooth animation. The value for this
 * state is identified through the equivalent ref of the content's
 * main div.
 *
 * @param param0 - a set of props as defined in ./types.ts
 *  - className - any additional class names to the parent div
 *  - title - the title to show in the accordion item
 *  - isOpen - indicates whether the item content is toggled
 *  - onToggle - a function that handles the toggle event (or when the item is clicked)
 *  - children - children in the type of AccordionComponent
 * @returns - a JSX element
 */
export const AccordionItem = ({
  className,
  title,
  isOpen,
  children,
  colorMode = "light",
  tight = false,
}: AccordionItemProps) => {
  const [maxHeight, setMaxHeight] = useState<string>("0px"); // initialize maxHeight
  const contentRef = useRef<HTMLDivElement>(null); // initialize contentRef
  const [open, setOpen] = useState<boolean>(isOpen);

  // monitor open state and adjust the item's height accordingly
  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }

    return () => {
      setMaxHeight("0px");
    };
  }, [open]);

  return (
    <div
      className={cn(
        "flex flex-col",
        { "gap-3": open || !tight },
        "border-t border-alternate",
        "text-text-alternate",
        className,
      )}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div
        className={cn(
          "flex gap-12 items-center justify-between cursor-pointer",
        )}
      >
        <div className={cn(
          "font-semibold text-regular-bold md:text-medium-bold",
          {"py-0.5 h-[44px]": tight},
          {"py-5 h-[64px]": !tight},
          {"text-white": colorMode === "light"},
          {"text-black": colorMode === "dark"},
        )}>
          {title}
        </div>
        <div className="text-text-alternate">
          <Icon
            name="chevronUp"
            className={cn(
              "transition-transform duration-300",
              {"text-white": colorMode === "light"},
              {"text-brand-brand": colorMode === "dark"},
              `${open ? "rotate-180" : "rotate-0"}`,
            )}
            size={25}
          />
        </div>
      </div>
      <div
        ref={contentRef}
        className={cn(
          "w-full text-text-alternate text-left",
          "transition-all duration-500 ease-in-out",
          `${open ? `max-h-[${maxHeight}] opacity-1` : `max-h-0 opacity-0`}`,
        )}
      >
        <div className="w-full pb-5">{open && children}</div>
      </div>
    </div>
  );
};

/**
 * Represents the content of each accordion item.
 * The children are expected to be of any type - whatever is
 * supplied by the component where this component is called.
 *
 * @param param0 - A set of props as defined in ./types.ts
 *  - children - children in a ReactNode type
 * @returns - A JSX element
 */
export const AccordionContent = ({ children, className }: AccordionContentProps) => {
  return (
    <div
      className={cn("text-small-normal md:text-regular-normal", className)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
