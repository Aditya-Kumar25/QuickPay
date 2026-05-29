"use client";

import { ReactNode } from "react";

interface ButtonProps {
  
  className?: string;
}

export const Button = ({className}:ButtonProps) => {
  return (
    <div >

      <button className={className}>
    </button>
    </div>
    
  );
};
