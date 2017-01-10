function Player(progress,duration,bar,music,currentTime){
	this.progress = progress;
	this.music = music;
	this.duration = duration;
	this.bar = bar;
	this.currentTime = currentTime;
	duration.text(this.getUserTime(music.duration));
	progress.on('click',(e)=>{
		var offset = e.offsetX;
		var time = this.getTime(offset);
		this.music.audio.currentTime = time;
		var procent = time / music.duration * 100;
		bar.css({width: procent+'%'})
		currentTime.css({display: 'none'})
	})
	progress.on('mouseenter',(e)=>{
		var offset = e.offsetX;
		var offsetElem = offset - currentTime.width() / 2;
		var time = this.getTime(offset);
		currentTime.text(this.getUserTime(time));
		currentTime.css({left: offsetElem+'px'})
		currentTime.css({display: 'block'})
	});
	progress.on('mouseleave',()=>{
		currentTime.css({display: 'none'})
	})
	progress.on('mousemove',(e)=>{
		var offset = e.offsetX;
		var offsetElem = offset - currentTime.width() / 2;
		var width = progress.width();
		var time = this.getTime(offset);
		currentTime.text(this.getUserTime(time))
		currentTime.css({left: offsetElem+'px'})
	})
}
var PlayerPrototype = {
	playMusic: function(){
		this.timer = setInterval(this.showTime.bind(this),1000);
		this.music.audio.play();
		this.duration.text(this.getUserTime(this.music.audio.currentTime));
	},
	showTime: function(){
		var time = this.music.duration - this.music.audio.currentTime;
		var procent = this.music.audio.currentTime / this.music.duration * 100;
		this.duration.text(this.getUserTime(time));
		this.bar.css({width: procent+'%'})
	},
	pauseMusic: function(){
		clearInterval(this.timer);
		this.music.audio.pause();
	},
	getTime: function(offset){
		var width = this.progress.width();
		var time = offset * this.music.audio.duration / width;
		return time;
	},
	getUserTime: function(time){
		time = Math.round(time);
		var min = Math.round(time / 60);
		var sec = time % 60;
		if(sec < 10)
			sec = '0'+sec.toString()
		return min+':'+sec;
	},
	endPlay: function(){
		clearInterval(this.timer);
		this.music.audio.currentTime = 0;
		this.duration.text(this.getUserTime(this.music.duration))
		this.bar.css({width: '0%'})
	}
};
Player.prototype = PlayerPrototype;

export default Player;