import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { useRouter } from "next/router";

export const Sidebar = ({
  isOpen,
  toggleSidebar,
  formData,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  formData: {
    color: string;
    design: string;
    size: string;
    soleThickness: string;
  };
}) => {
  const router = useRouter();
  const [qty, setQty] = useState("1");
  const newFormData = {
    ...formData,
    quantity: qty,
  };

  const handleCheckout = () => {
    router.push({
      pathname: "/checkout",
      query: newFormData,
    });
  };

  return (
    <motion.div
      className={`fixed bg-white top-0 right-0 h-full lg:h-screen w-[60%] lg:w-[30%] shadow-xl rounded-md z-50`}
      initial={{ translateX: "100%" }}
      animate={{ translateX: isOpen ? "0%" : "100%" }}
      exit={{ translateX: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Item Cart</h2>

          <button onClick={toggleSidebar}>
            <X />
          </button>
        </div>

        <div className="text-gray-300 mt-4 flex items-start flex-col space-y-4">
          <p className="w-full flex items-center justify-between">
            <span>Color</span>

            <span>
              <b>{formData.color}</b>
            </span>
          </p>
          <p className="w-full flex items-center justify-between">
            <span>Design</span>
            <span>
              <b>{formData.design}</b>
            </span>
          </p>
          <p className="w-full flex items-center justify-between">
            <p>Size</p>
            <span>
              <b>{formData.size}</b>
            </span>
          </p>
          <p className="w-full flex items-center justify-between">
            <span>Sole Thickness</span>
            <span>
              <b>{formData.soleThickness}</b>
            </span>
          </p>
          <div className="w-full flex items-center justify-between">
            <span>Quantity</span>
            <input
              type="text"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-[50px] border outline-none rounded-md px-2"
            />
          </div>
        </div>

        <button
          className="bg-primary capitalize rounded-2xl text-white text-base lg:text-base py-2 px-6 lg:py-4 lg:px-12 w-full mt-4"
          onClick={handleCheckout}
        >
          Proceed to checkout
        </button>
      </div>
    </motion.div>
  );
};
