import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About me</h2>
        <h1 className={styles.title}>
          I made this page with your help luka thank you 
        </h1>
        <p className={styles.desc}>
          Hello I am Muhamed Karabagli I'm 16 years old and I'm interested in programming but i don't know is it my job 
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>16</h1>
            <p>age</p>
          </div>
          <div className={styles.box}>
            <h1>11</h1>
            <p>grade</p>
          </div>
          <div className={styles.box}>
            <h1>B2</h1>
            <p>English level</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
