import { Post, PostProps } from './components/Post.tsx';
import './Global.css';
import { Header } from './components/Header.tsx';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.tsx';


const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/VyniHenrique.png",
      name: "Vynicius henrique",
      role: "Web developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2025-03-05 00:14:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/VyniHenrique.png",
      name: "Vynicius henrique",
      role: "Web developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2025-03-12 14:12:00")
  }
]



export function App() {

  return (
    <div>
      <Header />    
      <div className= {styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post =>{
                return(
                    <Post
                      id={post.id}
                      author={post.author}
                      publishedAt={post.publishedAt}
                      content={post.content}
                    
                    />
                )
              }
            )
          
          }          
        </main>
      </div>
    </div>
  )
}

export default App
