# rock-academy-site
An Angular project made for the final exam of the Angular Fundamentals March 2019 Course at Software University.
## Idea
The idea of the site is to be used by Rock Academy Dupnitsa for both publicity of its activity and communication with its members.
* Publicity part contains:
	* __News__: there are listed articles with the latest news about the academy.
	* __Bands__: there are listed all bands from the academy with information about them and ther members.
	* __User profiles__: each user has a profile page with information about him, his status, bands and instruments, depending on the status.
* Members part contains: 
	* __Applications__: there are listed all applications from users who want to join the academy, which can be approved or disapproved by the team.
## Roles
* __Anonymous users__: People who haven't authenticated into the site can only see articles, bands and profiles of other users.
* __Logged in users__ have three different roles (statuses) which can be changed by the team.
	* __Guests__ are allowed to add comments to the articles and apply for membership in the academy. When an user makes a registration in the site, his default status is guest.
	* __Students__ are users whose applications have been approved. In their profiles, they get a list of the intruments they play.
	* __Musicians__ are students, who have been added to bands by administrators. They are allowed to edit the bands they are members of and leave them if they want to.
* __Administrators__ are allowed to create, edit and delete articles and bands. They can approve or disapprove users applications and add or remove students from bands.	