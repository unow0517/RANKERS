import React from "react";

const About = () => {

	return(
		<div className="paragraphContainer">
			<div className='opening'>
				<p>Goal of this app is to connect people through sports. You can find matches and make 	friends near you. It started as a pilot project in 42 Heilbronn and soon it will be developed to location-based sports matching app. Huge Thanks to 42 Heilbronn to make it possible that RANKERS brings you healthy & happy life.</p>
				<div className='writer'>
					<b>-yowoo-</b>
				</div>
			</div>
			<div className='rulesContainer'>
				<h1 className='rulesTitle'>Rules</h1>

				<div className='ruleNumber0'>
					<h2>0. THIS IS NOT AN OLYMPIC GAME</h2>
					<p>Please do not get too serious about rating, the ultimate purpose of playing in RANKERS is to improve your table tennis skill and to make friends, NOT TO WIN. Be kind and show respect to your opponent. Any kind of harassment, racism, assault, or aggressive action is never allowed.</p>
				</div>

				<h2>1.	SCORE AND RATING DIFFERENCE DECIDE THE RATING YOU GET</h2>
				<p>Rating will be caculated based on the score difference in a match and rating difference of the two players</p>

				<h2>2.	THERE IS NO TIME LIMIT FOR RESULT SUBMISSION</h2>
				<p>If the table is already occupied at the match time, find better time to play with your opponent. As long as the match results from both player are the same, it will be applied to rating. There is no deadline for the submission.</p>

				<h2>3.	GAMES ARE PLAYED TO 11 POINTS</h2>
				<p>A Game is played to 11 points. A Game must be won by two points. A Match is the best two of three Games. </p>
		
				<h2>4.	ALTERNATE SERVES EVERY TWO POINTS</h2>
				<p>Each side of the table alternates serving two points at a time. EXCEPTION: After tied 	10-10 (“deuce”), service alternates at every point. Can you lose on a serve in ping 	pong? Yes! There is no separate rule for serving on Game Point.</p>
		
				<h2>5.	TOSS THE BALL STRAIGHT UP WHEN SERVING</h2>
				<p>How do you serve the ball in ping pong? Hold the ball in your open palm, behind your 	end of the table. Toss at least <b>16cm (6”)</b> straight up, and strike it on the way down. It must 	hit your side of the table and then the other side. NOTE: Once the ball leaves the 	server’s hand it is in play, and so counts as the receiver’s point if the ball is missed 	or mis-hit.</p>
		
				<h2>6.	THE SERVE CAN LAND ANYWHERE IN SINGLES</h2>
				<p>There is no restriction on where the ball lands on your side or your opponent’s side of the table. It can bounce two or more times on your opponent’s side (if so, that’s your point), bounce over the side, or even hit the edge. </p>

				<h2>7.  A SERVE THAT TOUCHES THE NET ON THE WAY OVER IS A “LET”</h2>
				<p>Can the ball hit the net in ping pong? Yes, during a RALLY, if it touches the top of the net and then otherwise lands as a legitimate hit. BUT not when serving. If a served ball hits the net on the way over and otherwise legally bounces in play, it’s a “let” 	serve and is done over. There is no limit on how many times this can happen. </p>
		
				<h2>8.  ALTERNATE HITTING IN A DOUBLES RALLY</h2>
				<p>Doubles partners must alternate hitting balls in a rally, no matter where the ball 	lands on the table. </p>
		
				<h2>9.  VOLLEYS ARE NOT ALLOWED </h2>
				<p>Can you hit the ball before it bounces in ping pong? No. In regular tennis you may “volley” the ball (hitting the ball before it bounces on your side of the net). But in 	table tennis, this results in a point for your opponent. NOTE: When your opponent hits a 	ball that sails over your end of the table without touching it and then hits you or your 	paddle, that is still your point.</p>
		
				<h2>10.  IF YOUR HIT BOUNCES BACK OVER THE NET BY ITSELF IT IS YOUR POINT</h2>
				<p>If you hit the ball in a rally or on a serve and it bounces back over the net after 	hitting your opponent’s side of the table (due to extreme spin), without your opponent 	touching it, that is your point.</p>
		
				<h2>11.  TOUCHING THE BALL WITH YOUR PADDLE HAND IS ALLOWED</h2>
				<p>What happens if the ball hits your finger or hand during a ping pong rally?  If the 	ball touches your PADDLE hand and otherwise results in a legal hit, there is no rule 	violation and play shall continue as normal. Your paddle hand includes all fingers and 	hand area below the wrist. But what if the ball touches a player’s body anywhere else 	during a ping pong rally? You may not touch the ball with your non-paddle hand for any 	reason. It will result in a point for your opponent. BUT if your opponent’s hit sails 	over your side of the table without touching it, and hits any part of you or 				your paddle, that is still your point.</p>
		
				<h2>12.  YOU MAY NOT TOUCH THE TABLE WITH YOUR NON-PADDLE HAND</h2>
				<p>You may touch the ball or the table with your paddle hand (after reaching in to 	return a short serve, for example), or other parts of your body. NOTE: If the table 	moves at all from your touching it during a rally, that is your opponent’s point. </p>
		
				<h2>13.  AN “EDGE” BALL BOUNCING OFF THE HORIZONTAL TABLE TOP SURFACE IS GOOD</h2>
				<p>An otherwise legal serve or hit may contact the top edge of the horizontal table top 	surface and be counted as valid, even if it bounces sidewise. The vertical sides of the 	table are NOT part of the legal playing surface.</p>
		
				<h2>14. FAIRPLAY SINCE NO UMPIRE IS PRESENT</h2>
				<p>If no referee is present (most of the cases in matches of RANKERS) during a match and the players disagree on a certain call, the “honor system” applies and the players should find a way to agree, or play the point over. Ping pong carries a tradition of fierce but fair play. Help us keep it that way!</p>

				<div className='ruleDouble'>
					<h2>15.  DOUBLES SERVES MUST GO RIGHT COURT TO RIGHT COURT</h2>
					<p>The serve must bounce in the server’s right court, and receiver’s right court (NOTE: landing on center line is fair). Doubles partners switch places after their team serves twice.</p>
				</div>
			</div>

		</div>
	)
}

export default About;