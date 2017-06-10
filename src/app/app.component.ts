import { Component , HostListener, ElementRef, Renderer, ViewContainerRef} from '@angular/core';
import { User } from "app/user/user";
import 'rxjs/add/operator/merge';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing Apps';
  currentTime: Date = new Date();
  public currentUser: User;
  private globalClickCallbackFn: Function;
  constructor(
		public elementRef: ElementRef,
		public renderer: Renderer,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef

  ) {
    window.setInterval(
      () => this.currentTime = new Date(), 1000
    );
  }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("Global Click Event Listener >" + event);
    });
  }

}
