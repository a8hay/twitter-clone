import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Post from '../components/Post';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Posts
        </h1>
        
        <ul className={styles.posts}>
          <li>
            <Post content="hey i'm a new post" date="14/03/2021" />
          </li>
          <li>
            <Post 
              content="I'm working in Figma tryping to design a new website that shows all my tweets!" 
              date="12/03/2020" 
            />
          </li>
          <li>
            <Post 
              content="I'm working in Figma tryping to design a new website that shows all my tweets!" 
              date="12/03/2020" 
            />
          </li>
          <li>
            <Post 
              content="I'm working in Figma tryping to design a new website that shows all my tweets!" 
              date="12/03/2020" 
            />
          </li>
        </ul>

        <form >
          <textarea className={styles.formContent}>
          </textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  )
}
