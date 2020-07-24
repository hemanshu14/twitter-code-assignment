import {Component, Input, OnInit} from "@angular/core";
import ReadJsonService from "../service/read-json.service";


@Component({
  selector: 'twitter-component',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})

export default class TwitterComponent implements OnInit{
  count: Number = 5;
  tweetsData: Array<any> = [];
  wholeData: Array<any> = [];
  searchField: String = '';
  constructor(private readJSONService: ReadJsonService) {
  }
  ngOnInit() {
    this.readJSONService.getJSON().subscribe(data => {
      this.wholeData = data;
      this.tweetsData = data.slice(0, this.count).map(dat => ({
        ...dat.text && {text: dat.text},
        ...dat.user.screen_name && {screen_name: dat.user.screen_name},
        ...dat.user.name && {name: dat.user.name},
        ...dat.retweet_count && {retweet_count: dat.retweet_count},
        ...dat.entities.user_mentions && {user_mentions: dat.entities.user_mentions}
      }))
    });
  }

  OnApplySearchFilter(event){
    this.searchField = event;
  }

  OnApplyFilter(event){
    this.tweetsData = event;
  }
}
