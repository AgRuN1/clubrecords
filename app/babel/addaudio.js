require('../stylus/addaudio.styl');
import Player from './player.js';
var player;
var music = {
	name: 'Unknown name',
	type: 'Unknown type',
	duration: '0',
	file: '',
	author: ''
}
function playMusic(){
	$('.audio-test__control_play i')
		.removeClass('fa-play')
		.addClass('fa-pause');
	$('.audio-test__control_play')
		.removeClass('audio-test__control_play')
		.addClass('audio-test__control_pause');
	$('.audio-test__control_pause').on('click',pauseMusic)
	player.playMusic();
}
function pauseMusic(){
	$('.audio-test__control_pause i')
		.removeClass('fa-pause')
		.addClass('fa-play');
	$('.audio-test__control_pause')
		.removeClass('audio-test__control_pause')
		.addClass('audio-test__control_play');
	$('.audio-test__control_play').on('click',playMusic)
	player.pauseMusic();
}
function endPlay(){
	player.endPlay();
	$('.audio-test__control_pause i')
		.removeClass('fa-pause')
		.addClass('fa-play');
	$('.audio-test__control_pause')
		.removeClass('audio-test__control_pause')
		.addClass('audio-test__control_play');
	$('.audio-test__control_play').on('click',playMusic)
}
function errorLoad(e){
	$('.error')
	.append('<aside class="alert alert-danger alert-error"><strong>Что-то пошло не так...</strong></aside>')
}
function loadData(){
	$('.audio-test__name').val(music.name)
	$('.audio-test').css({display: 'block'})
	$('.audio-upload__btn').css({display:'none'})
	player = new Player(
		$('.progress-audio'),
		$('.audio-test__duration'),
		$('.bar-audio'),
		music,
		$('.audio-test__current-time')
	)
}
function loadMeta(e){
	var duration = Math.round(e.target.duration);
	music.duration = duration;
}
function getFile(f){
	$('.audio-test').css({display: 'none'})
	$('.alert-error').remove()
	if(f.files.length != 0){
		if(/^audio\//.test(f.files[0].type)){
			var reader = new FileReader()
			reader.onload = (e)=>{
				var audio = new Audio();
				audio.onerror = errorLoad;
				audio.onloadedmetadata = loadMeta;
				audio.onloadeddata = loadData;
				audio.onended = endPlay;
				audio.src = e.target.result;
				music.audio = audio
			}
			var name = f.files[0].name;
			name = name.replace(/.\w+$/,'')
			music.name = name
			music.type = f.files[0].type
			reader.readAsDataURL(f.files[0])
		}else{
			$('.error')
			.append('<aside class="alert alert-danger alert-error"><strong>Неподдерживаемый тип файла</strong></aside>')
		}
	}
}
$(()=>{
	$('.audio-upload__file').on('change',(e)=>{
		getFile(e.target)
	})
	$('.audio-upload__btn').on('click',()=>{
		$('.audio-upload__file').click()
	})
	$('.audio-test__cancel').on('click',()=>{
		$('.audio-test').css({display: 'none'})
		$('.audio-upload__btn').css({display:'block'})
		pauseMusic()
		$('.bar-audio').css({width: '0%'})
	})
	$('.audio-test__control_play').on('click',playMusic)
	document.querySelector('.audio-upload__btn').addEventListener('dragenter', ()=>{
		$('.audio-upload__btn').text('Киньте сюда файл');
		$('.audio-upload__btn').css({fontSize: '1.5em'})
	})
	document.querySelector('.audio-upload__btn').addEventListener('dragover', (e)=>{
		e.preventDefault();
	})
	document.querySelector('.audio-upload__btn').addEventListener('dragleave',()=>{
		$('.audio-upload__btn').text('Выбрать файл');
		$('.audio-upload__btn').css({fontSize: '1em'})
	})
	document.querySelector('.audio-upload__btn').addEventListener('drop',(e)=>{
		e.preventDefault();
		$('.audio-upload__btn').text('Выбрать файл');
		$('.audio-upload__btn').css({fontSize: '1em'});
		getFile(e.dataTransfer);
	})
});
