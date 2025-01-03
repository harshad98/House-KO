import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import Designs from "./pages/Designs/Designs";
import Loans from "./pages/Loans/Loans";
import Materials from "./pages/Materials/Materials";
import Professionals from "./pages/Professionals/Professionals";
import PostDetail from "./components/PostDetail/PostDetail";
import { PostProvider } from './context/PostContext';
import TagProvider from "./context/TagContext";
import UserProvider from "./context/UserContext";

function App() {
  return (
     <PostProvider> 
      <TagProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/designs" element={<Designs />} />
                <Route path="/designs/posts/:postId" element={<PostDetail />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/professionals" element={<Professionals />} />
              </Route >
            </Routes>
          </Router>
          </UserProvider>
          </TagProvider>
        </PostProvider>
        
  );
}

export default App;
