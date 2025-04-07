import Style from './App.module.css'
import { Menu } from './components/menu.jsx'

function App() {

  return (
    <>

      <Menu option01='Sessão 1' option02='Sessão 2' option03='Contato'> </Menu>
      <main>
        <section id='s1'>
        <h2>Sessão 1</h2>
        </section>
        <section id='s2'>
        <h2>Sessão 2</h2>
        </section>
        
      </main>
    </>
  )
}

export default App;
