import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import color from "tailwindcss/colors"

interface TaskCheckboxProps {
  checked: boolean,
  clickHandle: (newState: boolean) => void
}

export function TaskCheckbox({ checked, clickHandle }: TaskCheckboxProps) {

  return <Checkbox.Root className={`border border-emerald-700 w-6 h-6 rounded flex items-center justify-center ${checked ? "bg-emerald-700" : "bg-white"} transition-all hover:scale-125 active:scale-90`}
    checked={checked}
    onClick={() => {
      clickHandle(!checked)
    }} >
    <Checkbox.Indicator>
      <Check color={color["white"]} size={20} weight="bold" />
    </Checkbox.Indicator>
  </Checkbox.Root>
}
