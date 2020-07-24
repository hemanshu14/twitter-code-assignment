import {Component, Output, EventEmitter, Input, OnInit} from "@angular/core";

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})

export default class LeftNavComponent implements OnInit{
  @Input() count: Number;
  tempData: Array<any> = [];
  @Input() perPageData: Array<any>;
  @Input() parentData: Array<any>;
  @Output() tweetsDataEmitter = new EventEmitter();
  @Output() searchEmitter = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    window.localStorage.setItem('data', JSON.stringify(this.perPageData));
  }

  searchText(event){
    this.searchEmitter.emit(event.target.value);
  }

  calculateNumberOfPosts(event){
    if(event.target.value === '0' || event.target.value > this.parentData.length){
      alert('Value is incorrect');
    }
    else {
      const size = event.target.value;
      this.tempData = this.parentData.slice(0, size).map(dat => ({
        ...dat.text && {text: dat.text},
        ...dat.user.screen_name && {screen_name: dat.user.screen_name},
        ...dat.user.name && {name: dat.user.name},
        ...dat.retweet_count && {retweet_count: dat.retweet_count}
      }))
      this.tweetsDataEmitter.emit(this.tempData);
    }

  }

  handleChange(event){
    const radio = event.target.value;
    let data =  this.tempData.length > 0 ? this.tempData : this.perPageData;
    if(radio === 'rtweets'){
      let filteredData = data.filter(d => d.retweet_count > 0);
      this.tweetsDataEmitter.emit(filteredData);
    }
    else{
      if(this.tempData.length > 0){
        window.localStorage.setItem('data', JSON.stringify(this.tempData));
      }
      let originalData = JSON.parse(window.localStorage.getItem('data'));
      this.tweetsDataEmitter.emit(originalData);
    }

  }

}
