import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { useState } from "react";
import color from "tailwindcss/colors"

interface TaskCheckboxProps {
  completed: boolean,
  clickHandle: () => void
}

export function TaskCheckbox(props: TaskCheckboxProps) {
  const [checked, setChecked] = useState(false)
  return <Checkbox.Root className={`border border-slate-700 w-6 h-6 rounded bg-slate-700 flex items-center justify-center ${checked ? "bg-slate-700" : "bg-white"} transition-colors`}
    checked={checked}
    onClick={() => setChecked((c) => !c)} >
    <Checkbox.Indicator>
      <Check color={color["white"]} size={20} weight="bold"/>
    </Checkbox.Indicator>
  </Checkbox.Root>
}
