import {AiFillStar, AiOutlineFork} from 'react-icons/ai'
import {GoIssueOpened} from 'react-icons/go'
import './index.css'

const RepositoryItem = props => {
  const {repoDetail} = props
  const {avatarUrl, starsCount, forksCount, issuesCount, name} = repoDetail
  return (
    <li className="repo-container">
      <img src={avatarUrl} alt={name} className="repo-image-style" />
      <h1>{name}</h1>
      <div className="star-container">
        <AiFillStar className="react-icon-style" />
        <p>{starsCount} stars</p>
      </div>
      <div className="star-container">
        <AiOutlineFork className="react-icon-fork-style" />

        <p>{forksCount} forks</p>
      </div>

      <div className="star-container">
        <GoIssueOpened className="react-icon-issue-style" />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
