//start of scripting zone

    //VARIABLES
    let avatarCurrent = 2

    //function to change the avatar icon
        function changeAvatar() {
            let avatarNumber = 9;
                if(avatarCurrent < avatarNumber){
                    document.getElementById("avatar").src = "svg/avatarIcons/avatar" + avatarCurrent + ".svg";
                    avatarCurrent++;
                }
                else{
                    avatarCurrent = 1;
                    changeAvatar();
                }
        }

        //function to open LinkedIn page
        function openLinkedIn() {
            let link = "http://www.linkedin.com/in/raresburdulea";
                window.open(link,'_blank');
        }

        //functions to hide/unhide navigation in mobile form
        function navBarToggle() {
            let navStatus = document.getElementById("mobileNavigation").style.display

            if(navStatus == "flex") {
                document.getElementById("mobileNavigation").style.display = "none"
            }
            else {
                document.getElementById("mobileNavigation").style.display = "flex"
            }
        }

//end of scripting zone