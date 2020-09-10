import { Component } from "@angular/core";
import PSPDFKit from "pspdfkit";
import licenseKey from "../license-key";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  title = "PSPDFKit for Web Angular Example";

  ngAfterViewInit() {
    PSPDFKit.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: "/assets/example.pdf",
      container: ".pspdfkit-container",
      licenseKey
    }).then(instance => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
    });
  }
}
