import { Movie } from "./pages/Movie"
import { getApi } from "./api/Crud"
import { useEffect } from "react";  

const App = () => {
  console.log(getApi());

  const getCurdapi = async () => {
    const data = await getApi()
    console.log("This is from Crud file", data)
  }

  useEffect(() => {
    getCurdapi()
  }, [])

  return (
    <div>
      {/* <Movie /> */}

    </div>
  )
}

export default App
