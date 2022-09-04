import { Component, OnInit, Renderer2 } from '@angular/core';
import { ICede } from 'src/interfaces/cede.interface';
import { IPhoto } from 'src/interfaces/photo.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public photos: IPhoto[] | undefined = [];
  public URLsPhotos: any[] = [];
  public photoDTOs: any[] = [];
  public cedes: ICede[] | null = null;
  constructor(
    private readonly _homeSvc: HomeService,
    private readonly _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // this.getCedes();
  }

  getCedes() {
    this._homeSvc.getCedes().subscribe(
      (data) => {
        this.cedes = data;
        this.photos = data[0].photos;
        console.log({ cedes: data });
      },
      (err) => {
        console.log({ error: err });
      }
    );
  }

  uploadsFiles(event: any) {
    this.photos = [];
    const uploads = event.target.files;
    for (let i = 0; i < uploads.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(uploads[i]);
      reader.onloadend = () => {
        this._homeSvc
          .uploadFile(Date.now() + '_' + uploads[i].name, reader.result)
          .then((photoUrl) => {
            console.log({ photoUrl: photoUrl })
            // const photoDTO = {
            //   name: uploads[i].name,
            //   photoPath: photoUrl,
            // };
            // this.photoDTOs.push(photoDTO);
            // if (i + 1 === uploads.length) {
            //   this._homeSvc
            //     .assignPhotosToCede('62f6dcb59d5db7423631c7f7', this.photoDTOs)
            //     .subscribe((data) => {
            //       console.log({ cede: data });
            //       this.photos = data[0].photos;
            //     });
            // }
          });
      };
    }
  }
}
