import React from 'react';
import styles from "../styles/medicine-table.module.css";
import { BsCheck, BsX } from 'react-icons/bs';

const medicines = [
    { name: 'Paracetamol', mg: '500Mg', quantity: '24 Tablets', price: '1000' },
    { name: 'Ibuprofen', mg: '400Mg', quantity: '1 Pack', price: '1000' },
    { name: 'Artovastatin', mg: '200Mg', quantity: '30 Tablets', price: '38,000' }
  ];

  const MedicineTable = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.name}>John Doe</h2>
        <p className={styles.date}>10/02/2025</p>
  
        <div className={styles.tableBox}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Medicine</th>
                <th>MG</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, idx) => (
                <tr key={idx}>
                  <td>{med.name}</td>
                  <td>{med.mg}</td>
                  <td>{med.quantity}</td>
                  <td>{med.price}</td>
                  <td>
                    <BsX className={styles.icon} />
                    <BsCheck className={styles.icon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <p className={styles.checkout}>Check out</p>
      </div>
    );
  };

export default MedicineTable;