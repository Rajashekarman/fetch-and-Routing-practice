import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container" data-testid="loader">
    Render UserInfo and BlogList
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
