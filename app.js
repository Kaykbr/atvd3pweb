const elements = {
  name: document.getElementById("name"),
  login: document.getElementById("login"),
  bio: document.getElementById("bio"),
  publicGistsCount: document.getElementById("public-gists-count"),
  followingCount: document.getElementById("following-count"),
  followersCount: document.getElementById("followers-count"),
  linkedinLink: document.getElementById("linkedin-link"),
  githubLink: document.getElementById("github-link"),
  followButton: document.getElementById("follow-button"),
  forkButton: document.getElementById("fork-button"),
  githubAge: document.getElementById("github-age"),
  userImage: document.getElementById("user-image"),
};

const gitUser = async () => {
  try {
    const githubUser = 'joseolinda';
    const response = await fetch(`https://api.github.com/users/${githubUser}`);
    const userData = await response.json();

    console.log('Resposta da API:', userData);

    elements.name.textContent = userData.name;
    elements.login.textContent = userData.login;
    elements.bio.textContent = userData.bio;
    elements.publicGistsCount.textContent = userData.public_gists;
    elements.followingCount.textContent = userData.following;
    elements.followersCount.textContent = userData.followers;
    elements.linkedinLink.href = userData.blog;
    elements.githubLink.href = userData.html_url;

    // Adicione o URL da foto do usuário
    elements.userImage.src = userData.avatar_url;

    // Calcule quanto tempo a pessoa está usando o GitHub
    const createdAt = new Date(userData.created_at);
    const now = new Date();
    const years = now.getFullYear() - createdAt.getFullYear();
    console.log(`O usuário está usando o GitHub há ${years} anos.`);
    elements.githubAge.textContent = `O usuário está usando o GitHub há ${years} anos.`;

    elements.followButton.addEventListener("click", () => {
      window.location.href = 'https://www.instagram.com/' + githubUser;
    });

    elements.forkButton.addEventListener("click", () => {
      window.location.href = 'https://github.com/' + githubUser + '/example';
    });

  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error);
  }
};

// Chame a função gitUser quando as informações do perfil estiverem prontas
gitUser();
