// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
function Color(Query, Links)
{
	var RRV = RankResultValues(Query, Links);
	var MVAR = ColorRank(RRV, Links);
	return MVAR;
}

function MatchingWords(s1, s2)
{
	var w1;
	var w2 = s2.trim().split(" ");
	var Rank = 0;
	if (s1.includes(" "))
	{
		w1 = s1.trim().split(" ");
		for (var word1 = 0; word1 < w1.length; word1++)
		{
			for (var word2 = 0; word2 < w2.length; word2++)
			{
				if (s1.toLowerCase() == s2.toLowerCase()) Rank += 2;
				else if (w1[word1].toLowerCase() == w2[word2].toLowerCase() && w2.length == 1) Rank += 2;
				else if (w1[word1].toLowerCase() == w2[word2].toLowerCase()) Rank++;
			}
		}
	}

	else if (s1.includes(" ") == false)
	{
		w1 = s1.trim();
		for (var word2 = 0; word2 < w2.length; word2++)
		{
			if (s1.toLowerCase() == s2.toLowerCase()) Rank += 2;
			else if (w1.toLowerCase() == w2[word2].toLowerCase() && w2.length == 1) Rank += 2;
			else if (w1.toLowerCase() == w2[word2].toLowerCase()) Rank++;
		}
	}

	return Rank;
}

function RankResultValues(Query, Links)
{
	var Rank_values = [];
	for (var Link = 0; Link < Links.length; Link++)
	{
		Rank_values.push(MatchingWords(Query, Links[Link]));
	}

	return Rank_values;
}

function ColorRank(Values, Results)
{
	var MergedList = [];
	for (var i = 0; i < Values.length; i++)
	{
		MergedList.push([Values[i], Results[i]]);
	}

	MergedList.sort().reverse();
	return MergedList;
}

function ColorRender(ResultLinks)
{
	var RRL = document.getElementById("RankedResultList");
	RRL.appendChild(ResultLinks);
}
