"use client";

import { cn } from "@/src/lib/utils";
import { Check, Edit } from "lucide-react";
import { useOptimistic, useRef, useState, useTransition } from "react";

export const UpdateTitleForm = (props: {
  children: string;
  setTile?: (newTitle: string) => void;
  className?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition()
  const [title, setTile] = useOptimistic(props.children, (_, newTitle: string) => newTitle)
  if (isEditing) {
    return (
      <div className="group flex items-center gap-2">
        <input
          ref={ref}
          className={cn(props.className)}
          defaultValue={props.children}
        >
        </input>
        <button
          className="group-hover:opacity-100 opacity-0 p-1 bg-accent"
          onClick={() => {
            setIsEditing(false);
            const newTitle = ref.current?.value ?? ""
            props.setTile?.(newTitle);
            startTransition(() => {
                setTile(newTitle);
            })
          }}
        >
          <Check size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-2">
    <p className={cn(props.className, {
        "animate-pulse": isPending
    })}>{title}</p>
      <button
        className="group-hover:opacity-100 opacity-0 p-1 bg-accent"
        onClick={() => setIsEditing(true)}
      >
        <Edit size={16} />
      </button>
    </div>
  );
};
