import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'

import nashita from './assets/nashita-img.jpeg'
import nashitadp from './assets/dp-images/nashita-instagram-dp.jpg'
import sabila from './assets/sabila-img.jpg'
import sabiladp from './assets/dp-images/sabila-dp.jpg'
import iqra from './assets/iqra-img.jpeg'
import iqradp from './assets/dp-images/iqra-dp.jpg'
import suha from './assets/suha-img.jpeg'
import suhadp from './assets/dp-images/suha-dp.jpg'
import arefin from './assets/arefin-img.jpeg'
import arefindp from './assets/dp-images/arefin-dp.jpg'
import hamza from './assets/hamza-img-02.jpeg'
import hamzadp from './assets/dp-images/hamza-dp.jpg'
import tashfiah from './assets/tashfiah.jpeg'
import tashfiahdp from './assets/dp-images/tashfia-dp.jpg'
import oishee from './assets/oishee-img.jpeg'
import oisheedp from './assets/dp-images/oishee-dp.jpg'
import zaima from './assets/zaima-img.jpg'
import zaimadp from './assets/dp-images/zaima-dp.jpg'

import './App.css'
import Post from './Post'

function App() {
	const posts = [
		{
			username: 'nashitakauser',
			dp: nashitadp,
			image: nashita,
			caption: "Happy birthday!! Ik most of the time our conversation is “chol dost dekha kori” and thats it. But at least we know that doesn’t affect our friendship AND THANK GOD we are still friends. Love YOU A LOT and have a blast!!"
		},

		{
			username: 'sabilacoolna._.27',
			dp: sabiladp,
			image: sabila,
			caption: "Meow meow meow meow Meow meow meow meow meow meow ....Heppy borth day faltu. Paragraph likha is not my thing Janos e tao likhtesi, huh Tor jonno Khali faltu. Tor birthday te thakte parle onek bhalo hoito, Tor bf er theke o bhalo surprise ditam huh. Jeitai hok onek miss Kori toke. \"24 hrs ekshathe thaka to 24 days por por Kotha bola\" Bhai lyf kemne change Hoye jay. U knw how much u mean to me notun Kore bolar r kisu nai. I love you so much <3"
		},

		{
			username: 'iqra._.021',
			dp: iqradp,
			image: iqra,
			caption: "Iqra-And all my walls stood tall painted blue But I'll take 'em down, take 'em down And open up the door for you"
		},

		{
			username: 'suha_zzzzzz',
			dp: suhadp,
			image: suha,
			caption: "Happy birthday, pooks!!!From helping you select your courses outside the canteen to making you my adopted child- loved that transition. Couldn’t have asked for a better way to see our friendship evolve.Hopefully, we’ll keep helping each other cross roads, turning our miseries into jokes, and laughing through them.Also, hate it that you're always MIA :')Other than that, love your everything! Keep shining bb!"
		},

		{
			username: 'zzaiima',
			dp: zaimadp,
			image: zaima,
			caption: 'Happy birthday to the only person who matches my height. I hope you get everything you wish for in life.  Stay happy, healthy and little.PLEASE MEET ME SOON. Love you a lot!!!❤️❤️❤️ Yours truly, Radio'
		},

		{
			username: 'imnot_arefin_',
			dp: arefindp,
			image: arefin,
			caption: "Happy birthday rubaiya( picchi -2)🎉 🎂dowa kori jate taratari class 5 theke class 6 a utho.. and trt dite vhuilo na..🤝"
		},

		{
			username: 'hamza',
			dp: hamzadp,
			image: hamza,
			caption: "Happy borthday Rubaiya Hope this year brings you more joy and prosperity And I certainly hope tomar age er shathe shathe Ishmam er proti tolerance bare because I can’t anymore bro"
		},

		{
			username: 'tashfiah_hasan',
			dp: tashfiahdp,
			image: tashfiah,
			caption: "Hi picchi! We’ve survived some serious rollercoasters in life and honestly, it was great trauma bonding with you. I am really happy for you dost so here’s to healing, laughter, and way fewer plot twists this year. Love you"
		},

		{
			username: '0isheee',
			dp: oisheedp,
			image: oishee,
			caption: "Dear Rubaiya, May your birthday be filled with full of love and happiness, Happy birthday girl sending love and birthday hugs to you 💗"
		},

		
	]

	return ( 
		<>
			<Header />
			<div className='feed'>
				{posts.map((post, idx) => (
					<Post
						key={idx}
						username={post.username}
						dp={post.dp}
						image={post.image}
						caption={post.caption}
					/>
				)) }
			</div>
		</>
	)
}

export default App
