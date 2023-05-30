import styles from './App.module.css'
import poweredImage from './assets/powered.png'

          const App = () => {
            return(
              <div className={styles.main}> {/*Div primaria que abriga todas as outras*/}

                  <header> {/* Cabeçalho, tag principal */}

                    <div className={styles.headerContainer}>
                      <img src={poweredImage} alt='' width={150}/>
                    </div>
      
                  </header>

                  <div className={styles.container} >

                    <div className={styles.leftSide}>
                      <h1> Calcular de IMC</h1>
                      <p>O IMC (Índice de Massa Corporal)  é reconhecido pela Organização 
                        Mundial da Saúde Organização Mundial da Saude como um padrão internacional que avalia se 
                        as pessoas, entre 20 e 59 anos, estão com peso ideal ou em excesso, 
                        em relação a sua altura. No entanto, vale lembrar que o resultado 
                        não indica como está o estado nutricional. </p>

                        <input
                          type="number"
                          placeholder="Informe sua altura. Ex. 1.50"
                          />

                        <input 
                          type="number"
                          placeholder="Informe sua peso. Ex. 60"
                          />

                        <button>Calcular</button>

                    </div>
                    
                    <div className={styles.rightSide}>
                      
                    </div>

                  </div>

              </div> 
            )
          }

export default App;