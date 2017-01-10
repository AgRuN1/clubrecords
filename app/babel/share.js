window.Share = {
  	vkontakte: function(ptitle, pimg,description) { 
  		var url  = 'http://vk.com/share.php?';
  		url += 'url='          + location.toString();
  		url += '&title='       + encodeURIComponent(ptitle);
      url += '&description='  + encodeURIComponent(description)
  		// url += '&image='       + encodeURIComponent(pimg);
  		url += '&noparse=true';
  		this.popup(url);
  	},
  	odnoklassniki: function(purl, text) {
  		var url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
  		url += '&st.comments=' + encodeURIComponent(text);
  		url += '&st._surl='    + location.toString();;
  		this.popup(url);
  	},
  	facebook: function(ptitle,text,pimg) {
  		var url  = 'http://www.facebook.com/sharer.php?';
      url += 'src=pluso';
      url += '&u='       + location.toString();
  		url += '&t='     + encodeURIComponent(ptitle);
  		this.popup(url); 
  	},
  	twitter: function(ptitle) {
  		var url  = 'http://twitter.com/share?';
  		url += 'text='      + encodeURIComponent(ptitle);
  		url += '&url='      + location.toString();
  		url += '&counturl=' + location.toString();
  		this.popup(url);
  	},
    google: function(title){
      var url = 'https://plus.google.com/share?';
      url += 'url=' + 'https://githowto.com/ru';
      url += 'title'
      this.popup(url);
    },
    popup: function(url) {
  		window.open(url,'','toolbar=0,status=0,width=626,height=436');
  	}
};
export default Share