import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about_container}>
      <h2>Hello there! 👋🏽</h2>
      <h3>My name is José Germán Fuentes.</h3>
      
      <img id={styles.profilePic} src="https://i.imgur.com/ItGxt4J.jpg" title="profilePic" alt="profilePic" />
      <h4>A.K.A. JGerFuentes 🤘🏽</h4>
      
      <div>
        <a href="https://www.linkedin.com/in/JGerFuentes" target="_blank"><img src="https://i.imgur.com/dBgRYCG.png" title="my_linked_in" alt="linked_in_logo" height="150px" width="200px"/></a>
        <a href="https://github.com/JGerFuentes" target="_blank"><img src="https://i.imgur.com/2Cp7VkW.png" title="my_github" alt="github_logo" height="100px" width="100px"/></a>
      </div>

      <p>Recently graduated Biotechnology Technician, currently an Operator on a Wastewater Treatment Plant, I'm a newly formed Full Stack Web Developer 👨🏽‍💻 who aims to reach top level coding practices to make people's web interaction experience a richer, more productive, more intuitive and more comfortable one. 🚀
        <br/>
        Unafraid of changes nor challenges and with everything yet to give I'm on a personal quest to give my family and (hopefully) the world a whole better life by committing my passion for learning, my never-ending curiosity, my humble experience and my hard work to help build the new world that's ahead of us.
        <br/>
        This Single Page Application (SPA) is a brief preview of my capabilities, my growth as a developer in the last 5 months and a testimony of that personal goal put into practice. It also takes part of my Individual Project presentation for the Henry Academy's LABS module. The first stage out of two towards my official certification as a Full Stack Web Developer.
        <br/>
        The technologies and frameworks implemented on this project are:
      </p>
        <div>
          <img src="https://i.imgur.com/waXSNHF.png" title="js_logo" alt="js_logo" height="30px" width="30px"/>
          <img src="https://i.imgur.com/oVZ21pl.png" title="html_logo" alt="html_logo" height="30px" width="30px"/>
          <img src="https://i.imgur.com/HkCREuX.png" title="css_logo" alt="css_logo" height="30px" width="24px"/>
          <img src="https://i.imgur.com/fWWSEHL.png" title="sass_logo" alt="sass_logo" height="30px" width="30px"/>
          <img src="https://i.imgur.com/cLIHn2j.png" title="react_logo" alt="react_logo" height="30px" width="90px"/>
          <img src="https://i.imgur.com/rlC4S8d.png" title="redux_logo" alt="redux_logo" height="25px" width="90px"/>
          <img src="https://i.imgur.com/acLgwdD.png" title="nodejs_logo" alt="nodejs_logo" height="35px" width="80px"/>
          <img src="https://i.imgur.com/yEzx1Em.png" title="express_logo" alt="express_logo" height="30px" width="90px"/>
          <img src="https://i.imgur.com/Jn5FGYq.png" title="sequelize_logo" alt="sequelize_logo" height="35px" width="85px"/>
          <img src="https://i.imgur.com/yNGQH6S.png" title="postgres_logo" alt="postgres_logo" height="35px" width="90px"/>
        </div>

    </div>
  )
}

export default About