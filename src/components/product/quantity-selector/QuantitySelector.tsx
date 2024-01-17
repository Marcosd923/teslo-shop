"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;

  onQuantityChanged: (value: number) => void;
}

const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;

    onQuantityChanged(quantity + value);
  };

  return (
    <div className="flex ">
      <button onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-15 mx-3 py-1 px-4 rounded bg-gray-100 text-center">
        {quantity}
      </span>
      <button onClick={() => onValueChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};

export default QuantitySelector;
