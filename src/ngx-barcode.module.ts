import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxBarcodeComponent } from "./ngx-barcode.component";
import { NgxSVGBarcodeComponent } from "./ngx-svg-barcode.component";

@NgModule({
  imports: [],
  declarations: [NgxSVGBarcodeComponent, NgxBarcodeComponent],
  exports: [NgxSVGBarcodeComponent, NgxBarcodeComponent]
})
export class NgxBarcodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBarcodeModule,
      providers: []
    };
  }
}
