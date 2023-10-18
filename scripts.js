//start of scripting zone
    //function to change the avatar icon
        let avatarCurrent = 2
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
//end of scripting zone