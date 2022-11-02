import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/Aboutus.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">Connecting Your Brand</h2>
							<p>Unistus Services was founded in the year 2016 to focus on connecting brands to the right audience through experiential and branding Unistus was registered in the year 2018 we comply with Kenya business registration requirements.</p>
						</div>
						<ul className="list-check primary m-b30">
							<li>Strategic Market Approach.</li>
							<li>Branding And Printing.</li>
							<li>Communication and Collateral.</li>
							{/* <li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li> */}
						</ul>
						<Link href="about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;