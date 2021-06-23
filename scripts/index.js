function RandomBackgroundSelector()
{
	var BGClass;
	var RanNum = 0;
	var BGCycle = [];
	for (var i = 1; i < 11; i++)
	{
		if (i >= 11) break;
		BGCycle.push("Unsplash" + i.toString() + ".jpg");
	}

	RanNum = Math.floor(Math.random() * BGCycle.length);
	
	console.log("Test");
	document.body.style.backgroundImage = 'url("../res/Backgrounds/' + BGCycle[RanNum] + '")';
	console.log("Test2");
}
