import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton() {
  return (
    <button className="count-btn">
      <MinusIcon className="count-btn-icon"></MinusIcon>
      <PlusIcon className="count-btn-icon"></PlusIcon>
    </button>
  )
}