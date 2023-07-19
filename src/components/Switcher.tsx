import { Fragment, useState } from "react";
import { Switch } from "@headlessui/react";

type SwitcherProps = {
  onChange: (enabled: boolean) => void;
  defaultOn?: boolean;
  disabled?: boolean;
  label?: string;
};

const Switcher = ({
  onChange,
  defaultOn,
  disabled = false,
  label,
}: SwitcherProps) => {
  const [enabled, setEnabled] = useState<boolean>(defaultOn || false);

  const toggleSwitcher = (e: any) => {
    console.log(e);

    onChange(enabled);
    setEnabled(!enabled);
  };

  return (
    <Switch.Group>
      <div className="flex items-center gap-x-3">
        <Switch checked={enabled} onChange={toggleSwitcher} as={Fragment}>
          {({ checked }) => (
            <button
              className={`${
                checked
                  ? "bg-blue-600 hover:bg-blue-300 active:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-400 active:bg-blue-600"
              } relative w-12 flex-none rounded-full p-[3px] disabled:bg-gray-300`}
              disabled={disabled}
            >
              <div
                className={`${
                  checked ? "translate-x-6" : "translate-x-0"
                } h-[18px] w-[18px] transform rounded-full bg-white shadow transition disabled:bg-gray-100`}
              />
            </button>
          )}
        </Switch>
        {label && (
          <Switch.Label className="flex-none text-sm font-normal">
            {label}
          </Switch.Label>
        )}
      </div>
    </Switch.Group>
  );
};

export default Switcher;
