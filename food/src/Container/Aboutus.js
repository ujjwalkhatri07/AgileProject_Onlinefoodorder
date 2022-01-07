import { Component } from "react";

import './myStyle.css'

class Aboutus extends Component {



render()
{

return(


<div>
<video className="vid"  autoplay="autoplay" loop="true" muted playsInline width="100%" height="581px" >
                    <source src="food.mp4" type="video/mp4">
              
                  </source>
                  </video>

                  <div class="container d-flex justify-content-center">
    <div class="row">
        
        
        <div class="col-md-12">
            <div class="card p-3 py-4 mt-5">
                <div class="text-center"><img src="a.PNG" width="100" class="rounded-circle"></img>
                    <h3 class="mt-2"> Ujjwal khatri </h3> <span class="mt-1 clearfix">Backend developer</span> <small class="mt-4">I am an backend developer working recentlty in Node js</small>
                    <div class="social-buttons mt-5"> <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button> <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button> <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button> </div>
                </div>
            </div>
        </div>
        

      
       


    </div>
</div>

</div>


)



}


}


export default Aboutus;