var d0 = d0 || {};
d0.namespace = d0.namespace || namespace;

var error = d0.namespace(`modules.error`);
d0.ready(function(){
  error.dof = (function (_d0,global){

    function error(){
      console.error(`ERROR : `)
      let errorMessage = document.getElementById('errorMsg').textContent;
      console.error(errorMessage);
      return `error`
    }
    
    if(document.getElementById('error') && document.querySelector(`div[data-info="error"]`)){
      return{
        error:error()
      }
    }
  
  })(error,window)
})
