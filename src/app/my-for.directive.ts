import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyFor][myForOf]'
})
export class MyForDirective {

  constructor(private view: ViewContainerRef, private tmpl: TemplateRef<any>) { }

  @Input()
  set myForOf(data: any[]) {
    this.view.clear();

    data.forEach((item, index) => {
      this.view.createEmbeddedView(this.tmpl, {
        $implicit: item,
        index
      });
    });
  }

}
