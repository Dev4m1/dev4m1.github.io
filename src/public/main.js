		$(document).ready(function() {
			$.ajax({
				url: 'https://api.github.com/users/dev4m1',
				data: {
					client_id: 'Your_Client_ID',
					client_secret: 'Your_client_secret',
					 
				}
			}).done(function(user) {
				$.ajax({
					url: 'https://api.github.com/users/dev4m1/repos',
					data: {
						client_id: 'Your_Client_ID',
						client_secret: 'Your_client_secret',
						sort: 'created: asc',
						per_page: 5
					}
				}).done(function (repos) {
					$.each(repos, function (index, repo) {
						$('.repos').append(`
						<br>
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                  <span class="label label-default">Forks: ${repo.forks_count}</span>
                  <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                  <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-warning">Repo Page</a>
                </div>
              </div>
            </div>
          `);
					});
				});
				$('.profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-warning btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
              <span class="label text-orange">Public Repos: ${user.public_repos}</span>
              <span class="label text-orange">Public Gists: ${user.public_gists}</span>
              <span class="label text-orange">Followers: ${user.followers}</span>
              <span class="label text-orange">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                <li class="list-group-item">Bio: ${user.bio}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
              </div>
            </div>
          </div>
				</div>
				<br>
        <h3 class="page-header">Latest Repos</h3>
      	`);
				});
			});

