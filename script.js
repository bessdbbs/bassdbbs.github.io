let n,f,w,s = 1,c,div;

function getRandonInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function position(){
n=getRandonInt(0,5);

if (n === 1) a.setAttribute('style','background-position: top;');
else if (n === 2) a.setAttribute('style','background-position: left;');
else if (n === 3) a.setAttribute('style','background-position: bottom;');
else if (n === 4) a.setAttribute('style','background-position: right;');
else if (n === 5) a.setAttribute('style','background-position: center;');
}
function photo(){
    f=getRandonInt(0,12);
if (f === 0) a.setAttribute('style','background-image:url(5A55933D4B218F27307D234E9ECE68FD.800.JPG);');
else if (f === 1) a.setAttribute('style','background-image:url0BD2870A7B0FAF3EB5594888268D2BCF.800.jpg);');
else if (f === 2) a.setAttribute('style','background-image:url(IMG_20191013_121159.jpg);');
else if (f === 3) a.setAttribute('style','background-image:url(20191003_180657.jpg);');
else if (f === 4) a.setAttribute('style','background-image:url(IMG-20191022-WA0058.jpg);');
else if (f === 5) a.setAttribute('style','background-image:url(IMG_20191024_190654.jpg);');
else if (f === 6) a.setAttribute('style','background-image:url(44a9e4f0-283c-454f-bd01-01b28a3a451c.jpg);');
else if (f === 7) a.setAttribute('style','background-image:url(2359dd72-6af6-4e57-892f-5be9a8c250b1.jpg);');
else if (f === 8) a.setAttribute('style','background-image:url(dd786f0b-f642-4ecd-bb19-3c508ef0b01f.jpg);');
else if (f === 9) a.setAttribute('style','background-image:url(IMG_20190306_215740.jpg);');
else if (f === 10) a.setAttribute('style','background-image:url(IMG_20190126_204016.jpg);');
else if (f === 11) a.setAttribute('style','background-image:url(IMG_20190106_132929.jpg);');
else if (f === 12) a.setAttribute('style','background-image:url(IMG_20180811_070014.jpg);');
}
function rotate(){
    w=getRandonInt(0,3600);
if (w % 2 === 0){
a.setAttribute('style', 'transform:rotateY(-'+ w +'deg);');
b.setAttribute('style','color: silver;text-shadow: -'+w/360+'px -'+w/360+'px '+w/360+'px gold;');
}
else if (w % 2 === 1){
    a.setAttribute('style', 'transform:rotateX('+ w +'deg);');
    b.setAttribute('style','color: gold;text-shadow:'+w/360+'px '+w/360+'px '+w/360+'px silver;');
}
}
function text(){
    div = document.createElement('div');
    div.className = 'alert';

    if (s === 1) c = '<p>я рад</p><p>каждому</p><p>мигу</p><p>проведённому</p><p>с тобой</p>';
    else if (s === 2) c = '<p>я</p><p>схожу</p><p>от тебя</p><p>с ума</p>';
    else if (s === 3) c = '<p>я</p><p>незнаю</p><p>как</p><p>без тебя</p><p>жить</p>';
    else if (s > 3) {s = 0;c = '<p>❤</p>';div.setAttribute('style','color:red;font-size:1800%;');}
    div.innerHTML = c;
    document.body.append(div);
    setTimeout(() => div.remove(), 2000);
    s++;
}
setInterval(position, 2000);
setInterval(photo, 2500);
setInterval(rotate, 3000);
setInterval(text, 4000);
