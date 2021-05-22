spoiler_onclick = "if(document.getElementById(\"spoiler\").style.display==\"none\") {document.getElementById(\"spoiler\").style.display=\"\"}else{document.getElementById(\"spoiler\").style.display=\"none\"}";
spoiler_button = "<button title='Show dialogue' type='button' onclick='" + spoiler_onclick + "'>Show dialogue</button><div id='spoiler' style='display:none; text-align:left; margin-left:10px'>";

panels = {
	1: {
		"title": "ForumQuest",
		"text": "You wake up in an unfamiliar <b>desert</b> with no recollection of who you are nor any idea how you got here.<br>The sea of shimmering sand seems to stretch endlessly, and there's certainly no sign of civilization other than a solitary <b>signpost</b>. There are <b>mountains</b> in the far distance.<br>What do you do?",
		"type": ".png",
		"date": "8/6/2020"
	},
	2: {
		"title": ">> Examine signpost",
		"text": "You come across perhaps the most useless <b>signpost</b> you've ever seen.<br>Wait a minute... There are pictures on it, but they're badly worn and you have trouble making them out.",
		"type": ".png",
		"date": "8/7/2020"
	},
	3: {
		"title": ">> Go right",
		"text": "You leave the signpost behind and happily saunter off to the <b>right</b>.",
		"type": ".gif",
		"date": "8/7/2020"
	},
	4: {
		"title": ">> Continue",
		"text": "You come across a small <b>wooden shack</b>. A <b>road</b> extends far into the distance. It seems to end here.<br>There's a <b>really crappy car</b> parked right next to the shack.",
		"type": ".png",
		"date": "8/7/2020"
	},
	5: {
		"title": ">> Enter the shack",
		"text": "You enter the <b>wooden shack</b>. Unfortunately, there's no one home. The room is dark and musty, and judging by the cobwebs, it's been here a while.<br>In contrast to the rustic furniture, there's a distinctly modern-looking <b>computer</b> on the table. There's also another table with a <b>safe</b> built into it.<br>On top of it is a <b>key</b> and a <b>lighter</b>.",
		"type": ".png",
		"date": "8/7/2020"
	},
	6: {
		"title": ">> Take all items",
		"text": "You hatch a diabolical <b>master plan</b>. First you take the key, and importantly, the <b>lighter</b>. You place them into your <b>inventory</b>, filling up two slots.",
		"type": ".png",
		"date": "8/7/2020"
	},
	7: {
		"title": ">> Burn it all",
		"text": "The shack goes up in flames as you flee from the ensuing inferno.",
		"type": ".png",
		"date": "8/7/2020"
	},
	8: {
		"title": ">> Follow the road",
		"text": "Following your pyromanic episode, you follow the road and find yourself on the outskirts of a <b>village</b>. A sign proudly proclaims this village's name to be <b>RIGHT</b>. You can almost hear the theme to that one western blaring in the background as you watch a tumbleweed slowly roll by, carried by a gentle breeze.<br>You see several buildings, including a <b>bank</b>, a <b>store</b>, and of course, a <b>saloon</b>.",
		"type": ".png",
		"date": "8/8/2020"
	},
	9: {
		"title": ">> Next",
		"text": "A <b>shadow</b> glides across the sand...",
		"type": ".gif",
		"date": "8/9/2020"
	},
	10: {
		"title": ">> Next",
		"text": "<a href='https://www.youtube.com/watch?v=d4MqTCIDKhU'>OH GOD<br>NOT THE BATS<br>THEY'RE ALL OVER MY EYES<br></a>The <b>alien space bats</b> transcend time, space, and file formats, causing jpeg artifacts in this gif.",
		"type": ".gif",
		"date": "8/9/2020"
	},
	11: {
		"title": ">> Perform epic battle maneuver",
		"text": "You perform an <b>epic battle maneuver</b>. That is to say, you flail your arms at approximately Mach 1.<br>The <b>bats</b>, clearly intimidated by this show of force, quickly retreat.",
		"type": ".gif",
		"date": "8/9/2020"
	},
	12: {
		"title": ">> Enter bank",
		"text": "After the intense encounter with the <b>alien space bats</b>, you take a quick breather before entering the <b>bank</b>.<br>Behind the counter is the first person you've seen so far! Yay. He seems unhappy, though.",
		"type": ".png",
		"date": "8/9/2020"
	},
	13: {
		"title": ">> Obtain funds to file a restraining order",
		"text": "You're intimidated by the sheer size of this guy.<br>" + spoiler_button + "<br>You: Hi!<br><span style='color:#16a085'>Teller: What d'you want?</span><br>You: I'd like to take a loan.<br><span style='color:#16a085'>Teller: What for?</span><br>You: I need funds to file a restraining order. You see, I'm being chased by <b>alie</b>-<br><span style='color:#16a085'>Teller: Yer not from here, are you? We don't give loans to strangers here!</span><br>You: Doesn't that... defeat the purpose of a bank?<br><span style='color:#16a085'>Teller: Lemme guess, yer from Left.</span><br>You: Left?<br><span style='color:#16a085'>Teller: Get outta here, yer wasting my time!</span><br>You: Yeah... before I go, is there another bank somewhere nearby?<br><span style='color:#16a085'>Teller: If there was, d'you think I'd tell you? Wait, that reminds me... you know we're recruiting, right?</span><br>You: Who?<br><span style='color:#16a085'>Teller: Very funny. If you don't mind getting yer hands a little dirty, the boss needs some work done. Something to do with the White Hats, most likely. You look pretty inconspicuous, the IBI won't suspect you.</span><br>You: Hold on, you're throwing a lot of buzzwords around. The boss? What is this, a-<br><span style='color:#16a085'>Teller: D'you want the money or not? We can get you something better than a loan.</span><br>You: Well, yes, but I'd-<br><span style='color:#16a085'>Teller: That's what I like to hear! Follow me, I'll show you around. Just between us - the boss is in a pretty foul mood right now. Apparently one of his houses burned down earlier today, and his car was badly damaged.</span><br>You: Oh.<br>You: Hm.<br>You: Who could have done that?<br><span style='color:#16a085'>Teller: White Hats, probably. No one knows for sure.</span>",
		"type": ".png",
		"date": "8/9/2020"
	},
	14: {
		"title": ">> Accept the offer",
		"text": "You reluctantly accept the offer. The teller leads you into the <b>basement</b>. As it turns out, this bank is a front for a shadowy organization called the <b>Brotherhood of Black Hats</b>, called so because all members wear a <b>really awesome black hat</b>. For decades, a rival organization named the <span style='color:#ffffff'><b>Brotherhood of White Hats</b></span> (called so because all members wear a <span style='color:#ffffff'><b>really lame white hat</b></span>) has opposed them. But now, <b>the boss</b> believes he's on to something.<br>He suspects he's found a <span style='color:#ffffff'><b>White Hat</b></span> sleeper agent in <b>Left</b>, a town not far from here. Following a raid on a <span style='color:#ffffff'><b>White Hat</b></span> compound, they discovered a list of addresses belonging to members of the group. Most of them have been dealt with, but one remains.<br>The boss wants you to pay them a visit and extract any important documents on the <span style='color:#ffffff'><b>Brotherhood of White Hats</b></span>. He hands you a note and leaves you to your own devices.<br><i>13 Main Street - Left</i>)",
		"type": ".png",
		"date": "8/10/2020"
	},
	15: {
		"title": ">> Obtain legendary weapon",
		"text": "You are given a <b>legendary item</b>: the <span style='color:#c0392b'><b>Makeshift Dagger</b></span>!<br>It's rusty, slightly bent and looks like it's made of scrap metal. Still, could come in handy.",
		"type": ".png",
		"date": "8/11/2020"
	},
	16: {
		"title": ">> Add item to inventory",
		"text": "You add the <span style='color:#c0392b'><b>Makeshift Dagger</b></span> to your inventory, right next to the <b>key</b> you obtained from <b>the boss'</b> house. The one you burned down. Let's hope he doesn't find out about that.",
		"type": ".png",
		"date": "8/11/2020"
	},
	17: {
		"title": ">> Travel to Left",
		"text": "With that out of the way, you leave the bank. The <b>alien space bats</b> could attack at any moment, and you still haven't filed the restraining order to get rid of their threat. Hold on... how are you going to get to Left? It's been a long day, and you're really not in the mood for walking. You figure a <b>horse</b> is your best bet.<br>You then realize you're broke. The <b>bank</b> is obviously out of the question, and you don't want to test <b>the boss</b>' generosity.",
		"type": ".gif",
		"date": "8/11/2020"
	},
	18: {
		"title": ">> Imagine",
		"text": "You imagine yourself galloping through the desert on a <b>horse</b>. This somehow works, summoning the <span style='color:#8e44ad'><b>hors</b></span>, a truly nightmarish beast from an alternate dimension.",
		"type": ".gif",
		"date": "8/11/2020"
	},
	19: {
		"title": ">> Ride",
		"text": "The <span style='color:#8e44ad'><b>hors</b></span> glides across the sand toward your destination.",
		"type": ".gif",
		"date": "8/11/2020"
	},
	20: {
		"title": ">> Next",
		"text": "After a long and exhausting ride across the desert, you come across a <b>well</b>. The water is surprisingly cold, and you happily take a long drink. You offer the <span style='color:#8e44ad'><b>hors</b></span> some, but as usual it just stares at your with a blank expression.",
		"type": ".png",
		"date": "8/12/2020"
	},
	21: {
		"title": ">> Look up",
		"text": "Uh oh. That's not a good omen.",
		"type": ".gif",
		"date": "8/12/2020"
	},
	22: {
		"title": ">> Next",
		"text": "<a href='https://www.youtube.com/watch?v=u5k_arVcqR8'>OH GOD<br>OH MAN<br>OH GOD</a><br>You watch helplessly as a group of <b>alien space bats</b> latch onto the <span style='color:#8e44ad'><b>hors</b></span> and carry it away. One of them stays behind and attacks!",
		"type": ".gif",
		"date": "8/12/2020"
	},
	23: {
		"title": ">> Fight",
		"text": "You unsheathe your <span style='color:#c0392b'><b>Makeshift Dagger</b></span> and prepare to avenge your friend!",
		"type": ".gif",
		"date": "8/12/2020"
	},
	24: {
		"title": ">> Strangle bat",
		"text": "You momentarily abandon all common sense and begin to strangle the <b>bat</b>. It's surprisingly effective.",
		"type": ".png",
		"date": "8/13/2020"
	},
	25: {
		"title": ">> Next",
		"text": "The ridiculousness of the situation begins to dawn on you, causing you to stumble and let go of the <b>bat</b>. It seizes the opportunity and attacks!",
		"type": ".gif",
		"date": "8/13/2020"
	},
	26: {
		"title": ">> Throw dagger at bat",
		"text": "You throw the <span style='color:#c0392b'><b>Makeshift Dagger</b></span> at the <b>bat</b>, impaling it and infusing the <span style='color:#c0392b'><b>dagger</b></span> with alien blood. The <b>bat</b> quickly disintegrates.",
		"type": ".gif",
		"date": "8/13/2020"
	},
	27: {
		"title": ">> Pick up dagger",
		"text": "You obtain the <span style='color:#27ae60'><b>Infused Dagger</b></span>! It's still rusty, bent, and made of scrap metal, but now it has <b>alien space powers</b>! Problem is, you're not an <b>alien space bat</b>, so there's no way for you to harness the powers. Hey, at least it looks cool!",
		"type": ".png",
		"date": "8/13/2020"
	},
	28: {
		"title": ">> Next",
		"text": "In addition to getting an improved weapon, you have managed to exact revenge on the <b>bats</b>. However, you're now stranded in the desert.",
		"type": ".png",
		"date": "8/13/2020"
	},
	29: {
		"title": ">> Jump in well",
		"text": "You gain the <b>thirst</b> debuff!<br>You weigh your options. According to your estimates, <b>Left</b> is two days' walk away, but you'd most likely die of thirst before then. Hmm... thirst... <b>water</b>... In a stroke of absolute genius, you decide to jump into the <b>mysterious well</b>. What horrors could lurk within?",
		"type": ".gif",
		"date": "8/14/2020"
	},
	30: {
		"title": ">> Next",
		"text": "You tumble down the <b>well</b>. You're beginning to regret this already.",
		"type": ".gif",
		"date": "8/14/2020"
	},
	31: {
		"title": ">> Examine surroundings",
		"text": "The <b>water</b> suddenly ends and you hit the ground. You pick yourself up and examine your surroundings.<br>It's some sort of <b>cave</b>, surprisingly well-lit thanks to the <b>torches</b> that line the wall. An <b>alien forcefield</b> keeps the water inside the well. There seem to be two ways forward: the <b>tunnel</b> to the left is dark and spooky, and it looks like a tight squeeze. The one to the right, on the other hand, is brightly lit and spacious. <b>Ancient glyphs</b> are carved on the wall.",
		"type": ".png",
		"date": "8/14/2020"
	},
	32: {
		"title": ">> Take a closer look at glyphs",
		"text": "You examine the <b>ancient glyphs</b>. They've clearly been here for hundreds if not thousands of years. What could they mean?",
		"type": ".png",
		"date": "8/15/2020"
	},
	33: {
		"title": ">> Go right",
		"text": "You continue down the tunnel until you come to a dead end. Some sort of <b>gun</b> is being helf in a <b>forcefield</b>. What's with all the alien machinery</b> down here?",
		"type": ".png",
		"date": "8/15/2020"
	},
	34: {
		"title": ">> Take gun",
		"text": "You take <span style='color:#2ecc71'><b>Chekhov's Gun</b></span>. It's completely and utterly useless and will have absolutely no plot significance later on.",
		"type": ".png",
		"date": "8/15/2020"
	},
	35: {
		"title": ">> Next",
		"text": "You hear ominous rumbling and you turn around. By taking the <span style='color:#2ecc71'><b>gun</b></span>, you've awakened the <b>alien shadow</b>, the guardian of this cave. It's rapidly advancing right toward you. You can almost feel it creating subatomic ruptures in the space-time continuum.",
		"type": ".gif",
		"date": "8/15/2020"
	},
	36: {
		"title": ">> Eat gun",
		"text": "...<br>no.",
		"type": ".gif",
		"date": "8/16/2020"
	},
	37: {
		"title": ">> Throw infused dagger",
		"text": "In a last-ditch effort to escape the <b>alien shadow</b>, you throw the <span style='color:#27ae60'><b>Infused Dagger</b></span> at i- OH GOD WHAT IS HAPPENING",
		"type": ".gif",
		"date": "8/16/2020"
	},
	38: {
		"title": ">> Data c>orru>pted >",
		"text": "<i>The data stream is corrupted. Please stand by.</i>",
		"type": ".png",
		"date": "8/18/2020"
	},
	39: {
		"title": ">> Next",
		"text": "Damn it, the video feed is corrupted. What did that guy do? Well, might as well take a quick break from all the transdimensional stalking and wait for the data stream to sync up again.",
		"type": ".gif",
		"date": "8/18/2020"
	},
	40: {
		"title": ">> Next",
		"text": "How about a game?",
		"type": ".gif",
		"date": "8/18/2020"
	},
	41: {
		"title": "<h1>BEGIN INTERMISSION</h1><h3><i>\"End of the Line\"</i></h3>",
		"text": "You wake up in a <b>cart</b> with no recollection of who you are nor any idea how you got here. There are three other <b>prisoners</b> in the cart with you.",
		"type": ".gif",
		"date": "8/18/2020"
	},
	42: {
		"title": ">> Next",
		"text": "You arrive in a village called <b>Helgen</b>. The prisoners are being rounded up for summary execution by the Imperial army. Fortunately, you're not on the list! Perhaps you'll be spared after all.",
		"type": ".png",
		"date": "8/18/2020"
	},
	43: {
		"title": ">> Next",
		"text": "You say your name is <b>S. Tickman</b>. Strange name for a Nord, but it'll have to do.",
		"type": ".png",
		"date": "8/19/2020"
	},
	44: {
		"title": ">> Run off on all fours and bark like a dog",
		"text": "You're sure there's a <b>mod</b> for that, but you couldn't be bothered to go to the trouble of solving fifty-nine separate compatibility issues.<br>Also, your hands are bound.<br>Also, <i>why</i> would you do that? <i>WHY?</i>",
		"type": ".gif",
		"date": "8/19/2020"
	},
	45: {
		"title": ">> [S] Use spell to unbind hands",
		"text": "You cast a spell, removing the <b>rope</b> binding your hands together. Unfortunately, this also removes your <b>hands</b>.",
		"type": ".gif",
		"date": "8/20/2020"
	},
	46: {
		"title": ">> Set up camp",
		"text": "You distract the soldiers with your sudden lack of hands and escape Helgen, leaving the other prisoners to their fates. It's getting chilly, so you decide to build a <b>campfire</b> and set up a <b>tent</b>. Uh, don't ask how.",
		"type": ".png",
		"date": "8/22/2020"
	},
	47: {
		"title": ">> Investigate Helgen",
		"text": "You decide to leave your campsite behind and return to Helgen to investigate what happened there. As you approach the village, you notice <b>smoke</b> rising from behind the walls... They're just having a big ol' barbecue party, right?<br>Right?",
		"type": ".png",
		"date": "8/23/2020"
	},
	48: {
		"title": ">> Next",
		"text": "It's worse than you thought: a <b>dragon</b> destroyed the entire village! So much for the BBQ.<br>You explore the ruins but find no survivors. Perhaps they escaped into the <b>keep</b>?",
		"type": ".png",
		"date": "8/23/2020"
	},
	49: {
		"title": ">> Enter keep",
		"text": "The <b>keep</b> is eerily quiet. You delve in deeper...",
		"type": ".png",
		"date": "8/23/2020"
	},
	50: {
		"title": ">> Next",
		"text": "A tunnel system under the keep connects to a <b>cave</b>. There, you find <b>Hadvar</b>, an Imperial soldier, and <b>Ralof</b>, a prisoner who was in the cart with you. They're badly injured, but still alive. You don't think you can save both of them.",
		"type": ".png",
		"date": "8/23/2020"
	},
	51: {
		"title": ">> [S] Rob Hadvar",
		"text": "Uh...<br>Clearly, Hadvar doesn't take too kindly on your attempt to steal his <b>shield</b>.<br>GAME OVER",
		"type": ".gif",
		"date": "8/24/2020"
	},
	52: {
		"title": ">> Try again",
		"text": "Instead of robbing Hadvar, this time you help him up and escort him out of the cave.",
		"type": ".png",
		"date": "8/24/2020"
	},
	53: {
		"title": ">> Next",
		"text": "You and Hadvar walk to a small town called <b>Riverwood</b>. Among other things, Riverwood contains an <b>inn</b>, a <b>general store</b>, and a <b>blacksmith's shop</b>. As it turns out, the blacksmith himself is Hadvar's uncle, <b>Alvor</b>. Alvor wants you to travel to <b>Whiterun</b>, a city not far from here, to warn the <b>jarl</b> about the dragon attack and ask him to send some guards over to protect Riverwood.<br>...but honestly, you couldn't care less about that. You're just happy to finally be free!",
		"type": ".png",
		"date": "8/24/2020"
	},
	54: {
		"title": ">> Fast forward",
		"text": "You stand atop the <b>Throat of the World</b>, the tallest mountain in Skyrim. As evidenced by your fabulous <b>Daedric armor</b>, you are the champion of 15 Daedric gods. You are also the <b>Archmage</b> of the <b>College of Winterhold</b>, the <b>Harbinger</b> of the <b>Companions</b>, <b>Guild Master</b> of the <b>Thieves' Guild</b>, and <b>Listener</b> of the <b>Dark Brotherhood</b>. You have been awarded the title of <b>Thane</b> by the jarls of all nine holds.<br>You single-handedly ended Skyrim's <b>civil war</b>, and you're best buddies with <b>General Tullius</b>, the guy who tried to execute you in the beginning of the game, and with the help of the <b>Dawnguard</b>, you raided Castle Volkihar and saved the world from the vampires. In addition to all that, you assassinated the Emperor himself, <b>Titus Mede II</b>. You tend to keep quiet about that part, lest word gets out.<br>All in all, you're probably the most important person in all of Skyrim, and songs honoring you are sung in taverns all around the continent...",
		"type": ".png",
		"date": "8/26/2020"
	},
	55: {
		"title": ">> Next",
		"text": "...yet this guy still makes condescending comments about how you supposedly 'don't get to the cloud district'. Oh well.",
		"type": ".png",
		"date": "8/26/2020"
	},
	56: {
		"title": ">> Complain about increasingly long intermission",
		"text": "Aw come on, I could have gone on with this for months!",
		"type": ".png",
		"date": "8/26/2020"
	},
	57: {
		"title": ">> Next",
		"text": "You don't remember downloading this mod. The creator could have at least improved the textures for... whatever these things are. Bats? Alien bats? They look like they're straight out of someone's first flash game in 2007.",
		"type": ".gif",
		"date": "8/27/2020"
	},
	58: {
		"title": ">> Next",
		"text": "The <b>bats</b> push you off the edge, and you unceremoniously tumble down the side of the mountain.",
		"type": ".gif",
		"date": "8/27/2020"
	},
	59: {
		"title": ">> Next",
		"text": "Ah, of course, you should have known this was going to happen. To make things worse, you didn't save your game a single time during your entire playthrough!",
		"type": ".png",
		"date": "8/27/2020"
	},
	60: {
		"title": ">> Smash monitor",
		"text": "You let out a bone-chilling scream and prepare to take your anger out on your <b>monitor</b>. Hold on... it's this guy again. Took longer than expected, but at least it looks like the <b>data stream</b> is synchronized again.<br>",
		"type": ".png",
		"date": "8/28/2020"
	},
	61: {
		"title": "<h1>END INTERMISSION</h1>",
		"text": "We now return you to your regularly scheduled programming.",
		"type": ".gif",
		"date": "8/28/2020"
	},
	62: {
		"title": ">> Look around",
		"text": "You find yourself in a <b>mysterious dimension</b>. It's a perfectly flat plane extending as far as the eye can see. You can't see anyone, or anything for that matter, but you still feel like you're being watched. There's something seriously wrong here, and you can't quite put your finger on it.",
		"type": ".gif",
		"date": "8/28/2020"
	},
	63: {
		"title": ">> Next",
		"text": "You hear otherworldly <b>whispers</b> emanate from the dark area ahead of you. You feel an urge to step into the darkness, as if the whispers are drawing you toward their source.",
		"type": ".png",
		"date": "8/29/2020"
	},
	64: {
		"title": ">> Next",
		"text": "You carefully traverse the plane for what seems like an eternity. And all the while, the whispers seem to grow louder and clearer.",
		"type": ".gif",
		"date": "8/29/2020"
	},
	65: {
		"title": ">> Next",
		"text": "Is that...?<br>No, it can't be...",
		"type": ".png",
		"date": "8/29/2020"
	},
	66: {
		"title": ">> Next",
		"text": "It's a <span style='color:#8e44ad'><b>ghost hors</b></span>! What have the <b>bats</b> done to it!? You can't tell if the blank look on its face is one of happiness or disappointment.",
		"type": ".png",
		"date": "8/31/2020"
	},
	67: {
		"title": ">> Follow the hors",
		"text": "The <span style='color:#8e44ad'><b>hors</b></span> turns around and trots away. You decide to follow it. Maybe it's trying to lead you to something?",
		"type": ".gif",
		"date": "8/31/2020"
	},
	68: {
		"title": ">> Next",
		"text": "The <span style='color:#8e44ad'><b>hors</b></span> stops next to an <b>ancient pedestal</b>, on top of which is a very large <b>envelope</b>.)",
		"type": ".png",
		"date": "8/31/2020"
	},
	69: {
		"title": ">> Open envelope",
		"text": "What could it be? Instructions for leaving this place? A million-dollar cheque? A recipe for a particularily delicious pie?<br>Nope, it's an invitation to a shady-sounding pyramid scheme.",
		"type": ".png",
		"date": "8/31/2020"
	},
	70: {
		"title": ">> Force hors to sign the letter",
		"text": "You threaten <span style='color:#8e44ad'><b>hors</b></span> with <span style='color:#2ecc71'><b>Chekhov's Gun</b></span> and tell it to sign the paper. The <span style='color:#2ecc71'><b>gun</b></span>, however, jams. Looks like it's not ready to go off yet.<br>Also, horses can't write!",
		"type": ".png",
		"date": "9/2/2020"
	},
	71: {
		"title": ">> Next",
		"text": "The <span style='color:#8e44ad'><b>hors</b></span> uses its <b>magic ghost powers</b> to summon a <b>pencil</b>! You feel kind of bad for threatening to shoot it now.",
		"type": ".png",
		"date": "9/2/2020"
	},
	72: {
		"title": ">> Sign letter",
		"text": "You take the <b>pencil</b> and sign the letter. Your signature is conveniently illegible, so as to avoid having to come up with a canon name for you. You can sense $100 being deducted from your <b>virtual bank account</b>. Didn't know you had one? Well, now you do.<br>Your balance is now -$100.",
		"type": ".png",
		"date": "9/2/2020"
	},
	73: {
		"title": ">> Next",
		"text": "As soon as you finish signing the paper, it goes up in flames and turns to ash. Suddenly, you hear an unfamiliar <b>voice</b>, seeming to come from every direction at once.<br>" + spoiler_button + "<br><span style='color:#777777'>???: Hey! Hey, you there! Can you hear me?</span><br>You: What?<br><span style='color:#777777'>???: I'm taking that as a yes.</span><br>You: Who... where are you?</br><span style='color:#777777'>???: Well, I'm clearly in another dimension. As for who I am, that doesn't really matter at the moment. I'm going to help you get out of here.</span><br>You: Is this about the money?<br><span style='color:#777777'>???: The pyramid scheme? Honestly, I can't believe you fell for that.</span></div>",
		"type": ".png",
		"date": "9/4/2020"
	},
	74: {
		"title": ">> Next",
		"text": "You continue talking to the <b>telepathic mystery man</b>.<br>" + spoiler_button + "<br><span style='color:#777777'>???: Look, I'm here to help you find that <b>White Hat</b> agent you were tracking down before you fouled everything up and ended up here.</span><br>You: How do you know about that?<br><span style='color:#777777'>???: Long story. For now, just focus on finding a way out of here. I haven't got all day, you know. Now that I think about it, neither do you...</span><br>You: Uh... I'm not sure if I should trust you. This is honestly kind of creepy, you just suddenly show up and you're able to see everything I'm doing?<br><span style='color:#777777'>???: I'll explain it all later. Like I said, I'm just here to help.</span><br>You: In that case, how do I get out of here?<br><span style='color:#777777'>???: Hold on, let me just open up my encyclopedia and flip to the entry for 'how to leave a mysterious alien dimension'. Wait a minute, there isn't one. Who'd have thought? I may be a disembodied voice in your head, but I'm not omniscient, dumbass.</span><br>You: <i>You literally just</i> said you were going to help!<br><span style='color:#777777'>???: Uh, sorry, I guess that was a little uncalled for. I'm gonna be honest with you and say that actually, I need your help more than you need mine.</span><br>You: With what?<br><span style='color:#777777'>???: It's kind of confidential.</span><br>You: I'm sure you can tell me, the person you supposedly need help from.<br><span style='color:#777777'>???: There's not much you can do right now anyway. Just keep doing what you were doing, and I'll keep in touch.</span><br>You: I still don't know about this...<br><span style='color:#777777'>???: Wait a sec, let's see if this can't convince you.</span></div>",
		"type": ".png",
		"date": "9/4/2020"
	},
	75: {
		"title": ">> Check bank account",
		"text": "Oh.",
		"type": ".png",
		"date": "9/4/2020"
	},
	76: {
		"title": ">> Refuse offer",
		"text": "You decide to refuse the offer. Who is this guy, anyway?<br>" + spoiler_button + "<br><span style='color:#777777'>???: So, what'll it be?</span><br>You: I appreciate the money, but I'm going to have to say no.<br><span style='color:#777777'>???: <i>What?</i></span><br>You: The whole reason I'm even looking for this White Hat guy is because I needed money, and now that I have like a million dollars there's no reason for me to continue.<br><span style='color:#777777'>???: ... I suppose I should have thought this through.</span></div>",
		"type": ".gif",
		"date": "9/6/2020"
	},
	77: {
		"title": ">> Fly on the hors",
		"text": "The emptiness of this place is really getting to you, and the <span style='color:#8e44ad'><b>ghost hors</b></span> isn't much company. Neither is the <b>telepathic mystery man</b>.<br>You decide to scout out the area. And what better way to do so that high up in the air? You manage to convince the <span style='color:#8e44ad'><b>ghost hors</b></span> to let you on its back. Seems like it has forgotten the time you threatened it with a <span style='color:#2ecc71'><b>gun</b></span>.<br>Oh, uh, did I mention this is a <span style='color:#8e44ad'><b>magic ghost hors</b></span>?",
		"type": ".gif",
		"date": "9/7/2020"
	},
	78: {
		"title": ">> Next",
		"text": "The monotone green gives way to an even more monotone white as you ascend higher into space. Does space even exist in this dimension?<br>You are once again contacted by the <b>telepathic mystery man</b>.<br>" + spoiler_button + "<span style='color:#777777'>???: Where are you going?</span><br>You: Oh god, you're still here?<br><span style='color:#777777'>???: What makes you think I left?</span><br>You: Well, I thought you gave up trying to recruit me into your pyramid scheme.<br><span style='color:#777777'>???: First of all, it's not a pyramid scheme, as I explained to you not long ago. The 'pyramid scheme' was just a clever ploy to initiate a transdimensional link. Second of all, I've only just begun. I won't give up this easy.</span><br>You: Great, can't wait to see what brilliant plan you come up with next.<br><span style='color:#777777'>???: So, you never answered my question. Where exactly are you going?</span><br>You: I'm going to scout out the area and look for a way out.<br><span style='color:#777777'>???: I'd advise against going so far up.</span><br>You: Why?<br><span style='color:#777777'>???: I'll tell you if you agree to help me.</span><br>You: Damn it.</div>",
		"type": ".png",
		"date": "9/7/2020"
	},
	79: {
		"title": ">> Next",
		"text": "After what seems like hours of flying, you come to a <b>mysterious platform</b>, holding some sort of <b>alien device</b>. The <span style='color:#8e44ad'><b>magic ghost hors</b></span> hovers above the platform as you take a closer look.",
		"type": ".png",
		"date": "9/7/2020"
	},
	80: {
		"title": ">> Inspect device",
		"text": "It's a <b>keypad</b>. Looks like you need to enter the correct <b>code</b> to power on... whatever this thing is. 10,000 different combinations... This is going to take forever.",
		"type": ".png",
		"date": "9/7/2020"
	},
	81: {
		"title": ">> Enter code",
		"text": "Got to start somewhere! You succumb to your inner 12-year-old and enter the code <b>6969</b>.",
		"type": ".png",
		"date": "9/8/2020"
	},
	82: {
		"title": ">> Next",
		"text": "Well, it was worth a shot. One down, 9,999 to go. There's got to be a more efficient wasy of doing this...",
		"type": ".png",
		"date": "9/8/2020"
	},
	83: {
		"title": ">> Enter different code",
		"text": "You try again, this time entering <b>1337</b>. Still doesn't work, but at least you get a different message this time.",
		"type": ".gif",
		"date": "9/10/2020"
	},
	84: {
		"title": ">> Next",
		"text": "The <b>telepathic mystery man</b> contacts you yet again.<br>" + spoiler_button + "<br><span style='color:#777777'>???: I see you're having some trouble cracking that safe. Let's see... so far you've tried <b>6969</b> and <b>1337</b>. Here's a helpful hint: it's probably less obvious than that.</span><br>You: What do you want now?<br><span style='color:#777777'>???: Guessing the code would take forever. A computer could do it in a matter of minutes. If you want, I could write a program to brute-force it.</span><br>You: Let me guess, you'll do it if I agree to help you?<br><span style='color:#777777'>???: As a matter of fact, no.</span><br>You: Huh?<br><span style='color:#777777'>???: You heard me right! No strings attached. It wouldn't really be in my best interests to let you die, would it?</span><br>You: Alright, fine. But why do I need to agree to it? Can't you just do it anyway?<br><span style='color:#777777'>???: Thanks. The software I'm using to track you has a rather annoying feature that requires the target to give verbal or written consent before you alter something in their dimension. That's why I had to use the pyramid scheme invitation to establish this connection. It sucks, but that's just now how it works.</span><br>You: Fine. Do it, I guess.</div>",
		"type": ".png",
		"date": "9/10/2020"
	},
	85: {
		"title": "???: Write code-cracking program",
		"text": "You open up your trusty code editor and write a short <b>program</b> to brute-force the code. The entire brute-forcing process should only take a few minutes, provided the device doesn't have a Captcha code equivalent. God you hate Captcha codes.",
		"type": ".png",
		"date": "9/12/2020"
	},
	86: {
		"title": ">> Run program",
		"text": "<i>tick</i><br><i>tock</i><br><i>tick</i><br><i>tock</i>",
		"type": ".gif",
		"date": "9/18/2020"
	},
	87: {
		"title": ">> Next",
		"text": "The program continues running smoothly, albeit slower than you expected.<br>Suddenly, the skies seem to darken for no apparent reason. <span style='color:#8e44ad'><b>magic ghost hors</b></span> comes to you, staring directly into your soul as if in distress.<br>...well, it does that all the time, but this time it seems especially distressed. Something is not right.<br>" + spoiler_button + "You: Are you doing that?<br><span style='color:#777777'>???: You mean the sky? No, why would I do that?</span><br>You: I just figured it might have something to do with your program...<br><span style='color:#777777'>???: It doesn't. I wrote the code remember?</span></div>",
		"type": ".gif",
		"date": "9/18/2020"
	},
	88: {
		"title": ">> Next",
		"text": "What on earth?<br>Wait a minute, this isn't Earth. Nevermind. Still, what is that?",
		"type": ".gif",
		"date": "9/18/2020"
	},
	89: {
		"title": ">> Next",
		"text": spoiler_button + "You: What is that?<br><span style='color:#777777'>???: What's what? Does it ever get tiring being this oblivious to everything?</span><br><span style='color:#777777'>???: ...not that I have all the answers.</span><br>You: Whatever it is, it looks an awful lot like some eldritch horror, and it's advancing right toward me. Uh, can you hurry up with the code cracking?<br><span style='color:#777777'>???: No, the device must have some sort of anti-burte-forcing mechanism.</span><br>You: Sure...</div>",
		"type": ".gif",
		"date": "9/18/2020"
	},
	90: {
		"title": ">> Next",
		"text": "As it turns out, the correct code <i>is</i> 1337, you just had to enter it twice! Clever.<br>Wait, what's this? A <b>captcha</b>?",
		"type": ".gif",
		"date": "9/28/2020"
	},
	91: {
		"title": ">> Next",
		"text": spoiler_button + "You: That eldritch horror I mentioned is drawing closer by the minute... Can you do something about this captcha?<br><span style='color:#777777'>???: Working on it!</span></div>",
		"type": ".gif",
		"date": "9/28/2020"
	},
	92: {
		"title": ">> Next",
		"text": "",
		"type": ".gif",
		"date": "9/28/2020"
	},
	93: {
		"title": ">> Next",
		"text": "The machine activates, creating a <b>mysterious portal</b>.",
		"type": ".gif",
		"date": "9/28/2020"
	},
	94: {
		"title": ">> Enter portal",
		"text": "No time to lose! You jump through the portal, leaving this horrible dimension behind. <span style='color:#8e44ad'><b>magic ghost hors</b></span> follows suit.",
		"type": ".gif",
		"date": "9/28/2020"
	},
	95: {
		"title": ">> Next",
		"text": "Ah, finally, fresh ai- OH GOD YOU'RE FALLING",
		"type": ".gif",
		"date": "9/28/2020"
	},
	96: {
		"title": ">> Next",
		"text": "You manage to grab hold of the precipice of a cliff! Unfortunately, you're now facing a hundred-meter drop.",
		"type": ".png",
		"date": "9/28/2020"
	},
	97: {
		"title": ">> Next",
		"text": "<h3><span style=\"font-family:'Comic Sans MS', 'Comic Sans'\">literal cliffhanger</span></h3>",
		"type": ".gif",
		"date": "9/28/2020"
	},
	98: {
		"title": "<h1>END OF CHAPTER I</h1>",
		"text": "",
		"type": ".gif",
		"date": "9/28/2020"
	},
	99: {
		"title": "<h1>CHAPTER II</h1>",
		"text": "",
		"type": ".png",
		"date": "9/30/2020"
	},
	100: {
		"title": ">> Pull yourself up",
		"text": "You struggle to pull yourself up to the precipice. Just a little further...",
		"type": ".png",
		"date": "9/30/2020"
	},
	101: {
		"title": ">> Next",
		"text": "<b>THEY CAN'T KEEP GETTING AWAY WITH THIS</b>",
		"type": ".gif",
		"date": "9/30/2020"
	},
	102: {
		"title": ">> Land safely",
		"text": "After a rather long fall, you land on something strangely warm and soft.",
		"type": ".png",
		"date": "9/30/2020"
	},
	103: {
		"title": ">> Next",
		"text": "Huh?",
		"type": ".png",
		"date": "9/30/2020"
	},
	104: {
		"title": ">> Next",
		"text": "It appears you've stumbled right into the middle of a group of <span style='color:#8e44ad'><b>clipart dargons</b></span>! Distinct from the common dragon, these elusive creatures are rumored to have come from an alternate dimension. They roam the deserts, staying far away from any inhabitation. Few have laid eyes on them and lived to tell the tale.",
		"type": ".png",
		"date": "9/30/2020"
	},
	105: {
		"title": ">> Next",
		"text": "Thinking quickly, you decide to...<br>Wait, what?",
		"type": ".gif",
		"date": "10/2/2020"
	},
	106: {
		"title": "<h1>BEGIN INTERMISSION II</h1><h3><i>\"Fine Art\"</i></h3>",
		"text": "You are the leader of the <b>Brotherhood of Black Hats</b>, though everyone just calls you the <b>mob boss</b>. There's no need to specify which mob, because there's only one here in Right. Thanks to you, the <span style='color:#ffffff'><b>White Hats</b></span> haven't infiltrated the town yet. You've been fighting a years-long underground war with them, but it seems you've finally made a breakthrough.<br>A while ago, you sent a new <b>recruit</b> to take out an <b>agent</b> who, to your knowledge, is a high-ranking member of the organization. You hope that eliminating them will cause the rest to disperse. However, you haven't heard back from the recruit since he left.<br>What do you do?",
		"type": ".png",
		"date": "10/2/2020"
	},
	107: {
		"title": ">> Inspect hat painting",
		"text": "You consider yourself a connoisseur of fine art, and this <b>painting</b> is proof of your impeccable taste. You bought it, and an identical copy, after a particularly profitable month of manipulating the stock exchange.",
		"type": ".png",
		"date": "10/2/2020"
	},
	108: {
		"title": ">> Inspect scroll",
		"text": "You received this pretentious-looking scroll a few days ago; it seems the government has finally caught onto your machinations. Many a table was flipped that day.",
		"type": ".png",
		"date": "10/2/2020"
	},
	109: {
		"title": ">> Next",
		"text": "Consequences be damned, you're not gonna bend your knee to the so-called emperor like those yes-men in the Board of Advisors. You'll raise a private army and fight them if it comes to that.",
		"type": ".png",
		"date": "10/2/2020"
	},
	110: {
		"title": ">> Next",
		"text": "Enough looking around, you've got your hands full! It has come to your attention that one of your <b>houses</b> was burned down recently. No culprit was found, so you've decided to take matters into your own hands. There's no time to lose, you've got an arsonist to find.",
		"type": ".png",
		"date": "10/2/2020"
	},
	111: {
		"title": ">> Overthrow the emperor",
		"text": "You've made an elaborate and foolproof plan to overthrow the emperor involving alien technology, dimensional hopping, and time travel. Unfortunately, it hinges on some <b>top-secret documents</b> located inside a safe in your house. The one that burned down.",
		"type": ".png",
		"date": "10/6/2020"
	},
	112: {
		"title": ">> Hire private investigator",
		"text": "You take a stroll through your <b>private art gallery</b> as you contemplate your next move. Through various means both legal and illegal, you have acquired an extensive collection of <b>fine art</b> by some of the most renowned painters in the world. Some of them are hundreds of years old, dating back to before the founding of the Empire. In addition to classical art, the gallery includes some paintings specially commissioned by you, like this baroque-style <b>portrait</b>. But your interests aren't limited to paintings! Downstairs is the <b>Hall of Sculptures</b>, featuring countless-<br>Oh, yeah, the investigation. You nearly forgot! You just really like art. And hats. Especially art with hats.<br>You could hire a <b>private investigator</b> like in the past, but you don't want anyone to get their hands on your <b>top secret documents</b>. No, you'd probably be better off going there yourself. You bought the house for a bargain price several years ago, but you never really visit it except to hide confidential documents.",
		"type": ".png",
		"date": "10/11/2020"
	},
	113: {
		"title": ">> Visit crime scene",
		"text": "You begin the journey to your house under the sweltering desert sun.",
		"type": ".gif",
		"date": "10/11/2020"
	},
	114: {
		"title": ">> Next",
		"text": "This is outrageous! Your house is completely ruined, and it looks like your <b>really awesome car</b> was flattened by some rubble as the building collapsed.",
		"type": ".png",
		"date": "10/11/2020"
	},
	115: {
		"title": ">> Mourn car",
		"text": "You have a moment of silence for your trusty car.",
		"type": ".png",
		"date": "10/13/2020"
	},
	116: {
		"title": ">> Attempt to repair car",
		"text": "Wait, not all hope is lost! You completely forgot about the <b>wrench</b> in your inventory.",
		"type": ".gif",
		"date": "10/13/2020"
	},
	117: {
		"title": ">> Next",
		"text": "...yeah, this ain't gonna work.",
		"type": ".png",
		"date": "10/13/2020"
	},
	118: {
		"title": ">> Smack car with hammer",
		"text": "Your plan to fix the car using nothing but a wrench has failed miserably before you could even put it in motion. What about a <b>hammer</b>? Yes, let's try that, shall we? Only problem is, you don't have a hammer on you at the moment. Maybe there's one in the house. Well, what's left of it.",
		"type": ".gif",
		"date": "10/14/2020"
	},
	119: {
		"title": ">> Search house",
		"text": "You'll make sure that whoever did this is going to pay. At least the safe, and by extension your documents, seem unharmed.",
		"type": ".png",
		"date": "10/14/2020"
	},
	120: {
		"title": ">> Open safe",
		"text": "Hmm, what was the <b>combination</b> again?",
		"type": ".png",
		"date": "10/14/2020"
	},
	121: {
		"title": ">> Next",
		"text": "The safe swings open to reveal-<br>What, were you expecting to <i>see</i> the combination? I'm afraid you'll be sorely disappointed, because why would I give out mission-critical information? You weren't planning on sabotaging the boss' plan, were you? ... Were you?<br>The safe swings open to reveal a stack of <b>top-secret documents</b>, and conveniently, a <b>hammer</b>.",
		"type": ".png",
		"date": "10/15/2020"
	},
	122: {
		"title": ">> Pick up hammer",
		"text": "Oh yes.",
		"type": ".png",
		"date": "10/15/2020"
	},
	123: {
		"title": ">> Add hammer to inventory",
		"text": "You pick up the <b>hammer</b> and add it to your inventory, replacing and ejecting the <b>wrench</b>.",
		"type": ".gif",
		"date": "11/25/2020"
	},
	124: {
		"title": ">> Search house",
		"text": "Before you continue your quest to fix the car, you decide to search around the house. You start by sifting through the rubble in search of anything salvageable.<br>Hold on, what's this?",
		"type": ".png",
		"date": "11/25/2020"
	},
	125: {
		"title": ">> Next",
		"text": "No, it can't be... this painting cost a fortune! This is outrageous!",
		"type": ".png",
		"date": "11/25/2020"
	},
	126: {
		"title": ">> Fix painting",
		"text": "You put the <b>hammer</b> to good use by nailing a wooden board to the back of the ruined painting. You then continue your art restoration attempt by drawing back the rest of the painting with some <b>crayons</b>.<br>It's beautiful... Truly a masterpiece for the ages.",
		"type": ".png",
		"date": "12/9/2020"
	},
	127: {
		"title": ">> Next",
		"text": "Ah, who are you kidding, this is garbage. You take out your frustration by stabbing something. Which in this case happens to be the painting.",
		"type": ".gif",
		"date": "12/9/2020"
	},
	128: {
		"title": ">> Next",
		"text": "You toss the now irreparably ruined painting across the room.",
		"type": ".gif",
		"date": "12/9/2020"
	},
	129: {
		"title": ">> Return to car",
		"text": "Now that you've obtained a <b>hammer</b>, you return to your car. Time to get down to business.",
		"type": ".png",
		"date": "12/10/2020"
	},
	130: {
		"title": ">> Next",
		"text": "Wha-",
		"type": ".gif",
		"date": "12/10/2020"
	},
	131: {
		"title": ">> Wake up",
		"text": "You wake up and find yourself in... your <b>private art gallery</b>? But everything is so hazy... What happened?",
		"type": ".png",
		"date": "12/16/2020"
	},
	132: {
		"title": ">> Next",
		"text": "You are approached by a <b>painting</b>. It appears to have been damaged and then poorly repaired by what you can only guess was a small child. It looks familiar, but you can't quite recall why.",
		"type": ".gif",
		"date": "12/16/2020"
	},
	133: {
		"title": ">> Next",
		"text": "",
		"type": ".gif",
		"date": "12/16/2020"
	},
	134: {
		"title": ">> Go upstairs",
		"text": "No, this can't be happening... What did you do to deserve this!?<br>Other than the murder and organized crime, of course.",
		"type": ".png",
		"date": "12/16/2020"
	},
	135: {
		"title": ">> Go outside",
		"text": "NOOOOOOOOO",
		"type": ".png",
		"date": "12/16/2020"
	},
	136: {
		"title": ">> Next",
		"text": "Utterly defeated, you sit down on the sand and contemplate your existence. You can't recall what happened before you were pulled into this nightmarish realm. Is this some kind of punishment? Are you ever going to make it out alive?",
		"type": ".png",
		"date": "12/28/2020"
	},
	137: {
		"title": ">> Next",
		"text": "Your melodramatic thoughts are interrupted by... oh no.",
		"type": ".png",
		"date": "12/28/2020"
	},
	138: {
		"title": ">> Look up",
		"text": "<i>Dear god.</i>",
		"type": ".png",
		"date": "12/28/2020"
	},
	139: {
		"title": ">> Next",
		"text": "The <b>poorly drawn abomination</b> simply holds out his arm and offers you a <b>mysterious note</b>.",
		"type": ".png",
		"date": "12/29/2020"
	},
	140: {
		"title": ">> Stab poorly drawn abomination",
		"text": "You don't trust this guy. You prepare to stab him, but you can't seem to access your inventory. Instead, you decide to take the note. As you reach out to grab it, everything goes white.",
		"type": ".gif",
		"date": "12/29/2020"
	},
	141: {
		"title": ">> Wake up",
		"text": "You're back! Thank god.<br>Wait, what's this?",
		"type": ".gif",
		"date": "12/29/2020"
	},
	142: {
		"title": ">> Read note",
		"text": "<b>13 Main Street, Left</b>? This address sounds oddly familiar. You guess someone wants to meet you there... but what's this talk of a <b>prisoner</b>?<br>Well, it can't hurt to investigate. You'll take some bodyguards with you in case it's a <span style='color:#ffffff'><b>White Hat</b></span> trap.<br>Travelling there should be a breeze with your car!",
		"type": ".png",
		"date": "12/29/2020"
	},
	143: {
		"title": "<h1>END INTERMISSION</h1>",
		"text": "...maybe not.",
		"type": ".png",
		"date": "12/29/2020"
	},
	144: {
		"title": ">> Continue",
		"text": "",
		"type": ".png",
		"date": "1/30/2021"
	},
	145: {
		"title": ">> Next",
		"text": "Oh yeah, apparently this guy still exists. With the sudden <b>Black Hat</b> intermission out of the way, we can finally continue Chapter II.<br>You have just escaped a <b>mysterious alien dimension</b>. However, you've hardly had any time to catch a breather, because you've landed right into the midst of a group of <span style='color:#8e44ad'><b>clipart dargons</b></span>!",
		"type": ".png",
		"date": "1/30/2021"
	},
	146: {
		"title": ">> Talk to the dragon",
		"text": "You're guessing it's a long way to <b>Left</b>. Maybe one of these drago- uh, I nean <span style='color:#8e44ad'><b>dargons</b></span> is friendly enough to fly you there? You walk up to the green one and shout at it.",
		"type": ".png",
		"date": "2/2/2021"
	},
	147: {
		"title": ">> Next",
		"text": "You narrowly avoid being incinerated. Clearly, this one isn't too happy with your presence.",
		"type": ".gif",
		"date": "2/2/2021"
	},
	148: {
		"title": ">> Next",
		"text": "You quickly retreat to a safer location, where you're contacted by... oh great, it's this guy again.<br>" + spoiler_button + "<br><span style='color:#777777'>???: Woah, cutting it close there. What are you doing?</span><br>You: I thought I'd be able to fly one of these things. Guess not.<br><span style='color:#777777'>???: Uh, do you even know where you're going?</span><br>You: I'm heading to Left to finally file a restraining order against the <b>alien space bats</b>. Assuming the bank isn't a front for the mob, of course.<br><span style='color:#777777'>???: I need your help with something first, remember? And what about the <b>Black Hats</b>? I doubt they'd be too pleased if you gave up in the middle of a mission.</span><br>You: Thanks to the money you gave me I should be able to get the hell out of this place and disappear before they can find me.<br><span style='color:#777777'>???: Look, you're going to Left anyway. All I need for you to do is pay someone a quick visit. That's it! Do that, and I'll give you your money back.</span><br>You: Give me my- what?</div>",
		"type": ".png",
		"date": "2/2/2021"
	},
	149: {
		"title": ">> Check bank account",
		"text": spoiler_button + "<br>You: Hey, that's not... Ah, fine, I'll do it!<br><span style='color:#777777'>???: Great, I'll mark the location on your map.</span><br>You: Map?<br><span style='color:#777777'>???: Yeah, the map. You didn't know about it?</div>",
		"type": ".png",
		"date": "2/2/2021"
	},
	150: {
		"title": ">> [I] Open map",
		"text": "<a href='interactive/map/index.html' target='_blank' rel='noopener noreferrer'>Click to open map</a>",
		"type": ".png",
		"date": "2/2/2021"
	},
	151: {
		"title": ">> Next",
		"text": spoiler_button + "<br>You: Looks like I've been heading in the wrong direction... I'm definitely not going to make it to Left on foot.<br><span style='color:#777777'>???: You mentioned wanting to ride one of those dragons?</span><br>You: That was before I was nearly burned alive by one of them. You think it's possible?<br><span style='color:#777777'>???: Sure, assuming you've got the right skill perks. Have you checked your skill tree lately?</span><br>You: Uh...<br><span style='color:#777777'>???: Don't tell me you didn't know about the skill tree.</span><br>You: ...<br><span style='color:#777777'>???: You've got to be kidding me.</span></div>",
		"type": ".gif",
		"date": "2/4/2021"
	},
	152: {
		"title": ">> Open skill tree",
		"text": "This would have been useful in the <b>alien dimension</b>...",
		"type": ".png",
		"date": "2/4/2021"
	},
	153: {
		"title": ">> Next",
		"text": "You search for any skill categories relating to <b>dragons</b>, and immediately find over 300,000 of them. You scroll down to the <b>Dragon Riding</b> section, choose the <span style='color:#8e44ad'><b>clipart dargon</b></span> species and obtain the first skill perk.",
		"type": ".png",
		"date": "2/6/2021"
	},
	154: {
		"title": ">> Next",
		"text": "Riding a dragon is no use if you can't tell it where to go! For your next skill point, you choose the first perk in the <b>Dragon Language</b> tree.",
		"type": ".png",
		"date": "2/6/2021"
	},
	155: {
		"title": ">> Speak to dragon",
		"text": "You decide to save your last skill point. Could come in handy in a pinch, after all.<br>With your new-found abilities, you command the nearest <span style='color:#8e44ad'><b>dargon</b></span> to carry you to <b>Left</b>.",
		"type": ".png",
		"date": "5/21/2021"
	},
	156: {
		"title": ">> Next",
		"text": "Slowly, the <span style='color:#8e44ad'><b>dargon</b></span> turns to face you. The two of you have a stare-off for what seems like an eternity.<br>You consider making a break for it, but quickly realize there's no running from this situation.",
		"type": ".png",
		"date": "5/21/2021"
	},
	157: {
		"title": ">> Next",
		"text": "It appears your fears were unfounded.",
		"type": ".gif",
		"date": "5/21/2021"
	},
	158: {
		"title": ">> Next",
		"text": spoiler_button + "<br>You: So I've been wondering, how did you find me in the first place? And why did you contact me?<br><span style='color:#777777'>???: Well, like I said, I need your help with something... I've been told there's some sort of magical object hidden somewhere in your dimension. Obviously I can't travel there myself, so I had to get someone else to do it.</span><br>You: What kind of magical object are we talking about here?<br><span style='color:#777777'>???: I'm... not entirely sure. I believe it's in the shape of an <b>orb</b>.</span><br>You: That's not a lot to go off of.<br><span style='color:#777777'>???: I've marked its exact location on your map. You'd have to be braindead to not be able to find it. So I'm not too thrilled about your chances.</span><br>",
		"type": ".gif",
		"date": "5/21/2021"
	},
	159: {
		"title": ">> Next",
		"text": spoiler_button + "<br>You: Sure. But why do you need me in particular? Why not someone who, y'know, lives in Left?<br><span style='color:#777777'>???: The simple answer is that contacting someone across dimensions is pretty damn hard, even with modern tech. The <b>alien dimension</b> you escaped is something called an <b>intermediary dimension</b>, somewhere where spacetime is thinner than usual, therefore it's easier to establish a transdimensional link. As soon as I found out someone had entered one of these dimensions, I knew I'd be able to contact them. But I'd rather not bore you. We can't have you jumping off that dragon to escape my inane metaphysical ramblings.</span><br>You: Makes sense, I guess. Hold on...<br><span style='color:#777777'>???: What?</span><br>You: Earlier, you mentioned those <b>Black Hat</b> guys. How do you know about them if you've only been tracking me since I entered the <b>alien dimension</b>?<br><span style='color:#777777'>???: Uh... alright, you got me. What I said still applies, but there <i>is</i> a reason I contacted you in particular. It has something to do with time travel, a corrupt megacorporation, and a crazy guy on the internet, so I'm not really going to go into detail. Just focus on getting to Left, and I'll stop bothering you.</span><br>You: Hey, you can't just...<br>You: Are you still there?<br>You: ...<br>You: Thank god.</div>",
		"type": ".png",
		"date": "5/21/2021"
	},
	160: {
		"title": ">> Check map",
		"text": "Wait a minute... it looks like you've overshot. You're beginning to regret not investing your last point further into the <b>Dragon Language</b> tree.",
		"type": ".png",
		"date": "5/21/2021"
	},
	161: {
		"title": ">> Descend",
		"text": "",
		"type": ".gif",
		"date": "5/21/2021"
	},
	162: {
		"title": ">> Next",
		"text": "You arrive near a small desert town. According to your map, this is <b>Bahlarat</b>. Before attempting another long and exhausting flight to Left, you decide to stretch your legs a bit and explore.",
		"type": ".png",
		"date": "5/21/2021"
	},
	163: {
		"title": ">> Explore",
		"text": "You come across a large statue of a <b>dragon</b>, of the common variety. It's terrifyingly realistic, and you feel as if it could come alive at any moment.",
		"type": ".png",
		"date": "5/21/2021"
	},
	164: {
		"title": ">> Look around",
		"text": "",
		"type": ".gif",
		"date": "5/21/2021"
	},
	165: {
		"title": ">> Next",
		"text": "",
		"type": ".png",
		"date": "5/21/2021"
	},
	166: {
		"title": ">> Enter shop",
		"text": "You enter the <b>shop</b>. Lining the wall are shelves with strange, <b>ancient artifacts</b>. Behind the counter is the first person you've seen in this town.<br>" + spoiler_button + "<br><span style='color:#755656'>Merchant: Welcome to Bahlarat Artifacts! Feel free to browse our collection of all things mysterious and arcane.</span></div>",
		"type": ".png",
		"date": "5/21/2021"
	},
	167: {
		"title": ">> Talk to merchant",
		"text": "The <b>merchant</b> presents to you several <b>mysterious objects</b>, including <b>Occam's Razor</b>, <b>Roko's Basilisk</b>, and the <b>literal Declaration of Independence</b>.",
		"type": ".png",
		"date": "5/21/2021"
	},
	168: {
		"title": ">> Next",
		"text": "As much as you'd like to buy all of these, you don't have any money! You explain your predicament to the merchant.<br>" + spoiler_button + "<br>You: These look fascinating, but I'm all out of money.<br><span style='color:#755656'>Merchant: Hmm... perhaps you would be willing to part with <b>Chekhov's Gun</b>? I have been looking for it for a very long time.</span><br>You: How do you know about that?<br>You: You know what, nevermind. Nothing in this dimension makes sense, so I'm not even going to bother.</div>",
		"type": ".png",
		"date": "5/21/2021"
	},
	169: {
		"title": ">> Sell Chekhov's Gun",
		"text": "You reluctantly agree to sell the <span style='color:#2ecc71'><b>gun</b></span>. It's practically useless anyway.",
		"type": ".gif",
		"date": "5/21/2021"
	},
	170: {
		"title": ">> Next",
		"text": "The merchant gives you a hefty sum of money in exchange for the <span style='color:#2ecc71'><b>gun</b></span>: $10,000.<br><span style='color:#2ecc71'><b>Chekhov's Gun</b></span> will never be seen again and will have absolutely no plot significance going forward.",
		"type": ".png",
		"date": "5/21/2021"
	},
	171: {
		"title": ">> Buy Declaration of Independence",
		"text": "You decide to buy the <b>Declaration of Independence</b>. You have no idea why it's significant, or what the hell a 'United States of America' is, but you're just sure there's a secret message hidden somewhere on it.<br>You thank the merchant and go on your way.",
		"type": ".png",
		"date": "5/21/2021"
	},
	172: {
		"title": ">> Next",
		"text": "If the secret message is written in invisible ink, you should be able to reveal it with some <b>lemon juice</b>. You explore and find a <b>marketplace</b>. Deserted, like the rest of this town.",
		"type": ".png",
		"date": "5/21/2021"
	},
	173: {
		"title": ">> Look for lemon",
		"text": "Aha! Here we go.<br>Hmm, these lemons look fresh. The inhabitants of this town can't have been gone for long.",
		"type": ".png",
		"date": "5/21/2021"
	},
	174: {
		"title": ">> Look for secret message",
		"text": "You carefully squeeze a lemon slice, coating the Declaration with juice.",
		"type": ".gif",
		"date": "5/21/2021"
	},
	175: {
		"title": ">> Next",
		"text": "There is no secret message, and you have just ruined a priceless 250-year-old document. Good job!",
		"type": ".png",
		"date": "5/21/2021"
	},
	176: {
		"title": ">> Next",
		"text": "You throw the now irreparably damaged Declaration across the marketplace.",
		"type": ".gif",
		"date": "5/21/2021"
	},
	177: {
		"title": ">> Return to shop",
		"text": "",
		"type": ".png",
		"date": "5/22/2021"
	},
	178: {
		"title": ">> Demand a refund",
		"text": "You slam the door open and barge into the shop to demand a refund on the <b>Declaration</b>. You were expecting to discover a hidden message that would lead you to some priceless treasure! Alas, that was not the case, and now you want your money back.<br>Hold on, where's the merchant? This entire place is cleared out.<br>Looks like you won't be getting your money back today.",
		"type": ".png",
		"date": "5/22/2021"
	},
	179: {
		"title": ">> Return to dragon",
		"text": "This was a colossal waste of time.<br>You return to the outskirts of the town, where the <span style='color:#8e44ad'><b>dargon</b></span> has been patiently awaiting your return.",
		"type": ".png",
		"date": "5/22/2021"
	},
	180: {
		"title": ">> Spend last skill point",
		"text": "You're ready to get this over with. Not wanting to risk another deviation from the plan, you invest your last skill point into the <b>Dragon Language</b> tree. This should allow you to issue more specific commands to the <span style='color:#8e44ad'><b>dargon</b></span>.",
		"type": ".png",
		"date": "5/22/2021"
	},
	181: {
		"title": ">> Ascend",
		"text": "",
		"type": ".gif",
		"date": "5/22/2021"
	},
	182: {
		"title": ">> Next",
		"text": "Day rapidly gives way to night as you continue your journey.",
		"type": ".gif",
		"date": "5/22/2021"
	},
	183: {
		"title": ">> [S] Next",
		"text": "Weaving through the cool air, you gaze over the endless wastes passing before you. Devoid of life, and utterly still. The moonlight does little to resist the enveloping darkness. This desert, the very embodiment of desolation and untouched by the flow of time, stretches beyond the horizon, broken only by a faint cluster of lights. This settlement has been your objective for the past one hundred and sixty-nine pages. You don't know what a page is. Or why you would be in one. But it feels about right.<br><br>Though only a day has passed since you started your journey, you had begun to think of reaching this point as some insurmountable task, amplified by every impediment and setback you suffered. But now, as you lay your eyes on this town, you feel something. Is it relief, for finally arriving at your destination? Frustration, that such an seemingly simple task had taken this long? Perhaps both. But above all, you feel small. As if you were a pawn in the game of some unseen puppeteer.<br><br>Welcome to <b>Left</b>.<br><br>You have a feeling it's going to be a long night.",
		"type": ".mp4",
		"date": "5/22/2021"
	}
}