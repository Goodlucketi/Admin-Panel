import Content from "./Admin/Content"
import SideBar from "./Admin/sidebar"
import Login from "./Admin/Login"



function App() {

  return (
    <main className="flex justify-evenly">
      <SideBar/>
      <Content/>
      <Login />

    </main>
  )
}

export default App
