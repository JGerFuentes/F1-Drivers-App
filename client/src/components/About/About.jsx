import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about_container}>
      <h2>Hello there! 👋🏽</h2>
      <h3>My name is José Germán Fuentes.</h3>
      
      <img id={styles.profilePic} src="https://i.imgur.com/ItGxt4J.jpg" title="profilePic" alt="profilePic" />
      <h4>A.K.A. JGerFuentes 🤘🏽</h4>
      
      <div>
        <h5>My profiles: </h5>
        <a href="https://www.linkedin.com/in/JGerFuentes" target="_blank"><img src="https://i.imgur.com/dBgRYCG.png" title="my_linkedIn" alt="linked_in_logo" /></a>
        <a href="https://github.com/JGerFuentes" target="_blank"><img src="https://i.imgur.com/2Cp7VkW.png" title="my_github" alt="github_logo" /></a>
      </div>

      <p>
        Recently graduated Biotechnology Technician, currently an Operator on a Wastewater Treatment Plant, I'm a newly formed Full Stack Web Developer 👨🏽‍💻 who aims to reach top level coding practices to make people's web interaction experience a richer, more productive, more intuitive and more comfortable one. 🚀
        <br/>
        Unafraid of changes nor challenges and with everything yet to give I'm on a personal quest to give my family and (hopefully) the world a whole better life by committing my passion for learning, my never-ending curiosity, my humble experience and my hard work to help build the new world that's ahead of us.
        <br/>
        This Single Page Application (SPA) is a brief preview of my capabilities, my growth as a developer in the last 5 months and a testimony of that personal goal put into practice. It also takes part of my Individual Project presentation for the Henry Academy's LABS stage. The first module out of two towards my official certification as a Full Stack Web Developer.
      </p>
      
      <div>
        <h5>The technologies and frameworks implemented on this project are:</h5>
        <div>
          <img id={styles.logo_1} src="https://i.imgur.com/waXSNHF.png" title="js_logo" alt="js_logo" />
          <img id={styles.logo_2} src="https://i.imgur.com/y6flhRy.png" title="html_logo" alt="html_logo" />
          <img id={styles.logo_3} src="https://i.imgur.com/0kSPhDm.png" title="css_logo" alt="css_logo" />
          <img id={styles.logo_4} src="https://i.imgur.com/wLyjRAI.png" title="sass_logo" alt="sass_logo" />
          <img id={styles.logo_5} src="https://i.imgur.com/qZGgdmv.png" title="react_logo" alt="react_logo" />
          <img id={styles.logo_6} src="https://i.imgur.com/4j4J7sL.png" title="redux_logo" alt="redux_logo" />
          <img id={styles.logo_7} src="https://i.imgur.com/acLgwdD.png" title="nodejs_logo" alt="nodejs_logo" />
          <img id={styles.logo_8} src="https://i.imgur.com/LcWGWHX.png" title="express_logo" alt="express_logo" />
          <img id={styles.logo_9} src="https://i.imgur.com/QTksvlm.png" title="sequelize_logo" alt="sequelize_logo" />
          <img id={styles.logo_10} src="https://i.imgur.com/yNGQH6S.png" title="postgres_logo" alt="postgres_logo" />
        </div>
        </div>

    </div>
  )
}

export default About