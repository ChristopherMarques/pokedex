export default function Heart(){
        $(document).ready(function(){
            $("#heart").click(function(){
              if($("#heart").hasClass("liked")){
                $("#heart").html('<i className="fas fa-heart" aria-hidden="true"></i>');
                $("#heart").removeClass("liked");
              }else{
                $("#heart").html('<i className="far fa-heart" aria-hidden="true"></i>');
                $("#heart").addClass("liked");
              }
            });
          });
    return (
        <span id ="heart"><i className="far fa-heart" aria-hidden="true" ></i></span>
    )
}