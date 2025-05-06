import styles from "../styles/uploadprescription.module.css";

const UploadPrescription = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <h2 className={styles.heading}>Upload Prescription</h2>
          <div className={styles.div}>
            <p className={styles.intro}>A valid prescription should contain.</p>
            <ul className={styles.ul}>
              <li>Date of prescription</li>
              <li>Patients details</li>
              <li>Dosage</li>
            </ul>
          </div>
          <div className={styles.div}>
            <label htmlFor="documentUpload">Upload your Prescription:</label>
            <input type="file" id="documentUpload" name="document" />
            <p>Please upload a PDF, DOC, or DOCX file.</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default UploadPrescription;
