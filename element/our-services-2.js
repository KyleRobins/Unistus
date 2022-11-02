import { useState } from "react";

function OurServices2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							<h2 className="title">Behind The Story Of Unistus Marketing Agency</h2>
						</div>
						<p>Our Mission is to brands and organisations make meaningful, magical and memorable differences in the lives and ​

fortunes of youth and African families.</p>
						<p>We do this in the Retail Stores, Dukas, Kiosks, Markets places, schools, malls, communities and digital playgrounds.</p>
						<p className="m-b30">Our Work scope concentration is East Africa with a defined reach in Southern & Central African Countries.</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Founded in 2016</h4>
								<p>Unistus Services was founded in 2016 to focus on connecting brands to right audience through Experiential & Branding.</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-check"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Registered in 2019</h4>
								<p>Duly registered to offer Marketing & Advertising Services in East Africa, Central and South Africa.</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Incorporated in 2020</h4>
								<p>Unistus was incorporated to comply with Kenya Business registration requirements.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default OurServices2;