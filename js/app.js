let hate
let repos
const avatar = document.querySelector('.profile .name-img .img-holder')
const navAvatar = document.querySelector('li a .nav-name-img .nav-img-holder')
const desktopAvatar = document.querySelector('ul .desktop-img')
const navName = document.querySelector('li a .nav-name-img .nav-name-holder p')
const img = document.createElement('img')
const imgOne = document.createElement('img')
const imgTwo = document.createElement('img')
const name = document.querySelector('.profile .name-img .name-holder h1')
const username = document.querySelector('.profile .name-img .name-holder p')
const employer = document.getElementById('employer')
const country = document.getElementById('country')
const twitter = document.getElementById('twitter')
const status = document.querySelector('.profile .stat')
const followers = document.querySelector('.followers')
const following = document.querySelector('.followings')
const repoNumber = document.querySelector('.tabs ul .active a span')
const star = document.querySelector('.star')
const repo = document.querySelector('.repos')
const nav = document.querySelector('.nav-lists')
const toggler = document.getElementById('toggler')

toggler.addEventListener('click', toggleHamburger)
function toggleHamburger() {
  nav.classList.toggle('showNav')
  toggler.classList.toggle('showClose')
}

// FETCH INFO FROM GITHUB
fetch('https://api.github.com/users/elouisramsey')
  .then((response) => response.json())
  .then((data) => (hate = data))
  .catch((error) => console.error(error))

  .then(() => (img.src = hate.avatar_url))
  .then(() => (imgOne.src = hate.avatar_url))
  .then(() => (imgTwo.src = hate.avatar_url))
  .then(() => name.insertAdjacentHTML('afterbegin', hate.name))
  .then(() => username.insertAdjacentHTML('afterbegin', hate.login))
  .then(() => navName.insertAdjacentHTML('afterbegin', hate.login))
  .then(() => status.insertAdjacentHTML('afterbegin', hate.bio))
  .then(() => employer.insertAdjacentHTML('afterbegin', hate.company))
  .then(() => country.insertAdjacentHTML('afterbegin', hate.location))
  .then(() => twitter.insertAdjacentHTML('afterbegin', hate.twitter_username))
  .then(() => followers.insertAdjacentHTML('afterbegin', hate.followers))
  .then(() => following.insertAdjacentHTML('afterbegin', hate.following))
  .then(() => repoNumber.insertAdjacentHTML('afterbegin', hate.public_repos))
avatar.appendChild(img)
navAvatar.appendChild(imgOne)
desktopAvatar.appendChild(imgTwo)

// FETCH REPOS FROM GITHUB
fetch('https://api.github.com/users/elouisramsey/repos')
  .then((res) => res.json())
  .then((data) => (repos = data))
  .then(
    () =>
      (repo.innerHTML = repos
        .map(
          (
            rep
          ) => `<div class="single-repo"><div class="top-holder"><div class="name-holder"><h1 class="name">${
            rep.name
          }</h1><p class="repSummary">${
            rep.description ? rep.description : ''
          }</p></div><div class="star">
      <div class="star-holder">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <p>Star</p>
      </div>
    </div></div><div class="lang-date">
    <div class="lang">
    <div class='blob ${rep.language}' ></div>
        <p class="lang-type">${rep.language ? rep.language : ''}</p>
    </div>
    <div class="time">
        <p class="update"> Updated on ${new Date(rep.updated_at)
          .toString()
          .substring(4, 10)}</p>
    </div>
    </div></div>`
        )
        .join(''))
  )
