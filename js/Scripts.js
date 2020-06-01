function render(data)
{

  var html='<div class="CommentBox_laws"><div class="LeftPanelImg"><img class="girlImg" src="girl.jpg" alt="girl"></div><div class="RightPanel"><span>'+data.name+'</span><div class="date">'+data.date+'</div><p>'+data.body+'</p></div><div class="Clear"></div></div>';
  $('#Comment').append(html);
}
function render_work(data)
{

  var html='<div class="CommentBox_work"><div class="LeftPanelImg"><img class="girlImg" src="replygirl.jpg" alt="girl"></div><div class="RightPanel"><span>'+data.name+'</span><div class="date">'+data.date+'</div><p>'+data.body+'</p></div><div class="Clear"></div></div>';
  $('#Work').append(html);
}
function render_health(data)
{

  var html='<div class="CommentBox_health"><div class="LeftPanelImg"><img class="girlImg" src="healthgirl.jpg" alt="girl"></div><div class="RightPanel"><span>'+data.name+'</span><div class="date">'+data.date+'</div><p>'+data.body+'</p></div><div class="Clear"></div></div>';
  $('#Health').append(html);
}

$(document).ready(function()
{
  var comment=[];
  var work=[];
  var health=[];

  

  if(localStorage.commentData){
      comment=JSON.parse(localStorage.getItem('commentData'));
  }
  if(localStorage.workData){
      work=JSON.parse(localStorage.getItem('workData'));
  }
  if(localStorage.healthData){
      health=JSON.parse(localStorage.getItem('healthData'));
  }

  // else if(localStorage.commentData){
  //   comment=JSON.parse(localStorage.commentData);
  //   //work=JSON.parse(localStorage.workData);
  // }




  for(var i=0;i<comment.length;i++)
  {
    render(comment[i]);

  }
  for(var j=0;j<work.length;j++)
  {
    render_work(work[j]);
  }
  for(var k=0;j<health.length;k++)
  {
    render_health(health[k]);
  }

  $('#addContent').click(function(){
    if($('#name').val()=="" || $('#date').val()=="mm/dd/yyyy" || $('#body').val()==""  ){
      alert("Enter complete details!");
    }

    else{
      var addobj={
        "name":$('#name').val(),
        "date":$('#date').val(),
        "body":$('#body').val()
      };


      comment.push(addobj);
      localStorage.commentData=JSON.stringify(comment);
      render(addobj);
      $('#name').val('');
      $('#date').val('dd/mm/yyyy');
      $('#body').val('');
    }

  });

  $('#addContentwork').click(function(){
    if($('#name').val()=="" || $('#date').val()=="mm/dd/yyyy" || $('#body').val()==""  ){
      alert("Enter complete details!");
    }

    else{
      var addobj={
        "name":$('#name').val(),
        "date":$('#date').val(),
        "body":$('#body').val()
      };


      work.push(addobj);
      localStorage.workData=JSON.stringify(work);
      render_work(addobj);
      $('#name').val('');
      $('#date').val('dd/mm/yyyy');
      $('#body').val('');
    }

  });

  $('#addContenthealth').click(function(){
    if($('#name').val()=="" || $('#date').val()=="mm/dd/yyyy" || $('#body').val()==""  ){
      alert("Enter complete details!");
    }

    else{
      var addobj={
        "name":$('#name').val(),
        "date":$('#date').val(),
        "body":$('#body').val()
      };


      health.push(addobj);
      localStorage.healthData=JSON.stringify(health);
      render_health(addobj);
      $('#name').val('');
      $('#date').val('dd/mm/yyyy');
      $('#body').val('');
    }

  });



});