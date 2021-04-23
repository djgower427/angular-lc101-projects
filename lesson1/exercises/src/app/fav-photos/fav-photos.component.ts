import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Rad Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://uploads-ssl.webflow.com/5a568cc4c8be6900019872d4/5e7d7033eaf7ec302520e84e_BuddyGardnerLogoWhite%20(1)-p-500.png';
  image3 = 'https://pbs.twimg.com/media/C_FFjVkUQAASQgC.jpg';

  constructor() { }

  ngOnInit() {
  }

}