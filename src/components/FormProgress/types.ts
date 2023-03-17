import { Stages } from "@/types";

export interface FormProgressProps {
  active: Stages;
  onClick(arg: Stages): void;
  available: Stages[];
}
