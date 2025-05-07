import React, { useMemo } from "react";
import styles from "../styles/updatedcart.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatedCart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const selectedMedicines = state?.selectedMedicines || [];
  const pharmacy = useMemo(
    () => state?.pharmacy || "a nearby pharmacy",
    [state]
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.summary}>
          Your cart has been updated successfully. You now have{" "}
          {selectedMedicines.length} medicine(s) in your cart from{" "}
          <strong>
            {typeof pharmacy === "string" ? pharmacy : pharmacy.name}
          </strong>
          .
        </p>
        <div className={styles.cardBtn}>
          <button
            onClick={() =>
              navigate("/findmeds", { state: { selectedMedicines } })
            }
            disabled={selectedMedicines.length === 0}
            className={styles.backBtn}
          >
            Find more meds
          </button>

          <button
            onClick={() =>
              navigate("/order-summary", {
                state: { selectedMedicines, pharmacy },
              })
            }
            disabled={selectedMedicines.length === 0}
            className={styles.continueBtn}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatedCart;
