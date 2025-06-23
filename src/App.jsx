import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={`${styles.wrapper} text-center`}>
        <h1 className='text-4xl pt-20 text-amber-50'>App component</h1>
        <p className={styles.paragraf}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Commodi vitae architecto ducimus praesentium recusandae 
          quam maxime obcaecati amet ipsa dolor. Inventore reiciendis 
          doloribus, nesciunt facere pariatur at possimus nulla. 
        </p>
      </div>
    </>
  )
}

export default App
