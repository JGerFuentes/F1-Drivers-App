import styles from './LandingPage.module.scss';

const LandingPage = ({enterHome}) => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_wrapper}>
        <div id={styles.div1}>Welcome, racer!</div>
        <div id={styles.div2}>Are you ready?</div>
        <div id={styles.div3}>Fasten your seatbelt and...</div>
        <button id={styles.button} onClick={enterHome} >LET'S F*** GO!!!</button>
      </div>
    </div>
  )}

export default LandingPage;