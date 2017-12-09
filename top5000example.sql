
SELECT artist, count(artist) as c
from top5000
group by artist
having  c >= 2
order by c