import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userId: string = '62cdbefb4d25562030e1dfec';
  public user: IUser | null = null;

  constructor(private _proflieSvc: ProfileService) {}

  ngOnInit(): void {
    // this.getUser(this.userId);
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const accessTokenParse = JSON.parse(accessToken);
      if (accessTokenParse) {
        this.user = accessTokenParse.user;
        console.log({ user: this.user });
      }
    }
  }

  getUser(userId: string): void {
    this._proflieSvc.getUser(userId).subscribe(
      (user) => {
        console.log({ user: user });
        this.user = user;
      },
      (err) => console.log({ error: err })
    );
  }
}
