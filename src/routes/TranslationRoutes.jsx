import { Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { Conversation } from "../pages/Conversation"
import { Transcript } from "../pages/Transcript"


export const TranslationRoutes = () => {
  return (
      <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/transcript" element={<Transcript />} />

    </Routes>
  )
}
