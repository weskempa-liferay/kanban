console.log("Adding listeners:"+$(fragmentElement).find(".dropdown-item").length);

    $(fragmentElement).find(".dropdown-item").on('click', function(){  
        var objectId = $(fragmentElement).find(".card-task").data("objectid")
        var action =  $(event.target).attr("id");
        
        callService( action, objectId );

    });

    function callService( action, objectId ){
            console.log(action);
            console.log(objectId);
            if(action.indexOf("status")>-1){
                status = action.replaceAll("status-","");
            }else{
                return;
            }
            console.log("----");
            console.log(status);
            console.log("----");
        Liferay.Util.fetch(
            "/o/c/taskses/"+objectId, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf8'
                },
                method: 'PUT',
                body: '{"taskStatus": "'+status+'"}'
            }
        )
        .then((response) => response.json()) 
        .then((data) => {
            console.log("Return");
            console.log(data);
            location.reload();
        })
        .catch((error) => {
            console.log(error);
            Liferay.Util.openToast({
                message: 'An error occured.',
                type: 'danger',
            });
        });
    }