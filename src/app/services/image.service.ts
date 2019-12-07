import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { async } from 'q';

@Injectable({
  providedIn: "root"
})
export class ImageService {
  img: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public getImage() {
    /*async(
      await this.downloadImage().subscribe(result => {
        this.convertImage(result);
      })
  
      )
      return this.img;*/
  }

  convertImage(img){
    let objectURL = URL.createObjectURL(img);
    img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  private downloadImage() {
    return this.http.get(
      "http://localhost:3000/api/articles/img/5de2eb1ec5a6644ff0e7d647",
      {
        responseType: "blob"
      }
    );
  }
}
