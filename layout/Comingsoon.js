import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from './header';
function ComingSoon() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);

	useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2022-10-31 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);

  return (
    <>
		<Header />
			
      <div className="page-content bg-white">
        {/* <!-- inner page banner END --> */}
		<div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white coming-soon overlay-black-dark" style={{"backgroundImage":"url(images/background/coming-soon.jpg)","backgroundSize":"cover"}}>
                <div className="container">
					<div className="text-center">
						<div className="cs-logo">
							<div className="logo"><img src="images/unistusltd.png" alt=""/></div>
						</div>
						<div className="cs-title">Coming Soon</div>
						<div className="countdown text-center">
							<div className="date"><span className="time days">{days}</span>
								<span>Days</span>
							</div>
							<div className="date"><span className="time hours">{hours}</span>
								<span>Hours</span>
							</div>
							<div className="date"><span className="time mins">{minutes}</span>
								<span>Minutes</span>
							</div>
							<div className="date"><span className="time secs">{seconds}</span>
								<span>Second</span>
							</div>
						</div>
						<ul className="countdown-social">
							<li className="mr-2"><a href="https://www.facebook.com/UnistusServices" className="fa fa-facebook"></a></li>
							<li className="mr-2"><a href="https://twitter.com/UnistusServices" className="fa fa-twitter"></a></li>
							<li className="mr-2"><a href="https://www.linkedin.com/company/68793810/" className="fa fa-linkedin"></a></li>
							<li className="mr-2"><a href="https://www.instagram.com/unistusservices/" className="fa fa-instagram"></a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- About Us End --> */}
        </div>
		{/* <!-- contact area END --> */}
    </div>
    </>
  )
}

export default ComingSoon;