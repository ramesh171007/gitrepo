import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RepositoryItem from '../RepositoryItem/index'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeTab: languageFiltersData[0].id, repoList: [], isLoading: true}

  componentDidMount() {
    this.getRepo()
  }

  clickedTab = id => {
    this.setState({activeTab: id, isLoading: true}, this.getRepo)
  }

  getRepo = async () => {
    const {activeTab} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.popular_repos)
    const newData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    console.log(newData)
    this.setState({repoList: newData, isLoading: false})
  }

  render() {
    const {repoList, activeTab, isLoading} = this.state
    return (
      <div className="gitHubContainer">
        <h1>Popular</h1>
        <ul className="languageTabContainer">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              filterDetail={each}
              clickedTab={this.clickedTab}
              isTabActive={activeTab === each.id}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="reposList">
            {repoList.map(eachRepo => (
              <RepositoryItem key={eachRepo.id} repoDetail={eachRepo} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
