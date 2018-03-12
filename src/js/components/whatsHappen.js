import React, { Component } from 'react'

export default class WhatsHappen extends Component {
	constructor () {
		super();

	}

	render() {
		console.log('In WhatsHappen', this.props)
		return(
			<section id="site">
		        <div className="row">
		            <div className="content21">
		               <h1>
		                   What's been happening
		               </h1>
		                <p>
		                    What it's like to be a part of our school community. 
		                </p>
		            </div>
		        </div>
		        <button type="button" class="btn previous">previous </button>
	          	<div className="row1">
		            <div className="content31">
		             	<div className="content31a half">
		                	<div className="content31a img">		    
		                		<div className="imga">
		                			<div className="cover">		          
	                				</div>
	                				<button type="button" className="btn btn-default btn-lg">
  										<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
									</button>
		                		</div>
		                	</div>
		                	<div className="text">
		                       <div className="content31aat">
	                       			<a href="">
		                            	<h1>
		                                	WACSSA 
		                            	</h1>
		                        	</a>
		                        	<p>
		                            	Congratulations to our Year 6 boys (along with 3 of our Year 5’s) who won the WACSSA Division 1 Football Tournament today.
		                        	</p>
		                        	<button className="btn"> Read More </button>
		                    	</div>
		                	</div>
		             	</div>
		            </div>
		            <div className="content32">
		                <div className="content32a half">
		                	<div className="content32a img">
			                	<div className="imgb">
		                			<div className="cover">		          
	                				</div>
	                				<button type="button" className="btn btn-default btn-lg">
  										<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
									</button>
		                		</div>
		                	</div>
		                	<div className="text">
		                    	<div className="content32aat">
		                        	<a href="">
		                            	<h1>
		                                	Classroom
		                            	</h1>
		                        	</a>
		                        	<p>
		                            	The children in Year 1A are currently exploring Project Based Learning. 
		                            	They have been collaborating with each other to investigate and learn more about different aspects of farming in WA
		                        	</p>
		                        	<button className="btn"> Read More </button>
		                    	</div>
		                	</div>
		             	</div>
		            </div>
		        </div>
		        <button type="button" class="btn next">next </button>
    		</section>
		);
	}
}