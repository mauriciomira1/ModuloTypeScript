const userslist: GithubUserResponse[] = []

interface GithubUserResponse {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
  message?: "Usuário não encontrado."
}


interface GithubRepoResponse {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}

async function getDataFromAPI(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()
    console.log(user)
    if (user.message) {
      throw new Error(`${user.message}`)
    } else {
      userslist.push(user)
      console.log(`O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`)
    }

  } catch (error) {
    console.log(error)
  }
}

async function getRepoData(name: string) {
  const verify = userslist.find(username => username.login === name)
  if (verify) {
    const response = await fetch(`https://api.github.com/users/${name}/repos`)
    const repo: GithubRepoResponse[] = await response.json()
    console.log(repo)
    let msg = ''
    repo.forEach(repo => {
      msg +=
        `Dados do respositório do usuário ${name}:
      Nome: ${repo.name}
      Descrição: ${repo.description}
      Fork: ${repo.fork}
      Estrelas: ${repo.stargazers_count}\n\n`
    })
    console.log(msg)
  } else {
    console.log(`O usuário ${name} não foi encontrado no banco de dados.`)
  }
}

function showReposTotal() {
  const repostotal = userslist.reduce((accum, user) => accum += user.public_repos, 0)
  console.log(`O grupo possui um total de ${repostotal} repositórios públicos.`)
}

function showTopFive() {
  const topFive = userslist.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
  let message = "Top 5 usuários com mais repositórios públicos:\n"

  topFive.forEach((user, index) => {
    message += `${index + 1}º - ${user.login}: ${user.public_repos} repositórios\n`
  })
  console.log(message)
}