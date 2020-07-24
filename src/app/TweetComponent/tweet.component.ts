import {Component, Input} from "@angular/core";

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})

export default class TweetComponent{
  @Input() data:Array<any>
  @Input() searchField: String;
}
