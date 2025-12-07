import { Toaster } from 'sonner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ResourceLibrary from './pages/ResourceLibrary';
import CommunityForum from './pages/CommunityForum';
import EventCalendar from './pages/EventCalendar';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resource-library" element={<ResourceLibrary />} />
          <Route path="community-forum" element={<CommunityForum />} />
          <Route path="event-calendar" element={<EventCalendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;