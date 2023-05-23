import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import color from "tailwindcss/colors"

interface TaskCheckboxProps {
  checked: boolean,
  clickHandle: (newState: boolean) => void
}

export function TaskCheckbox(props: TaskCheckboxProps) {

  return <Checkbox.Root className={`border border-slate-700 w-6 h-6 rounded bg-slate-700 flex items-center justify-center ${props.checked ? "bg-slate-700" : "bg-white"} transition-colors`}
    checked={props.checked}
    onClick={() => {
      props.clickHandle(!props.checked)
    }} >
    <Checkbox.Indicator>
      <Check color={color["white"]} size={20} weight="bold" />
    </Checkbox.Indicator>
  </Checkbox.Root>
}
